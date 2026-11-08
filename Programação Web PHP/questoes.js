// Questões autorais de revisão, baseadas nos materiais indicados em fontes.
// correta é o índice da resposta no banco; a interface embaralha as alternativas em cada tentativa.
window.PHP_SIMULADO = {
  "titulo": "Programação Web PHP",
  "versao": 4,
  "questoesPorTentativa": 25,
  "distribuicao": {
    "http": 7,
    "fundamentos": 8,
    "formularios": 5,
    "mvc": 5
  },
  "fontes": {
    "roteiro": "Quatro fotos das orientações para a prova: Apache/HTTP, fundamentos, formulários/superglobais e MVC. Questões autorais de aplicação desses assuntos.",
    "funcoes": "Aula 3 (conteudo/aula3/index.php): funções, parâmetros, valores padrão e retorno.",
    "formularios": "Lista II (conteudo/Lista_II/ex1.php a ex6.php) e formulário da aula 7: campos, GET/POST, cálculos e validações.",
    "mvc": "Aulas 7 e 8: index.php, controller.php, CategoriaController, Render, views e composer.json.",
    "poo": "Aula 6: construtores, propriedades, encapsulamento e métodos.",
    "fixacao": "Fixações III e IV: classes Categoria, Produto, Aluno, Livro e Professor.",
    "pdo": "Aula 9: Database.php e ProductService.php. FETCH_ASSOC também foi exigido no enunciado do projeto compartilhado."
  },
  "questoes": [
    {
      "id": "php-97",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "Você acessa localhost/loja/index.php no mesmo notebook em que o XAMPP está instalado. Como ficam os papéis de cliente e servidor?",
      "codigo": "",
      "alternativas": [
        "O navegador faz a requisição como cliente; o Apache atende como servidor, mesmo estando na mesma máquina.",
        "O navegador faz a requisição como cliente; localhost faz o PHP ser executado pelo próprio navegador.",
        "O Apache inicia a requisição como cliente; o navegador devolve o HTML como resposta do servidor.",
        "O notebook atua só como cliente; para existir um servidor é necessário acessar outra máquina."
      ],
      "correta": 0,
      "explicacao": "Cliente e servidor são papéis na comunicação, não uma exigência de computadores separados. O navegador solicita o recurso e o Apache atende a solicitação. localhost aponta para a própria máquina.",
      "base": "roteiro"
    },
    {
      "id": "php-98",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "No XAMPP, o Apache está ativo e o MySQL está parado. Uma página PHP apenas calcula uma média, sem acessar banco. Qual conclusão está correta?",
      "codigo": "",
      "alternativas": [
        "A página só pode responder se o MySQL estiver ativo, pois todo PHP depende dele.",
        "A página pode responder, pois Apache/PHP podem processar o cálculo sem usar MySQL.",
        "A página será enviada sem execução, pois é o MySQL que interpreta o PHP.",
        "A página só pode responder se o navegador assumir o processamento do PHP."
      ],
      "correta": 1,
      "explicacao": "O XAMPP reúne serviços diferentes. O Apache atende à requisição e utiliza o interpretador PHP configurado. O MySQL só é necessário quando a aplicação solicita dados desse serviço.",
      "base": "roteiro"
    },
    {
      "id": "php-99",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Resultado",
      "enunciado": "Uma requisição HTTP chega ao servidor configurado com PHP. Qual é o corpo da resposta produzido pelo trecho?",
      "codigo": "<?php\n$nome = \"Ana\";\necho \"<h1>Olá, \" . $nome . \"</h1>\";",
      "alternativas": [
        "<h1>Olá, $nome</h1>",
        "Olá, Ana",
        "<h1>Olá, Ana</h1>",
        "echo \"<h1>Olá, Ana</h1>\";"
      ],
      "correta": 2,
      "explicacao": "O PHP concatena a string Olá, com o valor Ana e envia as tags HTML junto com o texto. O corpo contém <h1>Olá, Ana</h1>; a apresentação visual do navegador não mostra as tags, mas elas fazem parte da resposta.",
      "base": "roteiro"
    },
    {
      "id": "php-100",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "Um formulário envia uma quantidade ao PHP, que calcula o total e devolve HTML. Qual sequência descreve o request e o response?",
      "codigo": "",
      "alternativas": [
        "O navegador calcula o total; o request leva o HTML pronto; o Apache apenas o devolve.",
        "O servidor envia o formulário como request; o navegador devolve o total como response.",
        "O navegador envia os campos como response; o PHP devolve o HTML como request.",
        "O navegador envia os campos no request; o servidor calcula; o HTML volta no response."
      ],
      "correta": 3,
      "explicacao": "Request é a solicitação enviada pelo cliente, incluindo os dados do formulário. Response é a resposta do servidor após o processamento. No cenário descrito, o cálculo ocorre no PHP antes da devolução do HTML.",
      "base": "roteiro"
    },
    {
      "id": "php-101",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "Uma API segue os usos convencionais de GET, POST, PUT e DELETE. Para consultar /produtos, criar um produto, substituir os dados de /produtos/7 e excluir esse produto, qual sequência de métodos é adequada?",
      "codigo": "",
      "alternativas": [
        "GET, POST, PUT, DELETE.",
        "GET, PUT, POST, DELETE.",
        "POST, GET, PUT, DELETE.",
        "GET, POST, DELETE, PUT."
      ],
      "correta": 0,
      "explicacao": "GET consulta; POST cria; PUT pode substituir os dados de um recurso identificado; DELETE exclui. A mesma ideia de recurso pode ter ações distintas conforme o método. O servidor ainda precisa implementar essas rotas.",
      "base": "roteiro"
    },
    {
      "id": "php-102",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "Um formulário POST é enviado para /cadastro.php?origem=menu por HTTP sem HTTPS. Qual descrição do envio está correta?",
      "codigo": "",
      "alternativas": [
        "Os campos e origem ficam no corpo; POST impede que sejam lidos durante o transporte.",
        "Os campos ficam no corpo, origem permanece na query string e POST não fornece criptografia.",
        "Os campos ficam na query string, origem vai para o corpo e POST não fornece criptografia.",
        "Os campos ficam no corpo, origem deixa de ser enviado e POST fornece criptografia."
      ],
      "correta": 1,
      "explicacao": "A URL pode continuar contendo uma query string mesmo quando o método é POST. Os campos do formulário vão no corpo. POST organiza o envio, mas não criptografa o transporte; essa proteção depende de HTTPS.",
      "base": "roteiro"
    },
    {
      "id": "php-103",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "O Apache usa a porta 8080 e tem C:\\xampp\\htdocs como raiz. O arquivo está em htdocs\\loja\\index.php. Qual URL solicita esse PHP ao Apache?",
      "codigo": "",
      "alternativas": [
        "http://localhost/loja/index.php:8080",
        "http://localhost:8080/htdocs/loja/index.php",
        "http://localhost:8080/loja/index.php",
        "http://localhost/8080/loja/index.php"
      ],
      "correta": 2,
      "explicacao": "A porta aparece depois do host, separada por dois-pontos. O caminho é relativo à raiz de documentos: htdocs não entra novamente na URL. O endereço correto é http://localhost:8080/loja/index.php.",
      "base": "roteiro"
    },
    {
      "id": "php-104",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Aplicação",
      "enunciado": "A rota é /produtos/{id}. Um POST para /produtos/7?categoria=2 envia nome=Boné no corpo. Qual é a origem de cada dado?",
      "codigo": "",
      "alternativas": [
        "id=7: query string; categoria=2: rota; nome=Boné: corpo.",
        "id=7: rota; categoria=2: corpo; nome=Boné: query string.",
        "id=7: corpo; categoria=2: query string; nome=Boné: rota.",
        "id=7: rota; categoria=2: query string; nome=Boné: corpo."
      ],
      "correta": 3,
      "explicacao": "O 7 ocupa o lugar de {id} no caminho. categoria=2 vem depois de ? e é query string. nome=Boné foi enviado no corpo do POST. O parâmetro de rota precisa ser extraído pelo roteador; não vira automaticamente uma chave de $_GET.",
      "base": "roteiro"
    },
    {
      "id": "php-65",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Leitura de código",
      "enunciado": "JSON representa dados em texto. Qual corpo JSON este PHP envia, considerando também os tipos de id e nome?",
      "codigo": "<?php\n$produto = [\"id\" => 7, \"nome\" => \"Camisa\"];\nheader(\"Content-Type: application/json; charset=UTF-8\");\necho json_encode($produto);",
      "alternativas": [
        "{\"id\":7,\"nome\":\"Camisa\"}",
        "{\"id\":\"7\",\"nome\":\"Camisa\"}",
        "[7,\"Camisa\"]",
        "[{\"id\":7,\"nome\":\"Camisa\"}]"
      ],
      "correta": 0,
      "explicacao": "O array associativo vira um objeto JSON, com as chaves id e nome. O inteiro 7 continua numérico, sem aspas, e a string Camisa fica entre aspas. Não foi criado um array externo nem uma lista que descarte as chaves.",
      "base": "mvc"
    },
    {
      "id": "php-111",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Identificação de erro",
      "enunciado": "O servidor envia o cabeçalho application/json e o corpo abaixo. Qual avaliação está correta?",
      "codigo": "<?php\nheader(\"Content-Type: application/json\");\necho \"nome=Ana\";",
      "alternativas": [
        "O cabeçalho converte o corpo para {\"nome\":\"Ana\"} antes de enviá-lo.",
        "O corpo continua nome=Ana e não é JSON válido; o cabeçalho apenas anuncia o formato.",
        "O cabeçalho envolve o corpo em aspas e envia uma string JSON válida.",
        "O corpo é JSON válido, porque pares com sinal de igual representam objetos JSON."
      ],
      "correta": 1,
      "explicacao": "O Content-Type não transforma a saída. nome=Ana é um texto no estilo de campo de formulário, não um objeto JSON. Para produzir o objeto, o PHP poderia aplicar json_encode() a [\"nome\" => \"Ana\"].",
      "base": "mvc"
    },
    {
      "id": "php-01",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Quais tipos são exibidos, na ordem?",
      "codigo": "<?php\n$quantidade = \"3\";\n$total = $quantidade * 2;\necho gettype($quantidade) . \"|\" . gettype($total);",
      "alternativas": [
        "integer|integer",
        "integer|string",
        "string|integer",
        "string|string"
      ],
      "correta": 2,
      "explicacao": "A variável quantidade foi criada com uma string. Ao multiplicá-la por 2, PHP usa seu valor numérico e produz o inteiro 6 em total. A operação não altera o tipo da variável quantidade.",
      "base": "roteiro"
    },
    {
      "id": "php-02",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída, respeitando a diferença entre somar e concatenar?",
      "codigo": "<?php\n$a = \"2\";\n$b = \"3\";\necho ($a + $b) . \"|\" . $a . $b;",
      "alternativas": [
        "23|23",
        "5|5",
        "23|5",
        "5|23"
      ],
      "correta": 3,
      "explicacao": "O operador + realiza a soma numérica de 2 e 3, resultando em 5. Depois do separador, o ponto junta as strings 2 e 3, produzindo 23.",
      "base": "roteiro"
    },
    {
      "id": "php-06",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual valor aparece após o for?",
      "codigo": "<?php\n$total = 0;\nfor ($i = 1; $i <= 5; $i++) {\n    if ($i % 2 != 0) {\n        $total += $i;\n    }\n}\necho $total;",
      "alternativas": [
        "9",
        "6",
        "12",
        "15"
      ],
      "correta": 0,
      "explicacao": "O resto da divisão por 2 é diferente de zero nos valores ímpares 1, 3 e 5. Só esses valores entram na soma: 1 + 3 + 5 = 9. Somar todas as iterações daria 15.",
      "base": "roteiro"
    },
    {
      "id": "php-07",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual texto é exibido ao percorrer este array associativo?",
      "codigo": "<?php\n$estoque = [\"caneta\" => 4, \"caderno\" => 2];\nforeach ($estoque as $nome => $quantidade) {\n    echo $nome . \":\" . $quantidade . \";\";\n}",
      "alternativas": [
        "0:4;1:2;",
        "caneta:4;caderno:2;",
        "4:caneta;2:caderno;",
        "caneta:0;caderno:1;"
      ],
      "correta": 1,
      "explicacao": "Em foreach ($array as $chave => $valor), nome recebe a chave textual e quantidade recebe o valor. As chaves são caneta e caderno, não os índices 0 e 1 de uma lista comum.",
      "base": "roteiro"
    },
    {
      "id": "php-13",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída deste trecho?",
      "codigo": "<?php\nfunction dobro($numero) {\n    return $numero * 2;\n}\n$resultado = dobro(3);\ndobro(4);\necho $resultado;",
      "alternativas": [
        "8",
        "68",
        "6",
        "14"
      ],
      "correta": 2,
      "explicacao": "A primeira chamada devolve 6 e o armazena. A segunda devolve 8, mas esse retorno não é usado nem exibido. O único echo mostra o valor armazenado, 6. return não equivale a imprimir.",
      "base": "funcoes"
    },
    {
      "id": "php-105",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Com a constante e as duas condições abaixo, qual texto aparece?",
      "codigo": "<?php\nconst MINIMO = 6;\n$nota = 11;\nif ($nota >= MINIMO && $nota <= 10) {\n    echo \"aprovado\";\n} elseif ($nota > 10) {\n    echo \"nota inválida\";\n} else {\n    echo \"rever\";\n}",
      "alternativas": [
        "aprovado",
        "rever",
        "aprovadonota inválida",
        "nota inválida"
      ],
      "correta": 3,
      "explicacao": "Embora 11 seja maior ou igual a 6, ele não atende à condição nota <= 10. O && exige ambas. O primeiro bloco é descartado e o elseif identifica a nota acima do limite.",
      "base": "roteiro"
    },
    {
      "id": "php-106",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída deste switch?",
      "codigo": "<?php\n$status = \"pago\";\nswitch ($status) {\n    case \"pago\":\n        echo \"A\";\n    case \"enviado\":\n        echo \"B\";\n        break;\n    default:\n        echo \"C\";\n}",
      "alternativas": [
        "AB",
        "A",
        "B",
        "ABC"
      ],
      "correta": 0,
      "explicacao": "O switch entra em pago e exibe A. Como não há break nesse caso, continua no bloco seguinte e exibe B. O break depois de B impede a execução do default.",
      "base": "roteiro"
    },
    {
      "id": "php-107",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Quais são os valores de total e i quando o while termina?",
      "codigo": "<?php\n$i = 1;\n$total = 0;\nwhile ($total < 7) {\n    $total += $i;\n    $i++;\n}\necho $total . \"|\" . $i;",
      "alternativas": [
        "6|4",
        "10|5",
        "7|4",
        "10|4"
      ],
      "correta": 1,
      "explicacao": "As somas deixam total em 1, 3, 6 e 10. Na última iteração, i ainda vale 4 durante a soma e depois passa a 5. Só então a condição é verificada de novo, encerrando o laço.",
      "base": "roteiro"
    },
    {
      "id": "php-112",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual texto é exibido depois de alterar o array indexado?",
      "codigo": "<?php\n$itens = [\"mouse\", \"teclado\", \"monitor\"];\n$itens[1] = \"fone\";\n$itens[] = \"cabo\";\necho $itens[1] . \"|\" . $itens[3];",
      "alternativas": [
        "teclado|cabo",
        "mouse|monitor",
        "fone|cabo",
        "fone|monitor"
      ],
      "correta": 2,
      "explicacao": "A lista começa no índice 0. O índice 1 corresponde a teclado e é substituído por fone. O novo item é acrescentado no índice 3, depois dos índices 0, 1 e 2.",
      "base": "roteiro"
    },
    {
      "id": "php-113",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída das três comparações? Considere PHP 8+.",
      "codigo": "<?php\n$valor = \"7\";\necho ($valor == 7 ? \"S\" : \"N\");\necho ($valor === 7 ? \"S\" : \"N\");\necho ($valor != 7 ? \"S\" : \"N\");",
      "alternativas": [
        "SSN",
        "NNS",
        "SNN",
        "SNS"
      ],
      "correta": 2,
      "explicacao": "A string numérica \"7\" e o inteiro 7 têm valores equivalentes para ==, então a primeira resposta é S. === também exige tipos iguais, portanto dá N. Como os valores são equivalentes, != é falso e produz N.",
      "base": "roteiro"
    },
    {
      "id": "php-114",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual acesso será informado?",
      "codigo": "<?php\n$logado = false;\n$visitante = true;\n$bloqueado = false;\nif (($logado || $visitante) && !$bloqueado) {\n    if ($logado) {\n        echo \"membro\";\n    } else {\n        echo \"visitante\";\n    }\n} else {\n    echo \"restrito\";\n}",
      "alternativas": [
        "membro",
        "restrito",
        "membrovisitante",
        "visitante"
      ],
      "correta": 3,
      "explicacao": "O || é verdadeiro porque visitante é true. A negação de bloqueado também é verdadeira, permitindo entrar no primeiro bloco. Dentro dele, logado é false, então o else interno exibe visitante.",
      "base": "roteiro"
    },
    {
      "id": "php-115",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Identificação de erro",
      "enunciado": "O programador queria comparar a nota, mas escreveu uma atribuição no if. O que o trecho efetivamente exibe?",
      "codigo": "<?php\n$nota = 4;\nif ($nota = 7) {\n    echo \"aprovado\";\n} else {\n    echo \"reprovado\";\n}\necho \"|\" . $nota;",
      "alternativas": [
        "aprovado|7",
        "reprovado|4",
        "aprovado|4",
        "reprovado|7"
      ],
      "correta": 0,
      "explicacao": "O = atribui 7 à variável, em vez de compará-la. O valor atribuído, 7, é considerado verdadeiro na condição. Por isso o bloco aprovado executa e a nota final é 7. Para comparar, seriam usados == ou === conforme os tipos esperados.",
      "base": "roteiro"
    },
    {
      "id": "php-116",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Quais classificações são retornadas para os dois preços?",
      "codigo": "<?php\nfunction classificar($preco) {\n    if ($preco < 100) {\n        return \"E\";\n    } elseif ($preco <= 500) {\n        return \"I\";\n    } else {\n        return \"P\";\n    }\n}\necho classificar(100) . \"|\" . classificar(500);",
      "alternativas": [
        "E|I",
        "I|I",
        "I|P",
        "E|P"
      ],
      "correta": 1,
      "explicacao": "O limite inferior é exclusivo: 100 não atende a preco < 100. Os dois valores atendem ao segundo teste, preco <= 500, cujo limite superior é inclusivo. Ambas as chamadas retornam I.",
      "base": "formularios"
    },
    {
      "id": "php-117",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual valor é somado pelo foreach?",
      "codigo": "<?php\n$numeros = [10, 20, 30];\n$total = 0;\nforeach ($numeros as $indice => $valor) {\n    if ($indice > 0) {\n        $total += $valor;\n    }\n}\necho $total;",
      "alternativas": [
        "60",
        "30",
        "50",
        "3"
      ],
      "correta": 2,
      "explicacao": "Os índices são 0, 1 e 2. O teste exclui o item de índice 0, cujo valor é 10. Somam-se os valores dos índices 1 e 2: 20 + 30 = 50. O teste usa o índice, mas a soma usa o valor.",
      "base": "roteiro"
    },
    {
      "id": "php-118",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Quais totais são exibidos, considerando o parâmetro padrão?",
      "codigo": "<?php\n$quantidade = 5;\nfunction total($preco, $quantidade = 2) {\n    return $preco * $quantidade;\n}\necho total(10) . \"|\" . total(10, 3);",
      "alternativas": [
        "50|30",
        "20|20",
        "50|50",
        "20|30"
      ],
      "correta": 3,
      "explicacao": "Na primeira chamada falta o segundo argumento, então o parâmetro usa o padrão 2: 10 × 2 = 20. Na segunda ele recebe 3 e retorna 30. A variável externa de mesmo nome não substitui o parâmetro local.",
      "base": "funcoes"
    },
    {
      "id": "php-119",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Esta função usa echo, não return. Qual é a saída completa?",
      "codigo": "<?php\nfunction mostrarDobro($numero) {\n    echo $numero * 2;\n}\necho \"A\";\n$retorno = mostrarDobro(3);\necho \"|\";\necho $retorno;",
      "alternativas": [
        "A6|",
        "A|6",
        "A6|6",
        "A|"
      ],
      "correta": 0,
      "explicacao": "Primeiro aparece A. Durante a chamada, a função imprime 6. Depois aparece |. Como não há return, retorno recebe null, que não acrescenta texto quando passado a echo. O que foi exibido pela função não foi armazenado em retorno.",
      "base": "funcoes"
    },
    {
      "id": "php-19",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Aplicação",
      "enunciado": "O formulário está em /loja/form.php. O usuário digita mouse e envia, sem JavaScript interceptar. Qual requisição resulta desse HTML?",
      "codigo": "<form action=\"buscar.php\">\n    <input id=\"busca\" name=\"termo\" value=\"mouse\">\n    <button type=\"submit\">Buscar</button>\n</form>",
      "alternativas": [
        "POST /loja/buscar.php, com termo=mouse no corpo.",
        "GET /loja/buscar.php?termo=mouse.",
        "GET /loja/form.php?termo=mouse.",
        "GET /loja/buscar.php?busca=mouse."
      ],
      "correta": 1,
      "explicacao": "Sem method, o formulário usa GET. action aponta para buscar.php na mesma pasta da página. O nome do parâmetro vem de name=\"termo\", não de id=\"busca\".",
      "base": "formularios"
    },
    {
      "id": "php-20",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Identificação de erro",
      "enunciado": "Ao enviar 12.50 pelo formulário, calcular.php precisa recuperar esse preço. Qual leitura está alinhada ao envio?",
      "codigo": "<form action=\"calcular.php\" method=\"post\">\n    <input id=\"valor\" name=\"preco\" value=\"12.50\">\n    <button type=\"submit\">Calcular</button>\n</form>",
      "alternativas": [
        "$preco = (float) $_GET[\"preco\"];",
        "$preco = (float) $_POST[\"valor\"];",
        "$preco = (float) $_POST[\"preco\"];",
        "$preco = (float) $_GET[\"valor\"];"
      ],
      "correta": 2,
      "explicacao": "POST define a superglobal e name=\"preco\" define a chave. id=\"valor\" serve para identificar o elemento no HTML, mas não muda o nome enviado. A conversão numérica é feita depois de recuperar o campo.",
      "base": "formularios"
    },
    {
      "id": "php-21",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O campo nome foi enviado vazio. Qual resultado é produzido pela existência do campo e pela validação do conteúdo?",
      "codigo": "<?php\n$_POST[\"nome\"] = \"\";\necho isset($_POST[\"nome\"]) ? \"recebido\" : \"ausente\";\necho trim($_POST[\"nome\"]) === \"\" ? \"|inválido\" : \"|válido\";",
      "alternativas": [
        "ausente|inválido",
        "recebido|válido",
        "ausente|válido",
        "recebido|inválido"
      ],
      "correta": 3,
      "explicacao": "isset() confirma que a chave existe e não contém null; ele não exige texto preenchido. A segunda verificação encontra uma string vazia após trim(), portanto o conteúdo é inválido. Receber um campo e validá-lo são etapas diferentes.",
      "base": "formularios"
    },
    {
      "id": "php-22",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O formulário foi enviado com preco=12.50 e quantidade=3. Considere PHP 8+. Qual valor numérico o processamento exibe?",
      "codigo": "<?php\n$preco = (float) $_POST[\"preco\"];\n$quantidade = (int) $_POST[\"quantidade\"];\n$total = $preco * $quantidade;\necho $total;",
      "alternativas": [
        "37.5",
        "36",
        "15.5",
        "12503"
      ],
      "correta": 0,
      "explicacao": "O preço vira 12.5 e a quantidade vira 3. O resultado de multiplicar é 37.5. Converter o preço para inteiro descartaria a parte decimal e produziria 36, mas o trecho usa float.",
      "base": "formularios"
    },
    {
      "id": "php-108",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O usuário abre /resultado.php?nome=Ana diretamente pela barra de endereços. Nenhum formulário foi enviado. Qual ramo executa e o que aparece?",
      "codigo": "<?php\nif ($_SERVER[\"REQUEST_METHOD\"] === \"POST\") {\n    echo \"POST:\" . ($_POST[\"nome\"] ?? \"vazio\");\n} else {\n    echo \"GET:\" . ($_GET[\"nome\"] ?? \"vazio\");\n}",
      "alternativas": [
        "POST:Ana",
        "GET:Ana",
        "POST:vazio",
        "GET:vazio"
      ],
      "correta": 1,
      "explicacao": "Abrir essa URL gera uma requisição GET. O método vem de REQUEST_METHOD, e o parâmetro depois de ? está em $_GET. A presença de um parâmetro na URL não faz a requisição se tornar POST.",
      "base": "mvc"
    },
    {
      "id": "php-120",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O usuário envia os valores deste formulário, e media.php executa o PHP abaixo. Qual resultado o PHP acrescenta à resposta?",
      "codigo": "<form action=\"media.php\" method=\"get\">\n    <input name=\"n1\" value=\"4\">\n    <input name=\"n2\" value=\"8\">\n    <button type=\"submit\">Calcular</button>\n</form>\n\n<?php\n$media = ((float) $_GET[\"n1\"] + (float) $_GET[\"n2\"]) / 2;\nif ($media >= 7) {\n    echo \"aprovado:\" . $media;\n} else {\n    echo \"recuperação:\" . $media;\n}",
      "alternativas": [
        "aprovado:6",
        "aprovado:8",
        "recuperação:6",
        "recuperação:4"
      ],
      "correta": 2,
      "explicacao": "Os valores vêm dos campos name=\"n1\" e name=\"n2\" via GET. A média é (4 + 8) / 2 = 6. Como 6 não é maior ou igual a 7, executa o else e aparece recuperação:6.",
      "base": "formularios"
    },
    {
      "id": "php-121",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "Um POST envia quantidade=-2. Qual mensagem o servidor produz com esta validação?",
      "codigo": "<?php\nif (!isset($_POST[\"quantidade\"])) {\n    echo \"campo ausente\";\n} elseif ((int) $_POST[\"quantidade\"] < 1) {\n    echo \"quantidade inválida\";\n} else {\n    echo \"total:\" . ((int) $_POST[\"quantidade\"] * 10);\n}",
      "alternativas": [
        "total:-20",
        "campo ausente",
        "total:20",
        "quantidade inválida"
      ],
      "correta": 3,
      "explicacao": "A chave existe, então o primeiro bloco não executa. -2 é menor que 1, fazendo o elseif rejeitar a quantidade antes do cálculo. isset() sozinho não garantiria um valor adequado.",
      "base": "formularios"
    },
    {
      "id": "php-122",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "Um formulário POST envia id=9 para /salvar.php?id=7. Qual resultado o PHP produz ao ler cada origem separadamente?",
      "codigo": "<?php\necho $_GET[\"id\"] . \"|\" . $_POST[\"id\"];",
      "alternativas": [
        "7|9",
        "9|7",
        "9|9",
        "7|7"
      ],
      "correta": 0,
      "explicacao": "$_GET guarda o id=7 da query string, enquanto $_POST guarda o id=9 do corpo do formulário. Os nomes iguais não fundem nem substituem automaticamente os dois arrays.",
      "base": "formularios"
    },
    {
      "id": "php-123",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O usuário digita Ana e envia este formulário para salvar.php. Qual texto o processamento PHP exibe?",
      "codigo": "<form action=\"salvar.php\" method=\"post\">\n    <input id=\"nome\" value=\"Ana\">\n    <button type=\"submit\">Salvar</button>\n</form>\n\n<?php\necho $_POST[\"nome\"] ?? \"não recebido\";",
      "alternativas": [
        "Ana",
        "não recebido",
        "nome",
        "Uma string vazia"
      ],
      "correta": 1,
      "explicacao": "O input não tem name. Por isso o envio não cria a chave nome em $_POST, embora o campo tenha id e value. O operador ?? usa o texto alternativo quando a chave não está definida.",
      "base": "formularios"
    },
    {
      "id": "php-124",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Identificação de erro",
      "enunciado": "Um POST envia nome vazio. O código pretende rejeitá-lo, mas só imprime um aviso. Qual saída ele realmente produz?",
      "codigo": "<?php\n$nome = trim($_POST[\"nome\"] ?? \"\");\nif ($nome === \"\") {\n    echo \"erro|\";\n}\necho \"salvo\";",
      "alternativas": [
        "erro|",
        "salvo",
        "erro|salvo",
        "Nenhum texto"
      ],
      "correta": 2,
      "explicacao": "O if imprime o aviso, mas não interrompe a execução. Como o último echo está fora do if, salvo também aparece. O fluxo deve separar o caso válido, por exemplo com else ou com uma interrupção após o erro; required no HTML não substitui essa validação no servidor.",
      "base": "formularios"
    },
    {
      "id": "php-57",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Aplicação",
      "enunciado": "Na listagem filtrada de produtos, o controller já recebeu o termo da busca. Em uma separação MVC, qual divisão para obter e apresentar os registros é a mais adequada?",
      "codigo": "",
      "alternativas": [
        "A View consulta os registros e repassa o resultado ao Model para montar o HTML.",
        "O Model monta o HTML dos registros e o controller o repassa à View para consultar.",
        "O controller consulta diretamente os registros e o Model escolhe a View que será exibida.",
        "O controller pede os registros ao Model e os entrega à View para montar o HTML."
      ],
      "correta": 3,
      "explicacao": "O controller coordena o caso de uso. O Model concentra a obtenção dos dados, e a View apresenta o resultado. Receber o filtro no controller não o obriga a misturar a consulta e a geração de HTML no mesmo lugar.",
      "base": "mvc"
    },
    {
      "id": "php-58",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Aplicação",
      "enunciado": "No MVC simples com roteamento centralizado em index.php, qual caminho descreve uma consulta que precisa dos dados do Model?",
      "codigo": "",
      "alternativas": [
        "index.php seleciona a ação → controller solicita dados ao Model → controller entrega dados à View → HTML volta na resposta.",
        "index.php seleciona a ação → Model escolhe a rota → View solicita dados ao controller → HTML volta na resposta.",
        "index.php seleciona a ação → View consulta o Model → Model escolhe o controller → HTML volta na resposta.",
        "index.php seleciona a ação → controller apresenta HTML → View consulta o Model → dados voltam ao index.php para escolher a rota."
      ],
      "correta": 0,
      "explicacao": "index.php funciona como entrada do roteamento nessa organização. O controller executa a ação, usa o Model quando precisa de dados e prepara a View. O conteúdo renderizado compõe a resposta ao cliente. Uma página sem acesso a dados não precisa chamar o Model só para cumprir uma sequência.",
      "base": "mvc"
    },
    {
      "id": "php-59",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Aplicação",
      "enunciado": "O autoload já está configurado. Qual é o efeito específico da instrução use, antes de qualquer new ou chamada de método?",
      "codigo": "<?php\nuse App\\Controllers\\CategoriaController;",
      "alternativas": [
        "Localiza e executa o arquivo da classe imediatamente, como um require.",
        "Permite usar CategoriaController como nome curto da classe nesse arquivo.",
        "Cria uma instância de CategoriaController para a rota atual.",
        "Chama o método index() de CategoriaController para montar a resposta."
      ],
      "correta": 1,
      "explicacao": "use importa o nome da classe para o contexto do arquivo. Isso não equivale a incluir o arquivo com require, instanciar um objeto ou executar um método. O carregamento pode ocorrer depois, pelo autoload, quando a classe for utilizada.",
      "base": "mvc"
    },
    {
      "id": "php-60",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Identificação de erro",
      "enunciado": "O Composer já gerou um autoload PSR-4 correto e o namespace da classe está certo. index.php tem use e new, mas não carregou o autoload. Qual inclusão resolve essa falta?",
      "codigo": "<?php\nuse App\\Controllers\\CategoriaController;\n$controller = new CategoriaController();",
      "alternativas": [
        "require_once __DIR__ . \"/composer.json\";",
        "require_once __DIR__ . \"/composer.lock\";",
        "require_once __DIR__ . \"/vendor/autoload.php\";",
        "require_once __DIR__ . \"/app/Views/layout.php\";"
      ],
      "correta": 2,
      "explicacao": "vendor/autoload.php registra o mecanismo de carregamento gerado pelo Composer. composer.json é sua configuração, não o carregador a executar. O use permite o nome curto, mas não substitui a inclusão do autoload.",
      "base": "mvc"
    },
    {
      "id": "php-61",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Resultado",
      "enunciado": "Após os tratamentos usados no roteamento da aula, qual caminho é exibido?",
      "codigo": "<?php\n$uri = \"/aula8/categorias/?busca=livros\";\n$uri = strtok($uri, \"?\");\n$basedir = \"/aula8\";\nif (str_starts_with($uri, $basedir)) {\n    $uri = substr($uri, strlen($basedir));\n}\n$uri = rtrim($uri, \"/\");\necho $uri;",
      "alternativas": [
        "/aula8/categorias",
        "/categorias/?busca=livros",
        "categorias",
        "/categorias"
      ],
      "correta": 3,
      "explicacao": "strtok() separa a query string. O substr() retira o prefixo /aula8, e rtrim() elimina a barra final. A barra inicial não é removida, deixando /categorias.",
      "base": "mvc"
    },
    {
      "id": "php-62",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Leitura de código",
      "enunciado": "A requisição tem método POST e URI /api/categorias. Qual ação o roteador abaixo seleciona?",
      "codigo": "<?php\n$uri = $_SERVER[\"REQUEST_URI\"];\n$metodo = $_SERVER[\"REQUEST_METHOD\"];\nif ($uri === \"/api/categorias\" && $metodo === \"GET\") {\n    echo \"listar\";\n} elseif ($uri === \"/api/categorias\" && $metodo === \"POST\") {\n    echo \"cadastrar\";\n} else {\n    echo \"rota não encontrada\";\n}",
      "alternativas": [
        "cadastrar",
        "listar",
        "listarcadastrar",
        "rota não encontrada"
      ],
      "correta": 0,
      "explicacao": "O primeiro teste falha porque o método não é GET. O elseif combina a mesma URI com POST e seleciona cadastrar. O caminho sozinho não determina qual ação deve ser executada.",
      "base": "mvc"
    },
    {
      "id": "php-109",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Identificação de erro",
      "enunciado": "config.php não existe no caminho informado, e não há tratamento da falha. Qual é o comportamento do require neste trecho?",
      "codigo": "<?php\nrequire __DIR__ . \"/config.php\";\necho \"continuou\";",
      "alternativas": [
        "Emite um aviso de inclusão e chega ao echo, mostrando continuou.",
        "Falha na inclusão obrigatória e interrompe o fluxo antes do echo.",
        "Retorna false da inclusão e chega ao echo, mostrando continuou.",
        "Não inclui configurações e encerra normalmente, sem informar falha."
      ],
      "correta": 1,
      "explicacao": "require exige que a inclusão seja bem-sucedida. Se o arquivo não pode ser carregado, a falha sem tratamento interrompe o fluxo. Confundir esse comportamento com o de include pode levar à ideia incorreta de que o echo será executado.",
      "base": "mvc"
    },
    {
      "id": "php-110",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Aplicação",
      "enunciado": "O Composer mapeia o prefixo App\\ para app/. Pelo PSR-4, qual caminho corresponde a App\\Controllers\\ProdutoController?",
      "codigo": "",
      "alternativas": [
        "app/ProdutoController.php",
        "app/App/Controllers/ProdutoController.php",
        "app/Controllers/ProdutoController.php",
        "app/Controllers/App/ProdutoController.php"
      ],
      "correta": 2,
      "explicacao": "O prefixo App\\ é substituído pela pasta app/. O restante, Controllers\\ProdutoController, vira Controllers/ProdutoController.php. Não se repete App como subpasta após aplicar o mapeamento.",
      "base": "mvc"
    }
  ],
  "extras": [
    {
      "id": "php-45",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Resultado",
      "enunciado": "Qual saída demonstra o estado de cada uma das duas instâncias?",
      "codigo": "<?php\nclass Carro {\n    public string $marca;\n    public function __construct(string $marca) {\n        $this->marca = $marca;\n    }\n}\n$a = new Carro(\"Fiat\");\n$b = new Carro(\"Ford\");\n$a->marca = \"Honda\";\necho $a->marca . \"|\" . $b->marca;",
      "alternativas": [
        "Fiat|Ford",
        "Honda|Honda",
        "Ford|Honda",
        "Honda|Ford"
      ],
      "correta": 3,
      "explicacao": "Cada new cria uma instância com seu próprio estado. Alterar a marca de a para Honda não altera b, que continua com Ford. A propriedade não é estática nem compartilhada entre esses objetos.",
      "base": "poo"
    },
    {
      "id": "php-47",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Identificação de erro",
      "enunciado": "Qual é o comportamento do acesso feito fora da classe?",
      "codigo": "<?php\nclass Conta {\n    private float $saldo = 20;\n}\n$conta = new Conta();\necho $conta->saldo;",
      "alternativas": [
        "O acesso falha por violar a visibilidade de saldo.",
        "O acesso imprime 20, pois o objeto pertence ao mesmo arquivo.",
        "O acesso imprime 0, pois a propriedade é numérica e privada.",
        "O acesso não imprime texto, como se a propriedade fosse null."
      ],
      "correta": 0,
      "explicacao": "private restringe o acesso direto à própria classe, independentemente de estar no mesmo arquivo. Não ocorre conversão para zero nem leitura silenciosa de null. Um método público poderia expor o saldo de forma controlada.",
      "base": "poo"
    },
    {
      "id": "php-53",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Resultado",
      "enunciado": "Qual média o método retorna?",
      "codigo": "<?php\nclass Aluno {\n    private float $nota1;\n    private float $nota2;\n    public function __construct(float $n1, float $n2) {\n        $this->nota1 = $n1;\n        $this->nota2 = $n2;\n    }\n    public function calcularMedia() {\n        return ($this->nota1 + $this->nota2) / 2;\n    }\n}\necho (new Aluno(8, 9))->calcularMedia();",
      "alternativas": [
        "8",
        "8.5",
        "9",
        "17"
      ],
      "correta": 1,
      "explicacao": "As duas propriedades recebem 8 e 9. Os parênteses fazem a soma ocorrer antes da divisão: 17 / 2 = 8.5. Não há conversão para inteiro nem arredondamento no trecho.",
      "base": "fixacao"
    },
    {
      "id": "php-67",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Leitura de código",
      "enunciado": "Qual interpretação dos componentes desta DSN está correta?",
      "codigo": "<?php\n$dsn = \"mysql:host=localhost;dbname=loja;charset=utf8mb4\";",
      "alternativas": [
        "Driver: mysql; host: loja; banco: localhost; charset: utf8mb4.",
        "Driver: localhost; host: mysql; banco: loja; charset: utf8mb4.",
        "Driver: mysql; host: localhost; banco: loja; charset: utf8mb4.",
        "Driver: mysql; host: localhost; banco: utf8mb4; charset: loja."
      ],
      "correta": 2,
      "explicacao": "mysql: identifica o driver. host informa o servidor, dbname o banco e charset o conjunto de caracteres. O usuário e a senha não estão nessa DSN do exemplo; são argumentos separados do construtor PDO.",
      "base": "pdo"
    },
    {
      "id": "php-70",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Aplicação",
      "enunciado": "Ao inserir um nome recebido do usuário, qual é a função de :name e do array passado a execute()?",
      "codigo": "<?php\n$sql = \"INSERT INTO products (name) VALUES (:name)\";\n$stmt = $db->prepare($sql);\n$stmt->execute([\":name\" => $name]);",
      "alternativas": [
        "Validar o preenchimento de name antes de executar o INSERT.",
        "Inserir o valor de name no texto SQL antes da preparação.",
        "Usar name como nome de coluna definido pelo próprio usuário.",
        "Vincular name como valor, separado da estrutura do comando SQL."
      ],
      "correta": 3,
      "explicacao": "O placeholder marca um valor a ser vinculado. A estrutura SQL é preparada e o dado é fornecido separadamente. Isso não verifica automaticamente regras de negócio, como campo obrigatório, nem permite substituir nomes de colunas por parâmetros de valor.",
      "base": "pdo"
    },
    {
      "id": "php-72",
      "grupo": "extra",
      "tema": "Classes e PDO · revisão extra",
      "tipo": "Leitura de código",
      "enunciado": "fetchAll(PDO::FETCH_ASSOC) retornou uma lista cuja primeira linha tem id=7 e nome=Mouse. Qual expressão lê o nome dessa primeira linha?",
      "codigo": "<?php\n$produtos = $stmt->fetchAll(PDO::FETCH_ASSOC);",
      "alternativas": [
        "$produtos[0][\"nome\"]",
        "$produtos[\"nome\"]",
        "$produtos[0][0]",
        "$produtos[\"produtos\"][\"nome\"]"
      ],
      "correta": 0,
      "explicacao": "fetchAll() devolve uma lista de linhas. O índice 0 seleciona a primeira linha; FETCH_ASSOC permite acessar suas colunas pelo nome, como [\"nome\"]. A lista externa não recebe automaticamente uma chave produtos.",
      "base": "pdo"
    }
  ]
};
