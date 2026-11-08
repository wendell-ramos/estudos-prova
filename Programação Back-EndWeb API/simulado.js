(function () {
  "use strict";

  var banco = window.API_SIMULADO;
  var ids = ["inicio", "questao", "resultado", "quantidade", "total-banco", "total-extra", "comecar-extra", "voltar-inicio", "temas", "materiais",
    "comecar", "contador", "respondidas", "progresso", "modo", "acertos", "erros",
    "tema", "tipo", "enunciado", "bloco-codigo", "codigo", "resposta", "alternativas",
    "feedback", "feedback-titulo", "resposta-correta", "explicacao", "fonte",
    "dica", "confirmar", "proxima", "resultado-titulo", "resumo-resultado",
    "percentual", "total-acertos", "total-erros", "mensagem-resultado",
    "refazer", "treinar-erros"];
  var el = {};
  ids.forEach(function (id) { el[id] = document.getElementById(id); });

  if (!banco || !Array.isArray(banco.questoes) || banco.questoes.length === 0) {
    var aviso = document.createElement("p");
    aviso.textContent = "Não foi possível carregar as questões. Confira se questoes.js está na mesma pasta deste index.html.";
    el.inicio.appendChild(aviso);
    return;
  }

  var estado = {
    fila: [], indice: 0, selecionada: null, confirmada: false,
    acertos: 0, erradas: [], modo: "completo", origem: "completo"
  };
  var letras = ["A", "B", "C", "D"];

  function mostrar(tela) {
    document.body.dataset.tela = tela;
    ["inicio", "questao", "resultado"].forEach(function (nome) {
      el[nome].hidden = nome !== tela;
    });
  }

  function focar(titulo) {
    titulo.focus({ preventScroll: true });
    window.scrollTo(0, 0);
  }

  function embaralhar(lista) {
    var copia = lista.slice();
    for (var i = copia.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var atual = copia[i];
      copia[i] = copia[j];
      copia[j] = atual;
    }
    return copia;
  }

  function prepararQuestao(questao) {
    // Recuperar o banco original evita reutilizar o gabarito já embaralhado no treino.
    var original = banco.questoes.concat(banco.extras).find(function (q) { return q.id === questao.id; });
    var opcoes = embaralhar(original.alternativas.map(function (texto, indice) {
      return { texto: texto, correta: indice === original.correta };
    }));
    return Object.assign({}, original, {
      alternativas: opcoes.map(function (opcao) { return opcao.texto; }),
      correta: opcoes.findIndex(function (opcao) { return opcao.correta; })
    });
  }

  function nomeDoModo() {
    if (estado.modo === "erros") return "Treino de questões erradas";
    return estado.origem === "extra" ? "Revisão extra · projetos do semestre" : "Simulado principal";
  }

  function sortearSimulado(lista) {
    var selecionadas = [];
    Object.keys(banco.distribuicao).forEach(function (grupo) {
      var questoes = lista.filter(function (q) { return q.grupo === grupo; });
      selecionadas = selecionadas.concat(embaralhar(questoes).slice(0, banco.distribuicao[grupo]));
    });
    return embaralhar(selecionadas);
  }

  function atualizarPlacar() {
    var respondidas = estado.indice + (estado.confirmada ? 1 : 0);
    el.contador.textContent = "Questão " + (estado.indice + 1) + " de " + estado.fila.length;
    el.respondidas.textContent = respondidas + " respondida" + (respondidas === 1 ? "" : "s");
    el.progresso.max = estado.fila.length;
    el.progresso.value = respondidas;
    el.modo.textContent = nomeDoModo();
    el.acertos.textContent = estado.acertos;
    el.erros.textContent = estado.erradas.length;
  }

  function selecionar(indice) {
    if (estado.confirmada) return;
    estado.selecionada = indice;
    Array.from(el.alternativas.children).forEach(function (label, i) {
      label.classList.toggle("selecionada", i === indice);
    });
    el.confirmar.disabled = false;
    el.dica.textContent = "Alternativa " + letras[indice] + " selecionada. Confirme para conferir.";
  }

  function renderizarQuestao() {
    var questao = estado.fila[estado.indice];
    var temCodigo = Boolean(questao.codigo);
    el.questao.dataset.layout = questao.imagem ? "diagrama"
      : temCodigo ? (questao.codigo.split("\n").length <= 3 ? "codigo-curto" : "codigo-longo")
      : "texto";
    estado.selecionada = null;
    estado.confirmada = false;
    el.questao.dataset.questaoId = questao.id;
    el.questao.dataset.comCodigo = String(Boolean(questao.codigo));
    el.questao.dataset.codigoCurto = String(Boolean(questao.codigo) && questao.codigo.split("\n").length <= 5);
    el.tema.textContent = questao.tema;
    el.tipo.textContent = questao.tipo;
    el.enunciado.textContent = questao.enunciado;
    // O código é inserido como texto; nenhum trecho é interpretado como HTML.
    el.codigo.textContent = questao.codigo;
    var linguagem = "C#";
    if (/^(SELECT|INSERT|UPDATE|DELETE|CREATE|ALTER|FOREIGN KEY)/i.test(questao.codigo.trim())) {
      linguagem = "SQL";
    } else if (questao.codigo.trim().startsWith("{") || questao.codigo.trim().startsWith("[")) {
      linguagem = "JSON";
    } else if (/^(GET|POST|PUT|PATCH|DELETE)\s/i.test(questao.codigo.trim())) {
      linguagem = "HTTP";
    }
    el["bloco-codigo"].querySelector(".legenda-codigo span").textContent = linguagem;
    el["bloco-codigo"].hidden = !questao.codigo;
    el.alternativas.replaceChildren();
    questao.alternativas.forEach(function (texto, indice) {
      var label = document.createElement("label");
      label.className = "alternativa";
      var input = document.createElement("input");
      input.type = "radio";
      input.name = "alternativa";
      input.id = "alternativa-" + indice;
      input.value = indice;
      input.addEventListener("change", function () { selecionar(indice); });
      var letra = document.createElement("span");
      letra.className = "letra";
      letra.textContent = letras[indice];
      letra.setAttribute("aria-hidden", "true");
      var conteudo = document.createElement("span");
      conteudo.className = "texto-alternativa";
      conteudo.textContent = texto;
      label.append(input, letra, conteudo);
      el.alternativas.appendChild(label);
    });
    el.feedback.hidden = true;
    el.feedback.className = "feedback";
    el.confirmar.hidden = false;
    el.confirmar.disabled = true;
    el.proxima.hidden = true;
    el.proxima.textContent = estado.indice === estado.fila.length - 1 ? "Ver resultado →" : "Próxima →";
    el.dica.textContent = "Escolha uma alternativa para confirmar.";
    atualizarPlacar();
    focar(el.enunciado);
  }

  function iniciar(lista, modo) {
    if (!lista.length) return;
    estado.fila = (modo === "completo" ? sortearSimulado(lista) : embaralhar(lista)).map(prepararQuestao);
    if (modo !== "erros") estado.origem = modo;
    estado.indice = 0;
    estado.selecionada = null;
    estado.confirmada = false;
    estado.acertos = 0;
    estado.erradas = [];
    estado.modo = modo;
    mostrar("questao");
    renderizarQuestao();
  }

  function confirmar(evento) {
    evento.preventDefault();
    if (estado.confirmada || estado.selecionada === null) return;
    var questao = estado.fila[estado.indice];
    var acertou = estado.selecionada === questao.correta;
    estado.confirmada = true;
    if (acertou) estado.acertos++;
    else estado.erradas.push(questao);

    Array.from(el.alternativas.children).forEach(function (label, indice) {
      label.classList.add("bloqueada");
      label.querySelector("input").disabled = true;
      var correta = indice === questao.correta;
      var escolhida = indice === estado.selecionada;
      label.classList.toggle("correta", correta);
      label.classList.toggle("incorreta", escolhida && !correta);
      if (correta || escolhida) {
        var marcador = document.createElement("span");
        marcador.className = "marcador";
        marcador.textContent = correta
          ? (escolhida ? "✓ Sua resposta está correta" : "✓ Resposta correta")
          : "✕ Sua resposta está incorreta";
        label.querySelector(".texto-alternativa").appendChild(marcador);
      }
    });

    el["feedback-titulo"].textContent = acertou ? "Você acertou!" : "Você errou. Vamos revisar.";
    el["resposta-correta"].textContent = "Resposta correta: " + letras[questao.correta] + " — " + questao.alternativas[questao.correta];
    el.explicacao.textContent = questao.explicacao;
    el.fonte.textContent = "Base: " + banco.fontes[questao.base];
    el.feedback.classList.add(acertou ? "acertou" : "errou");
    el.feedback.hidden = false;
    el.confirmar.hidden = true;
    el.confirmar.disabled = true;
    el.proxima.hidden = false;
    el.dica.textContent = "Leia a explicação e avance quando quiser.";
    atualizarPlacar();
    el["feedback-titulo"].focus({ preventScroll: true });
    el.feedback.scrollIntoView({ block: "nearest", behavior: "auto" });
  }

  function finalizar() {
    var total = estado.fila.length;
    var erros = estado.erradas.length;
    var percentual = Math.round(estado.acertos / total * 100);
    el["resumo-resultado"].textContent = nomeDoModo()
      + " · " + total + " quest" + (total === 1 ? "ão respondida." : "ões respondidas.");
    el.percentual.textContent = percentual + "%";
    el["total-acertos"].textContent = estado.acertos;
    el["total-erros"].textContent = erros;
    el["mensagem-resultado"].textContent = erros
      ? "Você pode refazer esta revisão ou praticar apenas as questões que errou nesta tentativa."
      : "Você acertou todas as questões desta tentativa. Se quiser, comece uma nova revisão.";
    el.refazer.textContent = estado.origem === "extra" ? "Refazer revisão extra" : "Novo simulado de 25 questões";
    el["treinar-erros"].disabled = erros === 0;
    el["treinar-erros"].textContent = erros
      ? "Treinar " + erros + " quest" + (erros === 1 ? "ão errada" : "ões erradas")
      : "Nenhuma questão errada para treinar";
    mostrar("resultado");
    focar(el["resultado-titulo"]);
  }

  el.comecar.addEventListener("click", function () { iniciar(banco.questoes, "completo"); });
  el.resposta.addEventListener("submit", confirmar);
  el.proxima.addEventListener("click", function () {
    if (!estado.confirmada) return;
    if (estado.indice === estado.fila.length - 1) finalizar();
    else { estado.indice++; renderizarQuestao(); }
  });
  el.refazer.addEventListener("click", function () {
    if (estado.origem === "extra") iniciar(banco.extras, "extra");
    else iniciar(banco.questoes, "completo");
  });
  el["comecar-extra"].addEventListener("click", function () { iniciar(banco.extras, "extra"); });
  el["voltar-inicio"].addEventListener("click", function () {
    mostrar("inicio");
    focar(document.getElementById("inicio-titulo"));
  });
  el["treinar-erros"].addEventListener("click", function () {
    if (estado.erradas.length) iniciar(estado.erradas.slice(), "erros");
  });

  el.quantidade.textContent = banco.questoesPorTentativa;
  el["total-banco"].textContent = banco.questoes.length;
  el["total-extra"].textContent = banco.extras.length;
  el.progresso.max = banco.questoesPorTentativa;
  Array.from(new Set(banco.questoes.map(function (q) { return q.tema; }))).forEach(function (tema) {
    var li = document.createElement("li");
    li.textContent = tema;
    el.temas.appendChild(li);
  });
  Object.keys(banco.fontes).forEach(function (chave) {
    var li = document.createElement("li");
    li.textContent = banco.fontes[chave];
    el.materiais.appendChild(li);
  });
  el.comecar.disabled = false;
  el["comecar-extra"].disabled = banco.extras.length === 0;
})();

