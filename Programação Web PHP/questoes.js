// Questões autorais baseadas nas aulas e no roteiro de PHP.
// formato organiza o sorteio; correta aponta para a alternativa antes do embaralhamento.
window.PHP_SIMULADO = {
  "titulo": "Programação Web PHP",
  "versao": 5,
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
      "tipo": "Direta",
      "enunciado": "Na comunicação HTTP, qual é o papel do cliente?",
      "codigo": "",
      "alternativas": [
        "Enviar a requisição e receber a resposta.",
        "Receber a requisição e produzir a resposta.",
        "Executar o PHP e devolver o HTML ao navegador.",
        "Consultar os dados e escolher a View do servidor."
      ],
      "correta": 0,
      "explicacao": "O cliente inicia a comunicação enviando uma requisição. O servidor a processa e devolve uma resposta.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-98",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "Qual é a função do Apache no XAMPP?",
      "codigo": "",
      "alternativas": [
        "Armazenar e consultar os dados das tabelas.",
        "Atender às requisições web e encaminhar a execução do PHP.",
        "Interpretar o HTML recebido e desenhar a página.",
        "Gerenciar as bibliotecas instaladas no projeto PHP."
      ],
      "correta": 1,
      "explicacao": "O Apache é o servidor web. Ele atende às requisições e usa o interpretador PHP configurado quando o recurso precisa desse processamento.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-99",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "Em uma aplicação web servida pelo Apache, onde o código PHP é executado?",
      "codigo": "",
      "alternativas": [
        "No navegador, antes de enviar a requisição.",
        "No navegador, depois de receber o HTML.",
        "No servidor, durante o processamento da requisição.",
        "No banco de dados, durante a geração da resposta."
      ],
      "correta": 2,
      "explicacao": "O PHP é executado no servidor. O navegador recebe a saída produzida, como HTML ou JSON.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-100",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "O que são request e response em HTTP?",
      "codigo": "",
      "alternativas": [
        "Request é a resposta; response é a solicitação.",
        "Request é a rota; response é o método HTTP.",
        "Request é o corpo enviado; response é apenas o status.",
        "Request é a solicitação; response é a resposta do servidor."
      ],
      "correta": 3,
      "explicacao": "Request é a solicitação feita pelo cliente. Response é o retorno do servidor, que pode incluir status, cabeçalhos e corpo.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-101",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "Qual associação corresponde aos usos convencionais dos métodos HTTP?",
      "codigo": "",
      "alternativas": [
        "GET consulta; POST cria; PUT atualiza; DELETE exclui.",
        "GET consulta; PUT cria; POST atualiza; DELETE exclui.",
        "POST consulta; GET cria; PUT atualiza; DELETE exclui.",
        "GET consulta; POST cria; DELETE atualiza; PUT exclui."
      ],
      "correta": 0,
      "explicacao": "GET consulta, POST normalmente cria, PUT pode substituir os dados de um recurso e DELETE solicita sua remoção.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-102",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Resultado",
      "enunciado": "Qual é o corpo da resposta gerado por este PHP?",
      "codigo": "<?php\n$nome = \"Ana\";\necho \"<h1>Olá, \" . $nome . \"</h1>\";",
      "alternativas": [
        "<h1>Olá, $nome</h1>",
        "Olá, Ana",
        "<h1>Olá, Ana</h1>",
        "echo \"<h1>Olá, Ana</h1>\";"
      ],
      "correta": 2,
      "explicacao": "O servidor substitui a variável por Ana e envia o HTML <h1>Olá, Ana</h1>. As tags fazem parte do corpo, embora não apareçam como texto na página renderizada.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-103",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Situação",
      "enunciado": "O Apache usa a porta 8080 e a raiz htdocs. Qual URL acessa htdocs/loja/index.php?",
      "codigo": "",
      "alternativas": [
        "http://localhost/loja/index.php:8080",
        "http://localhost:8080/htdocs/loja/index.php",
        "http://localhost:8080/loja/index.php",
        "http://localhost/8080/loja/index.php"
      ],
      "correta": 2,
      "explicacao": "A porta vem depois do host, com dois-pontos. O caminho começa dentro da raiz htdocs, sem repetir o nome dessa pasta.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-104",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Situação",
      "enunciado": "Na rota /produtos/{id}, um POST para /produtos/7?categoria=2 envia nome=Boné no corpo. De onde vem cada valor?",
      "codigo": "",
      "alternativas": [
        "id=7: query string; categoria=2: rota; nome=Boné: corpo.",
        "id=7: rota; categoria=2: corpo; nome=Boné: query string.",
        "id=7: corpo; categoria=2: query string; nome=Boné: rota.",
        "id=7: rota; categoria=2: query string; nome=Boné: corpo."
      ],
      "correta": 3,
      "explicacao": "7 é o parâmetro da rota, categoria=2 vem da query string e nome=Boné vem do corpo. O roteador precisa extrair o parâmetro do caminho.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-65",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "O que é JSON?",
      "codigo": "",
      "alternativas": [
        "Uma linguagem de marcação para estruturar páginas.",
        "Um formato textual para representar e trocar dados.",
        "Um protocolo para transportar requisições na web.",
        "Um mecanismo para carregar classes automaticamente."
      ],
      "correta": 1,
      "explicacao": "JSON é um formato textual de dados, com objetos, listas e valores. Uma resposta PHP pode usar json_encode() para produzir esse formato.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-111",
      "grupo": "http",
      "tema": "Apache e HTTP",
      "tipo": "Direta",
      "enunciado": "Em uma URL, a que localhost se refere?",
      "codigo": "",
      "alternativas": [
        "À pasta que contém o arquivo PHP solicitado.",
        "Ao banco configurado para a aplicação atual.",
        "À própria máquina que está acessando o endereço.",
        "Ao nome da aplicação dentro da pasta htdocs."
      ],
      "correta": 2,
      "explicacao": "localhost aponta para a própria máquina. Para atender a uma URL HTTP local, é necessário que haja um servidor ativo no endereço e na porta usados.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-01",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual declaração cria uma variável com um valor do tipo string?",
      "codigo": "",
      "alternativas": [
        "$nome = \"Ana\";",
        "$nome = 10;",
        "$nome = true;",
        "$nome = [\"Ana\"];"
      ],
      "correta": 0,
      "explicacao": "\"Ana\" é um texto, portanto uma string. Os outros valores são, respectivamente, inteiro, booleano e array.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-02",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual operador concatena strings em PHP?",
      "codigo": "",
      "alternativas": [
        "+",
        ".",
        "=>",
        "==="
      ],
      "correta": 1,
      "explicacao": "O ponto junta strings. O sinal + faz soma, => associa uma chave a um valor e === compara valor e tipo.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-06",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual valor o for exibe?",
      "codigo": "<?php\n$total = 0;\nfor ($i = 1; $i <= 5; $i++) {\n    if ($i % 2 != 0) {\n        $total += $i;\n    }\n}\necho $total;",
      "alternativas": [
        "9",
        "6",
        "12",
        "15"
      ],
      "correta": 0,
      "explicacao": "O teste com % seleciona os ímpares 1, 3 e 5. A soma é 9; somar todos os valores daria 15.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-07",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída deste foreach?",
      "codigo": "<?php\n$estoque = [\"caneta\" => 4, \"caderno\" => 2];\nforeach ($estoque as $nome => $quantidade) {\n    echo $nome . \":\" . $quantidade . \";\";\n}",
      "alternativas": [
        "0:4;1:2;",
        "caneta:4;caderno:2;",
        "4:caneta;2:caderno;",
        "caneta:0;caderno:1;"
      ],
      "correta": 1,
      "explicacao": "nome recebe a chave textual e quantidade recebe o valor. As chaves são caneta e caderno, não os índices 0 e 1.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-13",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual valor é exibido?",
      "codigo": "<?php\nfunction dobro($numero) {\n    return $numero * 2;\n}\n$resultado = dobro(3);\ndobro(4);\necho $resultado;",
      "alternativas": [
        "8",
        "68",
        "6",
        "14"
      ],
      "correta": 2,
      "explicacao": "A primeira chamada retorna 6 e o armazena. A chamada com 4 retorna 8, mas não o exibe nem altera resultado; o echo mostra 6.",
      "base": "funcoes",
      "formato": "aplicacao"
    },
    {
      "id": "php-105",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual é a finalidade de uma constante em PHP?",
      "codigo": "",
      "alternativas": [
        "Guardar um valor que pode mudar durante a execução.",
        "Guardar um valor acessível apenas dentro de um laço.",
        "Dar nome a um valor que não será redefinido na execução.",
        "Dar nome ao valor devolvido por uma função."
      ],
      "correta": 2,
      "explicacao": "Uma constante representa um valor que não deve ser redefinido. Ela pode ser declarada com const e é referenciada sem o $ de uma variável.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-106",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual texto este switch exibe?",
      "codigo": "<?php\n$status = \"enviado\";\nswitch ($status) {\n    case \"pago\": echo \"separar\"; break;\n    case \"enviado\": echo \"acompanhar\"; break;\n    default: echo \"aguardar\";\n}",
      "alternativas": [
        "separar",
        "acompanhar",
        "aguardar",
        "separaracompanhar"
      ],
      "correta": 1,
      "explicacao": "O valor enviado corresponde ao segundo case. O break encerra o switch depois de exibir acompanhar.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-107",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual é a saída deste while?",
      "codigo": "<?php\n$i = 1;\nwhile ($i <= 3) {\n    echo $i;\n    $i++;\n}",
      "alternativas": [
        "123",
        "012",
        "1234",
        "234"
      ],
      "correta": 0,
      "explicacao": "O laço exibe 1, 2 e 3. Depois do incremento para 4, a condição fica falsa e a repetição termina.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-112",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual texto é exibido após alterar o array?",
      "codigo": "<?php\n$itens = [\"mouse\", \"teclado\", \"monitor\"];\n$itens[1] = \"fone\";\n$itens[] = \"cabo\";\necho $itens[1] . \"|\" . $itens[3];",
      "alternativas": [
        "teclado|cabo",
        "mouse|monitor",
        "fone|cabo",
        "fone|monitor"
      ],
      "correta": 2,
      "explicacao": "O índice 1, inicialmente teclado, passa a conter fone. O item acrescentado fica no índice 3, pois a lista começou no índice 0.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-113",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual é a diferença entre == e === em PHP?",
      "codigo": "",
      "alternativas": [
        "== compara apenas tipos; === compara apenas valores.",
        "== atribui um valor; === compara valor e tipo.",
        "Ambos exigem o mesmo valor e o mesmo tipo.",
        "== compara valores; === exige valor e tipo iguais."
      ],
      "correta": 3,
      "explicacao": "== permite comparação com conversão de tipos. === exige que o valor e o tipo sejam iguais.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-114",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual mensagem a condição lógica permite exibir?",
      "codigo": "<?php\n$logado = false; $visitante = true;\n$bloqueado = false;\nif (($logado || $visitante) && !$bloqueado) {\n    echo \"liberado\";\n} else {\n    echo \"negado\";\n}",
      "alternativas": [
        "liberado",
        "negado",
        "liberadonegado",
        "Nenhum texto"
      ],
      "correta": 0,
      "explicacao": "O || é verdadeiro porque visitante é true. !$bloqueado também é verdadeiro, então o bloco liberado executa.",
      "base": "roteiro",
      "formato": "aplicacao"
    },
    {
      "id": "php-115",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual instrução atribui o valor 7 à variável nota?",
      "codigo": "",
      "alternativas": [
        "$nota = 7;",
        "$nota == 7;",
        "$nota === 7;",
        "$nota != 7;"
      ],
      "correta": 0,
      "explicacao": "= faz atribuição. ==, === e != são operadores de comparação e não alteram a variável.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-116",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual classificação é exibida?",
      "codigo": "<?php\n$nota = 6;\nif ($nota >= 7) { echo \"aprovado\"; }\nelseif ($nota >= 5) { echo \"recuperação\"; }\nelse { echo \"reprovado\"; }",
      "alternativas": [
        "aprovado",
        "recuperação",
        "reprovado",
        "aprovadorecuperação"
      ],
      "correta": 1,
      "explicacao": "6 não atende ao primeiro teste, mas é maior ou igual a 5. O elseif executa e exibe recuperação.",
      "base": "formularios",
      "formato": "aplicacao"
    },
    {
      "id": "php-117",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Para que serve foreach em PHP?",
      "codigo": "",
      "alternativas": [
        "Escolher um bloco entre vários valores possíveis.",
        "Percorrer os elementos de um array.",
        "Definir o valor padrão de um parâmetro.",
        "Repetir um bloco enquanto uma condição for verdadeira."
      ],
      "correta": 1,
      "explicacao": "foreach percorre os elementos de um array. Ele pode fornecer só o valor ou a chave e o valor de cada elemento.",
      "base": "roteiro",
      "formato": "direta"
    },
    {
      "id": "php-118",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Resultado",
      "enunciado": "Qual total a função retorna nesta chamada?",
      "codigo": "<?php\nfunction total($preco, $quantidade = 2) {\n    return $preco * $quantidade;\n}\necho total(10);",
      "alternativas": [
        "10",
        "12",
        "20",
        "2"
      ],
      "correta": 2,
      "explicacao": "Como a chamada não informa a quantidade, o parâmetro usa o padrão 2. O retorno é 10 × 2 = 20.",
      "base": "funcoes",
      "formato": "aplicacao"
    },
    {
      "id": "php-119",
      "grupo": "fundamentos",
      "tema": "Fundamentos de PHP",
      "tipo": "Direta",
      "enunciado": "Qual é a diferença entre echo e return dentro de uma função?",
      "codigo": "",
      "alternativas": [
        "echo devolve um valor; return o envia à saída.",
        "Ambos exibem o valor e encerram a função.",
        "echo envia à saída; return devolve um valor e encerra a função.",
        "Ambos devolvem um valor sem produzir saída."
      ],
      "correta": 2,
      "explicacao": "echo produz saída. return encerra a função e devolve um valor a quem a chamou; esse retorno não é exibido automaticamente.",
      "base": "funcoes",
      "formato": "direta"
    },
    {
      "id": "php-19",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "O que o atributo action de um formulário define?",
      "codigo": "",
      "alternativas": [
        "O método HTTP utilizado no envio.",
        "O nome da chave enviada por cada campo.",
        "O tipo de dado aceito em cada input.",
        "O endereço que receberá o envio do formulário."
      ],
      "correta": 3,
      "explicacao": "action define o destino do formulário. O método é definido por method, e o nome enviado por cada campo vem de name.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-20",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "Qual superglobal recebe os campos de um formulário enviado por POST?",
      "codigo": "",
      "alternativas": [
        "$_POST",
        "$_GET",
        "$_SERVER",
        "$_FILES"
      ],
      "correta": 0,
      "explicacao": "Os campos de um formulário POST comum ficam em $_POST. $_FILES recebe arquivos enviados por upload.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-21",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "O que isset($_POST[\"nome\"]) verifica?",
      "codigo": "",
      "alternativas": [
        "Se nome contém um texto diferente de espaços.",
        "Se a chave nome está definida e não contém null.",
        "Se nome contém um valor numérico válido.",
        "Se o campo nome foi declarado com required."
      ],
      "correta": 1,
      "explicacao": "isset() verifica a existência com valor diferente de null. Ele não garante que o texto esteja preenchido ou válido.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-22",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "Por que validar os campos no PHP mesmo usando required no HTML?",
      "codigo": "",
      "alternativas": [
        "Porque required verifica apenas valores numéricos.",
        "Porque required só funciona em formulários GET.",
        "Porque uma requisição pode contornar a validação do navegador.",
        "Porque required é verificado pelo PHP após receber os campos."
      ],
      "correta": 2,
      "explicacao": "A validação do navegador pode ser contornada. O servidor precisa verificar os dados antes de processá-los ou salvá-los.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-108",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "Para que serve $_SERVER[\"REQUEST_METHOD\"]?",
      "codigo": "",
      "alternativas": [
        "Ler o caminho solicitado na URL.",
        "Ler os campos enviados na query string.",
        "Ler o nome do arquivo de entrada do projeto.",
        "Identificar o método HTTP da requisição atual."
      ],
      "correta": 3,
      "explicacao": "REQUEST_METHOD informa se a requisição atual usa GET, POST ou outro método. O roteamento pode usar esse valor para selecionar a ação.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-120",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "Sem o atributo method, qual método um formulário HTML usa por padrão?",
      "codigo": "",
      "alternativas": [
        "GET",
        "POST",
        "PUT",
        "DELETE"
      ],
      "correta": 0,
      "explicacao": "O padrão é GET. Os campos enviados são incluídos na query string.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-121",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "Um POST envia quantidade=-2. Qual mensagem o PHP exibe?",
      "codigo": "<?php\n$quantidade = (int) $_POST[\"quantidade\"];\nif ($quantidade < 1) {\n    echo \"quantidade inválida\";\n} else {\n    echo \"total:\" . ($quantidade * 10);\n}",
      "alternativas": [
        "total:-20",
        "campo ausente",
        "total:20",
        "quantidade inválida"
      ],
      "correta": 3,
      "explicacao": "-2 é menor que 1, então o PHP rejeita a quantidade. Receber o campo não significa que seu valor seja válido.",
      "base": "formularios",
      "formato": "aplicacao"
    },
    {
      "id": "php-122",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "Um POST envia id=9 para /salvar.php?id=7. Qual é a saída?",
      "codigo": "<?php\necho $_GET[\"id\"] . \"|\" . $_POST[\"id\"];",
      "alternativas": [
        "7|9",
        "9|7",
        "9|9",
        "7|7"
      ],
      "correta": 0,
      "explicacao": "$_GET lê o 7 da query string. $_POST lê o 9 do corpo; os dois arrays mantêm suas origens separadas.",
      "base": "formularios",
      "formato": "aplicacao"
    },
    {
      "id": "php-123",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Direta",
      "enunciado": "Qual atributo do input define a chave enviada ao PHP?",
      "codigo": "",
      "alternativas": [
        "id",
        "name",
        "value",
        "type"
      ],
      "correta": 1,
      "explicacao": "name define o nome enviado. id identifica o elemento no HTML, value define seu valor e type define o tipo do input.",
      "base": "formularios",
      "formato": "direta"
    },
    {
      "id": "php-124",
      "grupo": "formularios",
      "tema": "Formulários e superglobais",
      "tipo": "Resultado",
      "enunciado": "O formulário envia os valores mostrados. Qual total calcular.php exibe?",
      "codigo": "<form action=\"calcular.php\" method=\"post\">\n    <input name=\"preco\" value=\"10\">\n    <input name=\"quantidade\" value=\"3\">\n    <button type=\"submit\">Calcular</button>\n</form>\n\n<?php\n// calcular.php\necho (float) $_POST[\"preco\"] * (int) $_POST[\"quantidade\"];",
      "alternativas": [
        "13",
        "10",
        "30",
        "103"
      ],
      "correta": 2,
      "explicacao": "O formulário envia preco e quantidade por POST. O processamento multiplica 10 por 3 e exibe 30.",
      "base": "formularios",
      "formato": "aplicacao"
    },
    {
      "id": "php-57",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Direta",
      "enunciado": "Qual divisão de responsabilidades corresponde ao MVC usado nas aulas?",
      "codigo": "",
      "alternativas": [
        "Model: apresentação; View: dados; Controller: requisição.",
        "Model: dados; View: requisição; Controller: apresentação.",
        "Model: requisição; View: apresentação; Controller: dados.",
        "Model: dados; View: apresentação; Controller: requisição."
      ],
      "correta": 3,
      "explicacao": "O Model trata os dados, a View apresenta o conteúdo e o Controller coordena a requisição e as chamadas necessárias.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-58",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Direta",
      "enunciado": "Na estrutura com roteamento centralizado da aula 8, qual arquivo funciona como ponto de entrada?",
      "codigo": "",
      "alternativas": [
        "index.php",
        "config.php",
        "controller.php",
        "produto.php"
      ],
      "correta": 0,
      "explicacao": "Nessa estrutura, index.php recebe a requisição e direciona a rota. Isso não significa que toda aplicação PHP precise começar por um arquivo com esse nome.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-59",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Direta",
      "enunciado": "Para que serve use App\\Controllers\\CategoriaController?",
      "codigo": "",
      "alternativas": [
        "Carregar o arquivo da classe, como um require.",
        "Permitir usar CategoriaController como nome curto nesse arquivo.",
        "Criar uma instância da classe para a rota atual.",
        "Executar o método index() do controller importado."
      ],
      "correta": 1,
      "explicacao": "use importa o nome da classe no arquivo atual. Ele não cria o objeto nem executa seus métodos.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-60",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Direta",
      "enunciado": "Para que serve o autoload gerado pelo Composer?",
      "codigo": "",
      "alternativas": [
        "Selecionar o controller conforme a rota recebida.",
        "Renderizar a View usando os dados do Model.",
        "Carregar as classes conforme a configuração de namespaces.",
        "Incluir todas as classes e executar seus construtores."
      ],
      "correta": 2,
      "explicacao": "O Composer gerencia dependências e gera o autoload. Ao carregar vendor/autoload.php, o projeto registra o mecanismo que localiza as classes conforme a configuração.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-61",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Resultado",
      "enunciado": "Qual caminho é exibido ao separar a query string?",
      "codigo": "<?php\n$uri = \"/produtos?busca=mouse\";\n$rota = strtok($uri, \"?\");\necho $rota;",
      "alternativas": [
        "/produtos",
        "/produtos?busca=mouse",
        "busca=mouse",
        "produtos"
      ],
      "correta": 0,
      "explicacao": "strtok() obtém o texto antes do ?. A rota fica /produtos, e busca=mouse é a query string.",
      "base": "mvc",
      "formato": "aplicacao"
    },
    {
      "id": "php-62",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Resultado",
      "enunciado": "A rota /api/categorias recebe um POST. Qual ação é escolhida?",
      "codigo": "<?php\n$metodo = $_SERVER[\"REQUEST_METHOD\"];\nif ($metodo === \"GET\") {\n    echo \"listar\";\n} elseif ($metodo === \"POST\") {\n    echo \"cadastrar\";\n} else { echo \"rota não encontrada\"; }",
      "alternativas": [
        "cadastrar",
        "listar",
        "listarcadastrar",
        "rota não encontrada"
      ],
      "correta": 0,
      "explicacao": "O método não é GET, mas corresponde ao teste de POST. Nessa rota, o segundo bloco seleciona cadastrar.",
      "base": "mvc",
      "formato": "aplicacao"
    },
    {
      "id": "php-109",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Direta",
      "enunciado": "O que acontece se require não consegue carregar um arquivo e a falha não é tratada?",
      "codigo": "",
      "alternativas": [
        "Emite um aviso e segue para a próxima instrução.",
        "Retorna false e segue o restante do script.",
        "Interrompe apenas se o arquivo tiver erro de sintaxe.",
        "A inclusão falha e a execução é interrompida."
      ],
      "correta": 3,
      "explicacao": "require exige que a inclusão funcione. Sem tratamento, a falha interrompe a execução; ele não cria automaticamente o arquivo ausente.",
      "base": "mvc",
      "formato": "direta"
    },
    {
      "id": "php-110",
      "grupo": "mvc",
      "tema": "MVC, rotas e organização",
      "tipo": "Situação",
      "enunciado": "O controller de uma listagem precisa buscar produtos e mostrar HTML. Qual sequência respeita o MVC?",
      "codigo": "",
      "alternativas": [
        "View consulta → Model coordena → controller apresenta.",
        "Controller consulta → View coordena → Model apresenta.",
        "Controller pede dados ao Model → View apresenta os dados.",
        "Model escolhe a rota → View pede dados ao controller."
      ],
      "correta": 2,
      "explicacao": "O controller coordena o fluxo, solicita os dados ao Model e os entrega à View para apresentação.",
      "base": "mvc",
      "formato": "aplicacao"
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
  ],
  "distribuicaoFormatos": {
    "http": {
      "direta": 5,
      "aplicacao": 2
    },
    "fundamentos": {
      "direta": 3,
      "aplicacao": 5
    },
    "formularios": {
      "direta": 4,
      "aplicacao": 1
    },
    "mvc": {
      "direta": 3,
      "aplicacao": 2
    }
  }
};
