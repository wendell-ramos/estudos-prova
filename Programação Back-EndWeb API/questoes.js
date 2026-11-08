// Questões autorais de revisão baseadas nas aulas e nos projetos do semestre.
// O índice em "correta" aponta para o gabarito original; a interface embaralha as alternativas.
(function () {
  "use strict";

  function q(id, grupo, tema, tipo, enunciado, codigo, alternativas, correta, explicacao, base) {
    return { id: id, grupo: grupo, tema: tema, tipo: tipo, enunciado: enunciado, codigo: codigo, alternativas: alternativas, correta: correta, explicacao: explicacao, base: base };
  }

  window.API_SIMULADO = {
    titulo: "Programação Back-End Web API",
    versao: 2,
    questoesPorTentativa: 25,
    distribuicao: { fundamentos: 2, http: 7, aspnet: 4, efcore: 4, arquitetura: 4, seguranca: 4 },
    fontes: {
      aula01: "Aula 1 — APIs, cliente, servidor, requisição e resposta.",
      aula02: "Aula 2 — HTTP, métodos, parâmetros, status, WebServices, API e REST.",
      aula03: "Aula 3 — primeira API REST com ASP.NET Core, Program.cs, controllers e IActionResult.",
      aula04: "Aula 4 — endpoints e operações CRUD.",
      aula05: "Aula 5 — persistência, ORM, Entity Framework Core, DbContext e migrations.",
      aula06: "Aula 6 — controllers, entidades, DTOs, services e injeção de dependência.",
      aula08: "Aula 8 — Data Annotations, validação automática, erros e regras no service.",
      aula09: "Aula 9 — relacionamentos, Fluent API, chaves estrangeiras e filtros.",
      aula10: "Aula 10 — autenticação, autorização, tokens e JWT.",
      acervo: "Projeto Acervo usado nas aulas — livros, autores, categorias, filtros, DTOs e services.",
      organiza: "Projeto OrganizaAtividades — disciplinas, categorias, atividades, regras, filtros e JWT."
    },
    questoes: [
      q("api-001", "fundamentos", "APIs", "Conceito", "O que é uma API?", "", [
        "Uma interface que define como aplicações podem se comunicar.",
        "Um protocolo usado para transportar requisições na web.",
        "Uma ferramenta usada para testar endpoints.",
        "Um mapeamento entre classes e tabelas do banco."
      ], 0, "API é uma interface de comunicação entre aplicações. HTTP, Insomnia e ORM têm funções diferentes.", "aula01"),

      q("api-002", "fundamentos", "Cliente e servidor", "Situação", "Ao testar uma API local no Insomnia, quem é o cliente?", "", [
        "A API ASP.NET Core, porque devolve a resposta.",
        "O Insomnia, porque envia a requisição.",
        "O SQL Server, porque armazena os dados.",
        "O controller, porque recebe a rota."
      ], 1, "O cliente inicia a comunicação. Nesse teste, o Insomnia envia a requisição e a API atua como servidor.", "aula01"),

      q("api-003", "fundamentos", "HTTP", "Conceito", "Qual conjunto apresenta elementos de uma requisição HTTP?", "", [
        "Status, headers e corpo da resposta.",
        "Controller, service e DTO.",
        "Método, URL, headers e, quando necessário, corpo.",
        "Entidade, DbContext e migration."
      ], 2, "A requisição informa o método e a URL. Ela também pode levar headers e corpo.", "aula01"),

      q("api-004", "fundamentos", "Endpoints", "Conceito", "O que define um endpoint?", "", [
        "A classe e a tabela usadas pelo recurso.",
        "O status e o corpo devolvidos pela API.",
        "O controller e o service registrados no projeto.",
        "A combinação de uma rota com um método HTTP."
      ], 3, "Um endpoint combina rota e método HTTP para disponibilizar uma operação sobre um recurso.", "aula04"),

      q("api-005", "http", "Métodos HTTP", "Direta", "Qual método HTTP consulta um recurso sem criar ou alterar dados?", "", [
        "GET.", "POST.", "PUT.", "DELETE."
      ], 0, "GET é usado para consultar recursos.", "aula02"),

      q("api-006", "http", "Métodos HTTP", "Direta", "Qual método HTTP normalmente cria um recurso?", "", [
        "GET.", "POST.", "PUT.", "PATCH."
      ], 1, "POST é normalmente usado para criar um recurso em uma coleção.", "aula02"),

      q("api-007", "http", "Métodos HTTP", "Direta", "Qual método HTTP normalmente atualiza um recurso por completo?", "", [
        "GET.", "POST.", "PUT.", "PATCH."
      ], 2, "PUT representa uma atualização completa do recurso.", "aula02"),

      q("api-008", "http", "Métodos HTTP", "Direta", "Qual método HTTP atualiza parcialmente um recurso?", "", [
        "GET.", "POST.", "PUT.", "PATCH."
      ], 3, "PATCH é usado quando apenas parte do recurso será alterada.", "aula02"),

      q("api-009", "http", "Métodos HTTP", "Direta", "Qual método HTTP solicita a exclusão de um recurso?", "", [
        "DELETE.", "POST.", "PUT.", "PATCH."
      ], 0, "DELETE solicita a remoção do recurso identificado.", "aula02"),

      q("api-010", "http", "Códigos de status", "Situação", "A API encontrou o recurso e devolveu seus dados. Qual status é adequado?", "", [
        "201 Created.", "200 OK.", "204 No Content.", "404 Not Found."
      ], 1, "200 OK indica que a requisição foi atendida com sucesso e pode acompanhar um corpo de resposta.", "aula02"),

      q("api-011", "http", "Códigos de status", "Situação", "Um POST criou um recurso com sucesso. Qual status indica essa criação?", "", [
        "200 OK.", "204 No Content.", "201 Created.", "404 Not Found."
      ], 2, "201 Created indica que a requisição criou um novo recurso.", "aula04"),

      q("api-012", "http", "Códigos de status", "Situação", "Um DELETE foi concluído e a API não devolveu corpo. Qual status é adequado?", "", [
        "200 OK.", "201 Created.", "404 Not Found.", "204 No Content."
      ], 3, "204 No Content indica sucesso sem corpo de resposta.", "aula04"),

      q("api-013", "http", "Códigos de status", "Situação", "O JSON chegou à API, mas um campo obrigatório está vazio. Qual status deve indicar a falha de validação?", "", [
        "400 Bad Request.", "401 Unauthorized.", "403 Forbidden.", "404 Not Found."
      ], 0, "400 Bad Request é adequado quando os dados enviados não atendem às validações.", "aula08"),

      q("api-014", "http", "Códigos de status", "Situação", "Um endpoint protegido foi chamado sem um token válido. Qual status é esperado?", "", [
        "400 Bad Request.", "401 Unauthorized.", "403 Forbidden.", "404 Not Found."
      ], 1, "401 indica que a requisição não apresentou autenticação válida.", "aula10"),

      q("api-015", "http", "Códigos de status", "Situação", "O token é válido, mas o perfil do usuário não permite executar a operação. Qual status é esperado?", "", [
        "400 Bad Request.", "401 Unauthorized.", "403 Forbidden.", "404 Not Found."
      ], 2, "403 indica que o usuário está autenticado, mas não tem autorização para a operação.", "aula10"),

      q("api-016", "http", "Códigos de status", "Situação", "A rota existe, mas não há recurso com o id informado. Qual status é esperado?", "", [
        "400 Bad Request.", "401 Unauthorized.", "403 Forbidden.", "404 Not Found."
      ], 3, "404 Not Found indica que o recurso solicitado não foi encontrado.", "aula04"),

      q("api-017", "aspnet", "Controllers", "Conceito", "Qual é a função principal de um controller?", "", [
        "Receber requisições HTTP e produzir respostas.",
        "Manter as regras de negócio da aplicação.",
        "Representar as tabelas disponíveis no contexto.",
        "Registrar alterações na estrutura do banco."
      ], 0, "O controller trata o fluxo HTTP e chama os serviços necessários. As regras de negócio ficam no service.", "aula03"),

      q("api-018", "aspnet", "Program.cs", "Código", "Qual chamada registra o suporte a controllers no contêiner de serviços?", "builder.Services.AddControllers();", [
        "builder.Services.AddControllers().",
        "app.MapControllers().",
        "var app = builder.Build().",
        "app.Run()."
      ], 0, "AddControllers registra os serviços usados pelos controllers.", "aula03"),

      q("api-019", "aspnet", "Program.cs", "Código", "Qual chamada mapeia os endpoints definidos nos controllers?", "app.MapControllers();", [
        "builder.Services.AddControllers().",
        "app.MapControllers().",
        "var app = builder.Build().",
        "app.Run()."
      ], 1, "MapControllers adiciona ao pipeline as rotas definidas pelos atributos dos controllers.", "aula03"),

      q("api-020", "aspnet", "Rotas", "Código", "Qual é a rota base deste controller?", "[Route(\"api/[controller]\")]\npublic class LivrosController : ControllerBase", [
        "/livros.",
        "/api/controller.",
        "/api/livros.",
        "/api/livros/{id}."
      ], 2, "[controller] usa o nome da classe sem o sufixo Controller. A rota base é /api/livros.", "aula03"),

      q("api-021", "aspnet", "IActionResult", "Conceito", "Por que uma ação pode retornar IActionResult?", "", [
        "Para aceitar somente objetos de uma entidade.",
        "Para executar apenas métodos assíncronos.",
        "Para acessar diretamente qualquer DbSet.",
        "Para devolver diferentes respostas HTTP, como Ok e NotFound."
      ], 3, "IActionResult permite devolver respostas HTTP diferentes conforme o resultado da operação.", "aula03"),

      q("api-022", "aspnet", "Swagger", "Conceito", "Para que o Swagger é usado durante o desenvolvimento da API?", "", [
        "Para visualizar a documentação e testar endpoints.",
        "Para gerar e aplicar migrations no banco.",
        "Para registrar services na injeção de dependência.",
        "Para validar a assinatura de tokens JWT."
      ], 0, "Swagger apresenta os endpoints da API e permite testá-los durante o desenvolvimento.", "aula03"),

      q("api-023", "efcore", "Entity Framework Core", "Conceito", "Qual é a função de um ORM como o Entity Framework Core?", "", [
        "Definir os métodos e códigos de status da API.",
        "Mapear objetos da aplicação para estruturas do banco.",
        "Documentar e testar os endpoints no navegador.",
        "Gerar tokens para usuários autenticados."
      ], 1, "O ORM faz o mapeamento entre objetos da aplicação e dados relacionais.", "aula05"),

      q("api-024", "efcore", "DbContext", "Conceito", "Qual é a função do AppDbContext?", "", [
        "Definir o formato dos dados enviados pela API.",
        "Receber as requisições de cada endpoint.",
        "Coordenar o acesso às entidades e as alterações no banco.",
        "Validar as permissões dos usuários autenticados."
      ], 2, "O DbContext coordena consultas, rastreamento de entidades e persistência.", "aula05"),

      q("api-025", "efcore", "DbSet", "Conceito", "O que representa DbSet<Livro> no contexto?", "", [
        "Uma migration responsável por criar a tabela Livros.",
        "Um DTO usado para devolver livros ao cliente.",
        "Uma rota que aceita operações sobre livros.",
        "O conjunto de entidades Livro consultado e alterado pelo EF Core."
      ], 3, "DbSet<Livro> representa o conjunto de entidades Livro disponível no contexto.", "aula05"),

      q("api-026", "efcore", "Migrations", "Ferramenta", "No Console do Gerenciador de Pacotes, qual comando cria uma migration?", "", [
        "Add-Migration NomeDaMigration.",
        "Update-Database.",
        "Remove-Migration.",
        "Script-Migration."
      ], 0, "Add-Migration cria uma migration. O nome vem depois do comando.", "aula05"),

      q("api-027", "efcore", "Migrations", "Ferramenta", "No Console do Gerenciador de Pacotes, qual comando aplica as migrations pendentes ao banco?", "", [
        "Add-Migration.",
        "Update-Database.",
        "Remove-Migration.",
        "Script-Migration."
      ], 1, "Update-Database aplica ao banco as migrations que ainda estão pendentes.", "aula05"),

      q("api-028", "efcore", "Persistência", "Código", "Depois de adicionar ou alterar uma entidade, qual método grava as mudanças no banco?", "await _context.SaveChangesAsync();", [
        "ToListAsync().",
        "SaveChangesAsync().",
        "FindAsync().",
        "AnyAsync()."
      ], 1, "SaveChangesAsync persiste as alterações que o contexto está rastreando.", "aula05"),

      q("api-029", "arquitetura", "DTOs", "Conceito", "Para que serve um DTO?", "", [
        "Para definir quais dados entram ou saem da API.",
        "Para concentrar as regras de negócio.",
        "Para mapear os endpoints dos controllers.",
        "Para aplicar migrations no banco."
      ], 0, "O DTO define os dados transferidos e evita expor diretamente toda a entidade.", "aula06"),

      q("api-030", "arquitetura", "Services", "Conceito", "Qual é a principal responsabilidade de um service?", "", [
        "Definir a rota e o método HTTP do endpoint.",
        "Aplicar as regras de negócio da aplicação.",
        "Representar a tabela no DbContext.",
        "Gerar a documentação do Swagger."
      ], 1, "O service concentra regras de negócio, como impedir cadastros duplicados.", "aula06"),

      q("api-031", "arquitetura", "Injeção de dependência", "Código", "O que este registro permite?", "builder.Services.AddScoped<ILivroService, LivroService>();", [
        "Mapear Livro como uma tabela do banco.",
        "Criar uma rota para o LivroService.",
        "Injetar ILivroService usando LivroService como implementação.",
        "Validar automaticamente o LivroService."
      ], 2, "AddScoped associa a interface à implementação para que o serviço possa ser injetado.", "aula06"),

      q("api-032", "arquitetura", "Validação", "Direta", "Qual Data Annotation torna um campo obrigatório?", "", [
        "[Range].", "[StringLength].", "[Key].", "[Required]."
      ], 3, "[Required] exige que o campo receba um valor válido.", "aula08"),

      q("api-033", "arquitetura", "Validação", "Situação", "Com [ApiController], o que ocorre quando o DTO viola uma Data Annotation?", "", [
        "A API pode retornar 400 Bad Request antes de executar a ação.",
        "A API substitui o valor inválido pelo valor padrão da entidade.",
        "O service é executado e deve corrigir o DTO automaticamente.",
        "O EF Core salva somente os campos que passaram na validação."
      ], 0, "[ApiController] integra a validação do modelo e pode gerar 400 automaticamente.", "aula08"),

      q("api-034", "arquitetura", "Relacionamentos", "Código", "Qual relacionamento este trecho configura?", "modelBuilder.Entity<Livro>()\n  .HasOne(l => l.Autor)\n  .WithMany(a => a.Livros)\n  .HasForeignKey(l => l.AutorId);", [
        "Um livro para um autor, sem coleção no Autor.",
        "Muitos livros para um autor, usando AutorId como chave estrangeira.",
        "Muitos livros para muitos autores, com tabela intermediária.",
        "Muitos autores para um livro, usando LivroId como chave estrangeira."
      ], 1, "Cada Livro possui um Autor e um Autor pode possuir vários Livros. AutorId é a chave estrangeira.", "aula09"),

      q("api-035", "seguranca", "JWT", "Direta", "O que significa JWT?", "", [
        "Java Web Transfer.",
        "JavaScript Web Type.",
        "JSON Web Token.",
        "JSON Web Transfer."
      ], 2, "JWT significa JSON Web Token.", "aula10"),

      q("api-036", "seguranca", "Autenticação", "Conceito", "O que é autenticação?", "", [
        "Definir quais perfis podem executar uma operação.",
        "Registrar o token no header da requisição.",
        "Escolher quais claims serão gravadas no token.",
        "Verificar a identidade do usuário."
      ], 3, "Autenticação verifica quem é o usuário.", "aula10"),

      q("api-037", "seguranca", "Autorização", "Conceito", "O que é autorização?", "", [
        "Verificar se o usuário pode acessar uma funcionalidade.",
        "Confirmar o email e a senha informados no login.",
        "Gerar a assinatura do token após o login.",
        "Ler o token enviado no header Authorization."
      ], 0, "Autorização define o que um usuário autenticado tem permissão para fazer.", "aula10"),

      q("api-038", "seguranca", "JWT", "Direta", "Quais são as três partes de um JWT?", "", [
        "Issuer, audience e expiration.",
        "Header, payload e signature.",
        "Email, senha e perfil.",
        "Método, rota e status."
      ], 1, "Um JWT possui header, payload e signature.", "aula10"),

      q("api-039", "seguranca", "Bearer token", "Direta", "Como o cliente normalmente envia o JWT para a API?", "", [
        "No header Content-Type, usando o esquema JSON.",
        "Na query string, usando o parâmetro token.",
        "No header Authorization, usando o esquema Bearer.",
        "No corpo da requisição, usando o campo Authorization."
      ], 2, "O cliente envia o token no header Authorization com o esquema Bearer.", "aula10"),

      q("api-040", "seguranca", "Endpoints protegidos", "Direta", "Qual atributo protege um endpoint para usuários autenticados?", "", [
        "[AllowAnonymous].", "[ApiController].", "[FromBody].", "[Authorize]."
      ], 3, "[Authorize] exige uma identidade autenticada. Ele também pode restringir perfis.", "aula10")
    ],
    extras: [
      q("proj-001", "projetos", "OrganizaAtividades", "Situação", "Qual URL filtra atividades de prioridade Alta e situação Pendente?", "", [
        "/api/atividades?prioridade=Alta&situacao=Pendente.",
        "/api/atividades/Alta/Pendente.",
        "/api/atividades?titulo=Alta&prioridade=Pendente.",
        "/api/atividades/Alta?situacao=Pendente."
      ], 0, "Os filtros opcionais são enviados na query string com os nomes prioridade e situacao.", "organiza"),

      q("proj-002", "projetos", "OrganizaAtividades", "Autorização", "No projeto, quais permissões foram aplicadas aos endpoints de escrita?", "", [
        "POST exige Administrador, PUT é público e DELETE exige login.",
        "POST e PUT exigem login; DELETE exige o perfil Administrador.",
        "POST é público; PUT e DELETE exigem o perfil Administrador.",
        "POST, PUT e DELETE são públicos."
      ], 1, "POST e PUT usam [Authorize]. DELETE restringe o acesso ao perfil Administrador.", "organiza"),

      q("proj-003", "projetos", "OrganizaAtividades", "Regra de negócio", "Uma atividade foi enviada com DisciplinaId inexistente. Qual resposta o projeto produz?", "", [
        "201 Created, criando também uma disciplina.",
        "404 Not Found, porque a rota de atividades não existe.",
        "400 Bad Request com a mensagem da regra de negócio.",
        "204 No Content, sem cadastrar a atividade."
      ], 2, "O service verifica a disciplina. O controller transforma a exceção da regra em 400 Bad Request.", "organiza"),

      q("proj-004", "projetos", "OrganizaAtividades", "Regra de negócio", "Quando o projeto considera uma atividade duplicada?", "", [
        "Quando título e categoria são iguais.",
        "Quando disciplina e categoria são iguais.",
        "Quando título e data de entrega são iguais.",
        "Quando título e disciplina são iguais."
      ], 3, "A regra impede duas atividades com o mesmo título dentro da mesma disciplina.", "organiza"),

      q("proj-005", "projetos", "Acervo", "Código", "O que este filtro seleciona?", "query = query.Where(l => l.Categorias.Any(c => c.Id == categoriaId));", [
        "Livros associados à categoria informada.",
        "Categorias associadas ao livro informado.",
        "Livros cujo autor possui o id informado.",
        "Categorias que não possuem livros."
      ], 0, "Any verifica se o livro possui ao menos uma categoria com o id informado.", "acervo"),

      q("proj-006", "projetos", "OrganizaAtividades", "Fluxo JWT", "Qual sequência permite criar uma disciplina em um endpoint protegido?", "", [
        "Enviar o POST da disciplina e depois usar a resposta como token no login.",
        "Fazer login, copiar o JWT, enviar Authorization: Bearer no POST e aguardar 201 quando os dados forem válidos.",
        "Fazer login e enviar o JWT no corpo do GET de disciplinas antes do POST.",
        "Enviar o POST sem token e repetir a mesma requisição após receber 401."
      ], 1, "O login gera o JWT. O cliente envia esse token como Bearer ao chamar o POST protegido.", "organiza")
    ]
  };
})();
