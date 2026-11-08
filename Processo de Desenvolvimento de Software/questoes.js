// Questões autorais selecionadas dos materiais locais. correta é o índice da resposta no banco.
// A interface embaralha perguntas e alternativas a cada tentativa.
window.PDS_SIMULADO = {
  "titulo": "Processo de Desenvolvimento de Software",
  "versao": 2,
  "questoesPorTentativa": 25,
  "distribuicao": {
    "processos": 4,
    "modelos": 3,
    "ageis": 2,
    "scrum": 5,
    "historias": 2,
    "devops": 4,
    "uml": 5
  },
  "fontes": {
    "processos": "PDS 02 (Processo Software): qualidade, fases, manutenção e estrutura de processos. A questão indica os slides utilizados.",
    "modelos": "PDS 03 (Modelos Clássicos Processo Software): Cascata, prototipação, incremental, Espiral, RAD e 4GL.",
    "ageis": "PDS 05 (Metodologias Ágeis): valores e princípios do desenvolvimento ágil.",
    "scrum": "PDS 06 (SCRUM): responsabilidades, backlogs, incrementos, eventos e quadro Kanban.",
    "historias": "PDS 07 (História de Usuário): necessidade, papel, funcionalidade e benefício.",
    "devops": "PDS 08 (DevOps) e PDS 08 (DevOps Atividade): colaboração, CI/CD, automação e monitoramento.",
    "uml": "PDS 08 (Engenharia de Software OO - UML), PDS 09 (Digrama de Atividades), incluindo mapeamento e SIPOC, e PDS 10 (Digramas de Interação). Esquemas do simulado são autorais, baseados nos slides."
  },
  "questoes": [
    {
      "id": "pds-001",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Direta",
      "enunciado": "O que um processo de software organiza?",
      "codigo": "",
      "alternativas": [
        "Quem faz o quê, quando e como no desenvolvimento e na manutenção.",
        "Quais classes e atributos formam a estrutura interna do programa.",
        "Quais telas e cores compõem a interface entregue ao usuário.",
        "Quais comandos e tipos pertencem à linguagem de programação."
      ],
      "correta": 0,
      "explicacao": "O processo organiza atividades, responsabilidades e formas de trabalho. Classes, telas e sintaxe são outros aspectos do desenvolvimento.",
      "base": "processos",
      "referencia": "PDS 02, slides 21–23."
    },
    {
      "id": "pds-002",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Direta",
      "enunciado": "Segundo a aula, qual é uma base para avaliar a qualidade de software?",
      "codigo": "",
      "alternativas": [
        "A quantidade de funcionalidades, independentemente dos requisitos.",
        "A conformidade com os requisitos e os padrões definidos.",
        "A velocidade de codificação, independentemente dos defeitos.",
        "A quantidade de documentação, independentemente do produto."
      ],
      "correta": 1,
      "explicacao": "A aula relaciona qualidade ao atendimento dos requisitos e dos padrões, incluindo características esperadas de um produto profissional.",
      "base": "processos",
      "referencia": "PDS 02, slides 11–13."
    },
    {
      "id": "pds-003",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Direta",
      "enunciado": "Qual sequência reúne atividades fundamentais de um processo de software apresentadas na aula?",
      "codigo": "",
      "alternativas": [
        "Especificação, projeto, validação e evolução.",
        "Contratação, divulgação, venda e suporte comercial.",
        "Codificação, compilação, instalação e venda.",
        "Documentação, auditoria, treinamento e aquisição."
      ],
      "correta": 0,
      "explicacao": "O slide apresenta especificação para definir as necessidades, projeto como construção conforme a especificação, validação para conferir o atendimento ao usuário e evolução para acompanhar mudanças. Programar é apenas parte do processo.",
      "base": "processos",
      "referencia": "PDS 02, slide 28."
    },
    {
      "id": "pds-004",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Situação",
      "enunciado": "Após a entrega, a equipe corrige um erro que calculava o total de uma venda incorretamente. Qual manutenção foi realizada?",
      "codigo": "",
      "alternativas": [
        "Adaptativa.",
        "Perfectiva.",
        "Preventiva.",
        "Corretiva."
      ],
      "correta": 3,
      "explicacao": "É manutenção corretiva, pois corrige um defeito. Na classificação da aula, adaptativa adequa o sistema a mudanças externas, perfectiva acrescenta funções e preventiva melhora sua manutenibilidade futura.",
      "base": "processos",
      "referencia": "PDS 02, slide 16."
    },
    {
      "id": "pds-007",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Direta",
      "enunciado": "Na classificação da ISO/IEC 12207 apresentada na aula, documentação e gerência de configuração pertencem a qual grupo?",
      "codigo": "",
      "alternativas": [
        "Processos de apoio.",
        "Processos fundamentais.",
        "Processos organizacionais.",
        "Processos de adaptação."
      ],
      "correta": 0,
      "explicacao": "Na classificação histórica usada nos slides, os processos de apoio auxiliam outros processos. Aquisição e desenvolvimento são fundamentais; gerência e treinamento aparecem como organizacionais. A pergunta se refere à classificação da aula, não a todas as edições da norma.",
      "base": "processos",
      "referencia": "PDS 02, slides 42–46."
    },
    {
      "id": "pds-008",
      "grupo": "processos",
      "tema": "Processos e qualidade",
      "tipo": "Direta",
      "enunciado": "Na engenharia de software, como métodos e ferramentas se diferenciam?",
      "codigo": "",
      "alternativas": [
        "Métodos orientam como fazer; ferramentas dão suporte automatizado ao trabalho.",
        "Métodos são os programas de apoio; ferramentas são as técnicas de análise.",
        "Métodos definem apenas o orçamento; ferramentas definem todos os requisitos.",
        "Métodos são os arquivos do produto; ferramentas são somente os documentos."
      ],
      "correta": 0,
      "explicacao": "O material apresenta os métodos como orientação de como construir o software e as ferramentas como apoio automatizado ou semiautomatizado. Procedimentos fazem a ligação, organizando sequência, produtos e controles.",
      "base": "processos",
      "referencia": "PDS 03, slides 4–6."
    },
    {
      "id": "pds-009",
      "grupo": "modelos",
      "tema": "Modelos de processo",
      "tipo": "Direta",
      "enunciado": "Qual característica identifica o modelo Cascata?",
      "codigo": "",
      "alternativas": [
        "Fases organizadas de forma sequencial, com saídas alimentando as seguintes.",
        "Ciclos organizados principalmente pela análise de riscos.",
        "Entregas organizadas exclusivamente por um quadro Kanban.",
        "Descoberta de requisitos feita apenas por protótipos de interface."
      ],
      "correta": 0,
      "explicacao": "O Cascata é apresentado como sequencial linear. O resultado de uma fase é usado na próxima.",
      "base": "modelos",
      "referencia": "PDS 03, slides 20–21."
    },
    {
      "id": "pds-011",
      "grupo": "modelos",
      "tema": "Modelos de processo",
      "tipo": "Direta",
      "enunciado": "Qual é o objetivo principal da prototipação apresentada na aula?",
      "codigo": "",
      "alternativas": [
        "Formalizar o contrato de manutenção do software já entregue.",
        "Substituir a análise de requisitos pela versão final de produção.",
        "Ajudar a entender e refinar os requisitos com o usuário.",
        "Garantir o desempenho definitivo antes de conversar com o cliente."
      ],
      "correta": 2,
      "explicacao": "O protótipo torna ideias visíveis para avaliação e esclarecimento das necessidades. Na abordagem de protótipo descartável dos slides, ele não deve ser confundido com o produto final.",
      "base": "modelos",
      "referencia": "PDS 03, slides 31–39."
    },
    {
      "id": "pds-013",
      "grupo": "modelos",
      "tema": "Modelos de processo",
      "tipo": "Direta",
      "enunciado": "No modelo incremental, como o produto evolui?",
      "codigo": "",
      "alternativas": [
        "Por versões que acrescentam funcionalidades ao que já foi entregue.",
        "Por uma única entrega executável após todas as fases do projeto.",
        "Por substituição obrigatória da linguagem em cada versão.",
        "Por protótipos que nunca compõem partes utilizáveis do produto."
      ],
      "correta": 0,
      "explicacao": "O modelo incremental costuma começar com um núcleo e adicionar características em novas versões.",
      "base": "modelos",
      "referencia": "PDS 03, slides 57–59."
    },
    {
      "id": "pds-014",
      "grupo": "modelos",
      "tema": "Modelos de processo",
      "tipo": "Direta",
      "enunciado": "Qual elemento recebe destaque no modelo Espiral?",
      "codigo": "",
      "alternativas": [
        "A definição de todas as telas antes da análise de requisitos.",
        "A análise de riscos ao longo das iterações.",
        "A eliminação da avaliação do cliente durante o desenvolvimento.",
        "A realização dos testes somente após a última entrega."
      ],
      "correta": 1,
      "explicacao": "O Espiral combina evolução iterativa com planejamento, avaliação e análise explícita de riscos.",
      "base": "modelos",
      "referencia": "PDS 03, slides 61–66."
    },
    {
      "id": "pds-015",
      "grupo": "modelos",
      "tema": "Modelos de processo",
      "tipo": "Direta",
      "enunciado": "Qual é uma característica do RAD apresentada nos slides?",
      "codigo": "",
      "alternativas": [
        "Um fluxo único sem divisão do sistema em módulos.",
        "A análise de riscos como estrutura central de cada volta.",
        "Ciclos curtos apoiados em componentes e modularização.",
        "A geração de requisitos somente após a implantação."
      ],
      "correta": 2,
      "explicacao": "RAD busca desenvolvimento rápido com componentes e módulos integráveis. A aula ressalta a necessidade de requisitos entendidos e escopo adequado.",
      "base": "modelos",
      "referencia": "PDS 03, slides 41–44 e 52."
    },
    {
      "id": "pds-017",
      "grupo": "ageis",
      "tema": "Métodos ágeis",
      "tipo": "Direta",
      "enunciado": "Qual preferência faz parte dos valores ágeis apresentados?",
      "codigo": "",
      "alternativas": [
        "Indivíduos e interações mais que processos e ferramentas.",
        "Negociação de contratos mais que colaboração com o cliente.",
        "Documentação abrangente mais que software funcionando.",
        "Seguir um plano mais que responder a mudanças."
      ],
      "correta": 0,
      "explicacao": "O material apresenta quatro preferências, incluindo indivíduos e interações. Valorizar mais um lado não significa proibir processos ou ferramentas.",
      "base": "ageis",
      "referencia": "PDS 05, slide 8."
    },
    {
      "id": "pds-018",
      "grupo": "ageis",
      "tema": "Métodos ágeis",
      "tipo": "Direta",
      "enunciado": "Como a aula orienta tratar a documentação em métodos ágeis?",
      "codigo": "",
      "alternativas": [
        "Evitar qualquer documento, inclusive quando necessário.",
        "Produzir a documentação útil ao trabalho e ao produto.",
        "Documentar tudo antes de iniciar qualquer conversa.",
        "Usar a quantidade de páginas como principal medida de progresso."
      ],
      "correta": 1,
      "explicacao": "Os slides indicam documentar o que for útil. Agilidade não exige ausência de documentação.",
      "base": "ageis",
      "referencia": "PDS 05, slides 5 e 8."
    },
    {
      "id": "pds-020",
      "grupo": "ageis",
      "tema": "Métodos ágeis",
      "tipo": "Situação",
      "enunciado": "Durante o desenvolvimento, o cliente identifica uma mudança importante para o negócio. Qual postura combina com os princípios ágeis?",
      "codigo": "",
      "alternativas": [
        "Recusar a mudança porque ela não estava no primeiro plano.",
        "Incluir tudo imediatamente, sem avaliar prioridades ou impacto.",
        "Adiar qualquer conversa com o cliente até encerrar o projeto.",
        "Avaliar a mudança e adaptar o trabalho para gerar valor."
      ],
      "correta": 3,
      "explicacao": "A resposta a mudanças e a colaboração são valorizadas. Isso exige avaliar e organizar o trabalho, sem aceitar qualquer alteração de forma descontrolada.",
      "base": "ageis",
      "referencia": "PDS 05, slides 8–10."
    },
    {
      "id": "pds-023",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Direta",
      "enunciado": "Quais três pilares são apresentados no material de Scrum?",
      "codigo": "",
      "alternativas": [
        "Planejamento, codificação e manutenção.",
        "Escopo, orçamento e documentação.",
        "Transparência, inspeção e adaptação.",
        "Integração, entrega e implantação."
      ],
      "correta": 2,
      "explicacao": "Esses pilares permitem tornar o trabalho visível, inspecionar resultados e ajustar a atuação.",
      "base": "scrum",
      "referencia": "PDS 06, slide 6."
    },
    {
      "id": "pds-024",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Direta",
      "enunciado": "Quais responsabilidades correspondem a Product Owner e Scrum Master, respectivamente?",
      "codigo": "",
      "alternativas": [
        "Priorizar o trabalho do produto e orientar o uso do Scrum.",
        "Orientar o uso do Scrum e priorizar o trabalho do produto.",
        "Definir todas as soluções técnicas e aprovar sozinho cada entrega.",
        "Programar todos os itens e testar sozinho o incremento."
      ],
      "correta": 0,
      "explicacao": "O Product Owner atua nas necessidades e prioridades do produto. O Scrum Master orienta e apoia o time na aplicação do Scrum; não é um chefe que decide sozinho as soluções técnicas.",
      "base": "scrum",
      "referencia": "PDS 06, slides 7–8."
    },
    {
      "id": "pds-026",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Direta",
      "enunciado": "Qual é a diferença entre Product Backlog e Sprint Backlog?",
      "codigo": "",
      "alternativas": [
        "O primeiro registra somente erros; o segundo registra todos os produtos da empresa.",
        "O primeiro reúne o trabalho do produto; o segundo concentra o trabalho do Sprint.",
        "O primeiro contém só itens concluídos; o segundo é o histórico de entregas passadas.",
        "O primeiro é exclusivo do Scrum Master; o segundo reúne pedidos de todos os projetos."
      ],
      "correta": 1,
      "explicacao": "O Sprint Backlog deriva do planejamento do ciclo e é mais específico que a lista de trabalho do produto.",
      "base": "scrum",
      "referencia": "PDS 06, slide 8."
    },
    {
      "id": "pds-027",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Direta",
      "enunciado": "No Scrum, o que são Sprint e incremento, respectivamente?",
      "codigo": "",
      "alternativas": [
        "Um ciclo de trabalho e uma parte concluída que se soma ao produto.",
        "Uma reunião diária e a lista geral de requisitos do produto.",
        "Um gráfico de andamento e uma tarefa ainda não iniciada.",
        "Uma lista de requisitos e uma reunião para melhorar o processo."
      ],
      "correta": 0,
      "explicacao": "O produto evolui em ciclos chamados Sprints. O incremento é resultado concluído e utilizável, e não apenas uma tarefa planejada. O Sprint Planning planeja o trabalho do ciclo.",
      "base": "scrum",
      "referencia": "PDS 06, slides 9–12."
    },
    {
      "id": "pds-028",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Interpretação de diagrama",
      "enunciado": "No Burndown abaixo, o trabalho restante ficou igual entre os dias 2 e 3. O que esse trecho indica?",
      "codigo": "",
      "alternativas": [
        "Não houve redução registrada no trabalho restante nesse intervalo.",
        "Nenhuma pessoa trabalhou durante todo o intervalo.",
        "Todo o trabalho previsto foi concluído no dia 2.",
        "O eixo vertical representa o total de pessoas no time."
      ],
      "correta": 0,
      "explicacao": "A linha horizontal mostra o mesmo trabalho restante nos dois pontos. Isso não prova ausência de esforço: pode haver trabalho em andamento ou outros fatores que não reduziram a medida registrada. O Burndown relaciona trabalho restante e tempo.",
      "base": "scrum",
      "referencia": "PDS 06, slide 16.",
      "imagem": "imagens/burndown.svg",
      "descricaoImagem": "Gráfico: dias 1 a 5 no eixo horizontal; trabalho restante em pontos no vertical. Valores: 40, 30, 30, 10 e 0.",
      "legendaImagem": "Esquema autoral baseado na notação apresentada nas aulas."
    },
    {
      "id": "pds-029",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Situação",
      "enunciado": "O time faz uma reunião diária curta para alinhar o progresso rumo à meta e identificar obstáculos. Qual evento é esse?",
      "codigo": "",
      "alternativas": [
        "Daily Scrum.",
        "Sprint Planning.",
        "Sprint Review.",
        "Sprint Retrospective."
      ],
      "correta": 0,
      "explicacao": "A Daily é o alinhamento diário descrito nos slides, com duração em torno de 15 minutos e atenção ao andamento e aos impedimentos.",
      "base": "scrum",
      "referencia": "PDS 06, slide 13."
    },
    {
      "id": "pds-030",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Situação",
      "enunciado": "Ao terminar o Sprint, o time demonstra o incremento aos interessados e recebe feedback sobre o produto. Qual evento está ocorrendo?",
      "codigo": "",
      "alternativas": [
        "Sprint Retrospective.",
        "Sprint Review.",
        "Daily Scrum.",
        "Sprint Planning."
      ],
      "correta": 1,
      "explicacao": "A Review inspeciona o incremento com os interessados. A Retrospective se concentra em melhorar a forma de trabalho da equipe.",
      "base": "scrum",
      "referencia": "PDS 06, slides 14–15."
    },
    {
      "id": "pds-031",
      "grupo": "scrum",
      "tema": "Scrum e Kanban",
      "tipo": "Situação",
      "enunciado": "Após uma entrega, o time discute como melhorar sua comunicação e sua forma de trabalhar no próximo ciclo. Qual evento atende a esse objetivo?",
      "codigo": "",
      "alternativas": [
        "Sprint Review.",
        "Daily Scrum.",
        "Sprint Retrospective.",
        "Sprint Planning."
      ],
      "correta": 2,
      "explicacao": "A Retrospective permite refletir sobre a forma de trabalhar. A Review se concentra no incremento e no feedback sobre o produto.",
      "base": "scrum",
      "referencia": "PDS 06, slides 14–15."
    },
    {
      "id": "pds-033",
      "grupo": "historias",
      "tema": "Histórias de usuário",
      "tipo": "Direta",
      "enunciado": "O que uma história de usuário descreve principalmente?",
      "codigo": "",
      "alternativas": [
        "Uma necessidade sob a perspectiva do usuário ou do negócio.",
        "A estrutura completa das classes e suas dependências.",
        "A sequência de comandos para instalar a aplicação.",
        "O histórico de alterações feitas em cada arquivo do projeto."
      ],
      "correta": 0,
      "explicacao": "A história é uma técnica de requisitos: registra uma necessidade de forma concisa, a partir da perspectiva de quem obtém valor.",
      "base": "historias",
      "referencia": "PDS 07, slide 3."
    },
    {
      "id": "pds-035",
      "grupo": "historias",
      "tema": "Histórias de usuário",
      "tipo": "Direta",
      "enunciado": "Qual estrutura corresponde aos exemplos de história de usuário da aula?",
      "codigo": "",
      "alternativas": [
        "Dado [contexto], quando [evento], então [resultado], obrigatoriamente.",
        "Classe [nome], atributo [tipo], método [retorno].",
        "Como [papel], quero [funcionalidade], para [benefício].",
        "Tarefa [nome], responsável [pessoa], prazo [data], obrigatoriamente."
      ],
      "correta": 2,
      "explicacao": "Os exemplos usam papel, ação desejada e finalidade. Critérios de aceitação ou cartões de tarefas podem complementar o trabalho, mas não substituem essa estrutura de história.",
      "base": "historias",
      "referencia": "PDS 07, slides 6–7."
    },
    {
      "id": "pds-036",
      "grupo": "historias",
      "tema": "Histórias de usuário",
      "tipo": "Situação",
      "enunciado": "Na história 'Como cliente, quero receber uma notificação a cada transação, para acompanhar movimentações suspeitas', qual é o benefício?",
      "codigo": "",
      "alternativas": [
        "Receber uma notificação a cada transação.",
        "Ser cliente do aplicativo.",
        "Implementar a tela de notificações.",
        "Acompanhar movimentações suspeitas."
      ],
      "correta": 3,
      "explicacao": "O trecho após 'para' expressa o benefício. Receber notificações é a funcionalidade solicitada e cliente é o papel.",
      "base": "historias",
      "referencia": "PDS 07, slide 7."
    },
    {
      "id": "pds-039",
      "grupo": "devops",
      "tema": "DevOps e CI/CD",
      "tipo": "Direta",
      "enunciado": "Qual é a ideia central de DevOps nos materiais?",
      "codigo": "",
      "alternativas": [
        "Separar desenvolvimento e operação para reduzir a comunicação entre áreas.",
        "Substituir os testes por acompanhamento manual após cada implantação.",
        "Aproximar desenvolvimento e operação com colaboração, automação e monitoramento.",
        "Concentrar a definição de requisitos na equipe de infraestrutura."
      ],
      "correta": 2,
      "explicacao": "DevOps é apresentado como cultura e conjunto de práticas que aproximam Dev e Ops para melhorar a entrega e a operação.",
      "base": "devops",
      "referencia": "PDS 08 (DevOps), slides 9–21."
    },
    {
      "id": "pds-040",
      "grupo": "devops",
      "tema": "DevOps e CI/CD",
      "tipo": "Direta",
      "enunciado": "O que caracteriza a integração contínua (CI)?",
      "codigo": "",
      "alternativas": [
        "Implantar toda mudança em produção sem passar por validação.",
        "Concentrar a integração do código na última semana do projeto.",
        "Monitorar apenas o consumo de recursos da aplicação em produção.",
        "Integrar mudanças frequentemente e validá-las com builds e testes automatizados."
      ],
      "correta": 3,
      "explicacao": "CI valida alterações integradas à base compartilhada. Isso ajuda a descobrir problemas cedo e não exige publicar automaticamente em produção.",
      "base": "devops",
      "referencia": "PDS 08 (DevOps), slides 41–44."
    },
    {
      "id": "pds-041",
      "grupo": "devops",
      "tema": "DevOps e CI/CD",
      "tipo": "Direta",
      "enunciado": "Qual diferença os slides apresentam entre entrega contínua e implantação contínua?",
      "codigo": "",
      "alternativas": [
        "A entrega mantém a versão pronta para produção; a implantação automatiza sua liberação em produção.",
        "A entrega não usa testes; a implantação usa somente testes manuais.",
        "A entrega ocorre sem código versionado; a implantação exige que não haja integração.",
        "A entrega modifica requisitos; a implantação define as histórias de usuário."
      ],
      "correta": 0,
      "explicacao": "Continuous Delivery prepara versões implantáveis e pode manter aprovação manual. Continuous Deployment automatiza também o passo de disponibilizar a versão aos usuários.",
      "base": "devops",
      "referencia": "PDS 08 (DevOps), slides 24–25 e 45–48."
    },
    {
      "id": "pds-042",
      "grupo": "devops",
      "tema": "DevOps e CI/CD",
      "tipo": "Direta",
      "enunciado": "Qual é a finalidade dos testes contínuos no pipeline DevOps?",
      "codigo": "",
      "alternativas": [
        "Executar testes ao longo do processo para identificar problemas antes da produção.",
        "Executar testes somente depois que os usuários relatarem falhas.",
        "Substituir testes por gráficos de consumo de memória em produção.",
        "Publicar toda mudança mesmo quando os testes apontarem defeitos."
      ],
      "correta": 0,
      "explicacao": "Os slides apresentam testes contínuos como execução frequente de testes automatizados ao longo do desenvolvimento. A automação ajuda a detectar falhas antes da liberação, sem garantir ausência absoluta de defeitos.",
      "base": "devops",
      "referencia": "PDS 08 (DevOps), slide 26; PDS 08 (DevOps Atividade), slide 4."
    },
    {
      "id": "pds-044",
      "grupo": "devops",
      "tema": "DevOps e CI/CD",
      "tipo": "Direta",
      "enunciado": "Para que serve o monitoramento em DevOps?",
      "codigo": "",
      "alternativas": [
        "Substituir a execução de testes antes de uma nova versão.",
        "Impedir que o produto receba mudanças após a primeira implantação.",
        "Definir sozinho a prioridade de todas as histórias de usuário.",
        "Detectar problemas e fornecer métricas para melhorar a operação e as entregas."
      ],
      "correta": 3,
      "explicacao": "Métricas e observações da operação ajudam a identificar falhas e gargalos, alimentando melhorias contínuas.",
      "base": "devops",
      "referencia": "PDS 08 (DevOps), slides 21, 28–29 e 38."
    },
    {
      "id": "pds-045",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Direta",
      "enunciado": "O que é UML segundo a apresentação?",
      "codigo": "",
      "alternativas": [
        "Uma linguagem de modelagem para especificar, visualizar e documentar sistemas.",
        "Um modelo sequencial de desenvolvimento com fases obrigatórias.",
        "Uma linguagem de programação que executa diagramas diretamente.",
        "Um método ágil que define os eventos de cada Sprint."
      ],
      "correta": 0,
      "explicacao": "UML é uma linguagem de modelagem. Os slides reforçam que ela não é um processo ou uma metodologia de desenvolvimento.",
      "base": "uml",
      "referencia": "PDS 08 (Engenharia de Software OO - UML), slides 3–5."
    },
    {
      "id": "pds-046",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Direta",
      "enunciado": "Qual alternativa associa corretamente um diagrama estrutural e um comportamental?",
      "codigo": "",
      "alternativas": [
        "Atividades e classes, respectivamente.",
        "Classes e atividades, respectivamente.",
        "Sequência e componentes, respectivamente.",
        "Casos de uso e implantação, respectivamente."
      ],
      "correta": 1,
      "explicacao": "Classes e componentes são estruturais; atividades, casos de uso e diagramas de interação são comportamentais.",
      "base": "uml",
      "referencia": "PDS 08 (Engenharia de Software OO - UML), slides 9–10."
    },
    {
      "id": "pds-047",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Direta",
      "enunciado": "Qual é a principal diferença de ênfase entre diagramas de sequência e de comunicação?",
      "codigo": "",
      "alternativas": [
        "Sequência destaca a estrutura das tabelas; comunicação destaca os estados de uma entidade.",
        "Sequência destaca só os requisitos; comunicação destaca só o hardware da implantação.",
        "Sequência destaca a ordem temporal das mensagens; comunicação destaca a organização dos objetos que interagem.",
        "Sequência destaca atividades paralelas; comunicação destaca exclusivamente as classes e seus atributos."
      ],
      "correta": 2,
      "explicacao": "Ambos são diagramas de interação. O de sequência privilegia a ordem das mensagens; o de comunicação evidencia como os objetos estão ligados.",
      "base": "uml",
      "referencia": "PDS 10, slides 3–4."
    },
    {
      "id": "pds-049",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Interpretação de diagrama",
      "enunciado": "No diagrama, a barra marcada com X está antes de Despachar pedido. Qual é sua função?",
      "codigo": "",
      "alternativas": [
        "Sincronizar os fluxos paralelos antes de continuar.",
        "Escolher entre emitir a nota ou separar os produtos.",
        "Indicar que o processo acabou antes do despacho.",
        "Identificar qual equipe é responsável pela emissão da nota."
      ],
      "correta": 0,
      "explicacao": "A barra superior separa os fluxos (fork). A barra X é o join: o despacho aguarda os caminhos de separação e emissão da nota. Uma decisão condicional usaria outra notação.",
      "base": "uml",
      "referencia": "PDS 09, slides 28–30.",
      "imagem": "imagens/atividade-paralela.svg",
      "descricaoImagem": "Pedido aprovado leva a uma barra que abre dois fluxos, Separar produtos e Emitir nota. Ambos chegam à barra X; depois aparece Despachar pedido.",
      "legendaImagem": "Esquema autoral baseado na notação apresentada nas aulas."
    },
    {
      "id": "pds-050",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Direta",
      "enunciado": "Qual técnica da aula dá uma visão geral de fornecedores, entradas, processo, saídas e clientes?",
      "codigo": "",
      "alternativas": [
        "Matriz SIPOC.",
        "Diagrama de sequência.",
        "Diagrama de classes.",
        "Gráfico Burndown."
      ],
      "correta": 0,
      "explicacao": "SIPOC organiza esses elementos para compreender o processo como um todo. BPMN e fluxogramas também aparecem no material como formas de representar processos, com outros elementos e níveis de detalhe.",
      "base": "uml",
      "referencia": "PDS 09, slides 8–22."
    },
    {
      "id": "pds-051",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Interpretação de diagrama",
      "enunciado": "No diagrama de sequência, a seta tracejada com total = 80 representa o quê?",
      "codigo": "",
      "alternativas": [
        "O retorno de um resultado para o objeto que fez a solicitação.",
        "A criação de uma nova instância de Pedido.",
        "Uma repetição obrigatória da chamada consultarTotal().",
        "O encerramento definitivo do objeto Tela."
      ],
      "correta": 0,
      "explicacao": "A aula mostra a seta tracejada como mensagem de retorno. A seta contínua solicita consultarTotal(); o retorno informa o resultado. As barras estreitas indicam ativação e as linhas verticais tracejadas são linhas de vida.",
      "base": "uml",
      "referencia": "PDS 10, slides 6, 8 e 10.",
      "imagem": "imagens/sequencia-retorno.svg",
      "descricaoImagem": "Objetos Tela e Pedido, com linhas de vida verticais. Tela envia consultarTotal() a Pedido por seta contínua. Pedido envia total = 80 a Tela por seta tracejada.",
      "legendaImagem": "Esquema autoral baseado na notação apresentada nas aulas."
    },
    {
      "id": "pds-053",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Direta",
      "enunciado": "Para que servem partições ou swimlanes no diagrama de atividades?",
      "codigo": "",
      "alternativas": [
        "Separar visualmente as áreas ou os responsáveis pelas ações.",
        "Indicar que todas as atividades devem ocorrer em paralelo.",
        "Substituir condições por uma sequência única obrigatória.",
        "Definir a duração fixa de cada ação do processo."
      ],
      "correta": 0,
      "explicacao": "As partições organizam ações por áreas ou responsabilidades. O paralelismo usa fork e join, não a simples existência de raias.",
      "base": "uml",
      "referencia": "PDS 09, slide 28."
    },
    {
      "id": "pds-054",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Interpretação de diagrama",
      "enunciado": "Se o produto estiver indisponível, qual ação o fluxo abaixo executa?",
      "codigo": "",
      "alternativas": [
        "Avisar indisponível.",
        "Reservar produto.",
        "Reservar produto e avisar indisponível em paralelo.",
        "Voltar obrigatoriamente para Consultar estoque."
      ],
      "correta": 0,
      "explicacao": "A decisão Disponível? segue pelo caminho [não], que leva a Avisar indisponível. Os caminhos alternativos são reunidos depois por um merge; não há fork iniciando atividades paralelas.",
      "base": "uml",
      "referencia": "PDS 09, slides 28–30.",
      "imagem": "imagens/atividade-decisao.svg",
      "descricaoImagem": "Consultar estoque leva à decisão Disponível?. O caminho [sim] leva a Reservar produto; o caminho [não] leva a Avisar indisponível. Os caminhos se reúnem e o processo termina.",
      "legendaImagem": "Esquema autoral baseado na notação apresentada nas aulas."
    },
    {
      "id": "pds-055",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Situação",
      "enunciado": "No diagrama de sequência, uma operação deve se repetir enquanto houver itens no carrinho. Qual recurso descrito na aula representa isso?",
      "codigo": "",
      "alternativas": [
        "Uma nova partição para cada responsável.",
        "Um nó final antes da primeira mensagem.",
        "Moldura loop com uma condição de repetição.",
        "Um fork que transforma cada item em um caminho alternativo."
      ],
      "correta": 2,
      "explicacao": "A moldura loop representa iteração condicionada. Os outros elementos citados se relacionam a responsabilidades ou a fluxo de atividades.",
      "base": "uml",
      "referencia": "PDS 10, slide 13."
    },
    {
      "id": "pds-056",
      "grupo": "uml",
      "tema": "UML e diagramas",
      "tipo": "Interpretação de diagrama",
      "enunciado": "No fragmento alt abaixo, se saldo for 80, qual mensagem será enviada?",
      "codigo": "",
      "alternativas": [
        "avisarSaldoInsuficiente() para Aviso.",
        "confirmar() para Pagamento.",
        "As duas mensagens, obrigatoriamente em sequência.",
        "Nenhuma mensagem, porque saldo não é igual a 100."
      ],
      "correta": 0,
      "explicacao": "A condição saldo >= 100 é falsa para 80. Executa-se a alternativa [else], que envia avisarSaldoInsuficiente(). A moldura alt representa alternativas condicionais; o tempo é lido de cima para baixo.",
      "base": "uml",
      "referencia": "PDS 10, slides 14 e 16.",
      "imagem": "imagens/sequencia-alt.svg",
      "descricaoImagem": "Fragmento alt: na primeira região, guarda [saldo >= 100], Checkout envia confirmar() a Pagamento. Na segunda, [else], Checkout envia avisarSaldoInsuficiente() a Aviso.",
      "legendaImagem": "Esquema autoral baseado na notação apresentada nas aulas."
    }
  ],
  "minimosVisuais": {
    "uml": 2
  }
};
