# COMO PREPARAR MINHAS AULAS — PADRÃO MATHEUS MOREIRA

> **Função deste arquivo:** orientar qualquer IA, designer ou desenvolvedor que vá criar capítulos e experiências de aprendizagem para Matheus Moreira.
>
> **Princípio central:** este projeto não cria apresentações convertidas em sites. Ele cria **experiências digitais de aprendizagem**. A interface deve aproveitar recursos próprios da web — interação, movimento, manipulação, feedback, revelação progressiva e exploração — sempre subordinados ao objetivo pedagógico.

---

## 1. O QUE ESTAMOS CONSTRUINDO

A unidade principal não é o slide. É uma **experiência de aprendizagem dentro de um site**.

Uma aula pode ser dividida em:

**capítulo → seção → cena → interação → estado**

Uma cena pode ocupar uma tela inteira, mas não precisa se comportar como um slide estático. Ela pode mudar de estado, reagir ao estudante, revelar conteúdo aos poucos, permitir manipulação de variáveis e apresentar feedback.

A pergunta principal nunca deve ser:

> “Como transformo este trecho do livro em uma tela?”

A pergunta deve ser:

> “O que o estudante precisa perceber, testar, comparar ou concluir para compreender esta ideia?”

Sempre que algo pudesse ser apenas explicado em um slide, perguntar se pode ser transformado em **ação do estudante**.

Exemplos:

- comparação → slider ou toggle;
- antes/depois → controle arrastável;
- relação entre grandezas → parâmetros manipuláveis;
- previsão → escolha antes da resposta;
- classificação → arrastar e soltar;
- gráfico → gráfico dinâmico;
- fórmula → termos interativos;
- verdadeiro/falso → resposta imediata com feedback;
- exercício → resolução progressiva;
- processo físico → animação controlada;
- fenômeno microscópico → simulação;
- identificação de erro → elementos clicáveis;
- comparação de modelos → alternância entre estados.

A web deve fazer algo que um PDF não faria tão bem.

---

## 2. O QUE UMA AULA DO MATHEUS DEVE FAZER

A aula não é um resumo visual do livro. Ela deve produzir uma **linha de raciocínio perceptível**.

Em geral, deve:

1. partir de uma situação, fenômeno ou pergunta compreensível;
2. recuperar pré-requisitos quando necessário;
3. provocar previsão ou comparação antes de entregar a resposta;
4. construir o significado físico antes da formalização matemática;
5. explicitar confusões e erros frequentes;
6. permitir que o estudante observe ou manipule algo quando isso ajudar;
7. introduzir a fórmula como síntese do raciocínio;
8. oferecer prática em nível crescente de exigência;
9. dar feedback útil;
10. conectar o conteúdo a aplicações, decisões humanas ou vestibulares quando isso realmente agregar valor.

O estudante deve sentir que cada etapa responde a uma pergunta criada pela etapa anterior.

Uma estrutura muito frequente é:

**situação → pergunta → tentativa → interação → observação → explicação → formalização → nova situação**

Isso é preferível ao padrão passivo:

**texto → fórmula → exercício**.

---

## 3. PROCESSO DE CRIAÇÃO DA AULA

### 3.1. Primeiro vem o briefing pedagógico

Quando Matheus envia um capítulo, apostila, PDF ou outro material-fonte, não transformar automaticamente o índice em páginas.

Primeiro fazer um briefing discutido:

- sintetizar o que o material realmente contém;
- separar conceitos centrais de detalhes acessórios;
- identificar quais ideias precisam ser construídas e quais podem ser apenas consultadas;
- apontar concepções erradas relevantes;
- identificar pré-requisitos;
- localizar fórmulas e avaliar se elas realmente precisam ser formalizadas;
- sugerir cortes e fusões;
- indicar onde uma interação seria pedagogicamente melhor que texto ou imagem;
- sugerir exercícios, aplicações e conexões com vestibulares;
- identificar o que o estudante precisa **fazer** e não apenas ler;
- discutir o recorte com Matheus antes da implementação.

O briefing deve explicar **por que** algo entra, sai ou vira interação.

### 3.2. Depois vem a arquitetura da experiência

Não organizar a aula pensando em “quantidade de slides”. Organizar por **cenas e objetivos pedagógicos**.

Uma mesma cena pode ter vários estados.

Exemplo:

- estado 1: pergunta inicial;
- estado 2: aluno faz uma previsão;
- estado 3: sistema responde à escolha;
- estado 4: visualização mostra o fenômeno;
- estado 5: explicação aparece;
- estado 6: fórmula é construída;
- estado 7: pequena checagem verifica a compreensão.

Se uma ideia pode ser ensinada dentro da mesma cena sem quebrar a continuidade, não criar uma nova página apenas para separá-la artificialmente.

### 3.3. Proposta antes da implementação

Quando a construção estiver sendo feita de forma colaborativa com Matheus:

1. explicar a próxima seção ou cena;
2. declarar seu objetivo pedagógico;
3. dizer o que o estudante fará;
4. indicar quais estados/interações existirão;
5. explicar o que ficará visível de início e o que será revelado depois;
6. aguardar autorização quando Matheus estiver trabalhando em modo de aprovação por etapas;
7. só então implementar.

Não avançar em lote quando a conversa estiver claramente seguindo aprovação etapa a etapa.

---

## 4. PRINCÍPIOS PEDAGÓGICOS

### 4.1. Significado antes da fórmula

Mostrar primeiro:

- o sistema físico;
- o que muda;
- por que muda;
- quais grandezas importam;
- qual comportamento qualitativo se espera.

Depois formalizar.

Perguntas úteis:

> “O que você acha que vai acontecer?”
>
> “Qual grandeza está mudando?”
>
> “Antes da conta, o resultado deveria aumentar ou diminuir?”
>
> “O que muda se alterarmos apenas esta variável?”

A fórmula deve parecer uma síntese de algo que o estudante já começou a entender.

### 4.2. Conceitos microscópicos quando ajudam

Quando a escala microscópica realmente esclarece o fenômeno macroscópico, mostrá-la.

Exemplos:

- temperatura ↔ agitação térmica;
- dilatação ↔ aumento do afastamento médio;
- condução ↔ transferência de energia entre regiões.

Na web, preferir que essas representações sejam **dinâmicas** quando isso acrescentar entendimento. Se o estudante altera a temperatura, as partículas podem reagir visualmente.

### 4.3. Trabalhar concepções erradas

Matheus valoriza momentos em que o estudante precisa reconhecer por que uma ideia está errada.

Boas estratégias:

- frase cotidiana incorreta;
- seleção entre alternativas conceituais;
- objeto ou trecho clicável em “onde está o erro?”;
- previsão antes da explicação;
- feedback que explica o raciocínio, não apenas “certo/errado”.

### 4.4. Permanecer no ponto da dúvida

Se o estudante não compreendeu, não simplesmente avançar.

A experiência ou explicação deve poder:

- reformular;
- oferecer outro exemplo;
- reduzir a abstração;
- recuperar um pré-requisito;
- oferecer uma pista graduada;
- depois retornar exatamente ao ponto original.

### 4.5. Nível de Ensino Médio por padrão

O projeto trabalha majoritariamente com Ensino Médio.

Conceitos avançados podem aparecer de modo conceitual, mas não devem exigir formalismo universitário sem pedido explícito.

---

## 5. NARRATIVA DE UMA SEÇÃO

Quando fizer sentido, uma seção pode seguir esta lógica:

1. **Provocação** — situação, pergunta ou conflito;
2. **Exploração** — estudante manipula, escolhe, arrasta ou prevê;
3. **Observação** — algo acontece e precisa ser interpretado;
4. **Construção conceitual** — organizar o que foi observado;
5. **Formalização** — definição, relação ou fórmula;
6. **Prática guiada** — exercício com ajuda gradual;
7. **Aplicação** — situação real ou tecnológica;
8. **Vestibular** — quando relevante;
9. **Síntese** — curta e útil.

Não criar etapas apenas para preencher essa lista.

---

## 6. FÓRMULAS, NOTAÇÃO E CONTAS

### 6.1. Fórmulas são elementos interativos quando isso ajuda

Uma fórmula central deve ser visualmente forte e legível, mas a web permite mais do que exibi-la.

Possibilidades:

- hover/toque em um termo destaca a grandeza correspondente na cena;
- tooltip explica o símbolo;
- slider altera uma variável e atualiza o resultado;
- cores ou realces conectam termos matemáticos aos objetos físicos;
- a fórmula pode ser construída termo a termo;
- um gráfico pode reagir ao mesmo controle.

### 6.2. Não mostrar todas as explicações de uma vez

Usar revelação progressiva.

Se uma informação é útil apenas depois de uma tentativa, mantê-la oculta até esse momento.

A interface não deve gerar a sensação de “preciso copiar tudo”.

### 6.3. Relações úteis devem facilitar a operação mental

Quando houver uma forma especialmente útil para resolver exercícios, preferir a forma que facilita o raciocínio do estudante.

Exemplo já aprovado em dilatação:

**α / 1 = β / 2 = γ / 3**

### 6.4. Símbolos e nomenclaturas

Antes de implementar um capítulo novo, apresentar a Matheus a lista de símbolos e nomenclaturas quando houver risco de inconsistência e aguardar validação.

Exemplo já definido para temperatura:

- T_C, T_K e T_F, com C, K e F em subscrito na interface;
- ΔT_C, ΔT_K e ΔT_F para variações;
- não usar θ para temperatura Celsius nesta plataforma.

---

## 7. EXERCÍCIOS E FEEDBACK

Matheus prefere exercícios que revelem raciocínio, não apenas substituição de valores.

Um padrão recorrente:

### Primeiro exercício
Aplicação direta do conceito recém-construído.

### Segundo exercício
Exige perceber uma relação adicional.

Exemplo:

- a questão pede dilatação volumétrica;
- o enunciado fornece coeficiente linear;
- o estudante precisa perceber que deve converter antes de calcular.

Não rotular exercícios como “fácil” e “difícil”.

### Não entregar a ideia central

Se a questão existe para verificar se o estudante percebe algo, não colocar uma dica que resolva exatamente esse ponto antes da tentativa.

### Feedback em camadas

A resolução pode ser progressiva:

1. “O que a questão pede?”
2. “Quais dados importam?”
3. “Temos a grandeza ou coeficiente correto?”
4. “Qual relação física é adequada?”
5. cálculo;
6. unidade;
7. checagem de ordem de grandeza;
8. interpretação física.

### Hover não pode ser requisito

No computador, hover pode enriquecer a experiência. Mas informação essencial deve ser acessível também por clique, toque ou teclado.

Para não revelar respostas acidentalmente, preferir:

- botão ou hotspot claro;
- pequeno delay;
- clique/toque explícito;
- card com estados “pergunta” e “resolução”.

---

## 8. INTERAÇÃO COMO FERRAMENTA PEDAGÓGICA

Antes de criar qualquer animação ou componente interativo, perguntar:

> **“O que o estudante aprende ao fazer isso?”**

Se a resposta for apenas “fica bonito”, reduzir ou remover.

### Interações especialmente úteis

- **slider:** relação contínua entre grandezas;
- **toggle:** comparar dois modelos, estados ou hipóteses;
- **drag:** ordenar, classificar, montar ou comparar;
- **hover + toque:** destacar relações;
- **reveal:** preservar a tentativa antes da resposta;
- **gráfico dinâmico:** mostrar dependência entre variáveis;
- **simulação:** visualizar fenômeno que não é diretamente observável;
- **input numérico:** explorar sensibilidade a parâmetros;
- **checkpoint:** checar compreensão antes de avançar.

### Linguagem de movimento

Usar uma linguagem consistente:

- **slide-up** para entrada de novas ideias;
- **highlight sweep** para conceitos-chave;
- **fade** para informação secundária;
- **scale suave** para foco;
- **morph** para transformação física;
- **progressive reveal** para raciocínio e resolução;
- **parallax leve** apenas quando não atrapalhar;
- microinterações em botões e objetos manipuláveis.

Evitar giro gratuito, bounce excessivo, transições longas e movimento sem função.

---

## 9. INTERFACE E IDENTIDADE VISUAL

### 9.1. O site não deve parecer PowerPoint dentro do navegador

Não impor regras herdadas de slides, como:

- “toda página precisa caber como slide”;
- orientação paisagem obrigatória;
- personagem em toda tela;
- fórmula sempre acompanhada de ilustração decorativa;
- rodapé textual repetido em cada cena.

A página deve responder ao dispositivo e à função pedagógica.

### 9.2. Identidade visual

A identidade deve vir de:

- tipografia;
- paleta;
- espaçamento;
- componentes;
- ícones;
- ilustrações úteis;
- diagramas;
- animações;
- consistência de interação.

Se imagens produzidas anteriormente em clay forem úteis, elas podem ser reaproveitadas. **Clay não é regra do site.** Não tentar imitar massinha em CSS ou transformar todo elemento da interface em 3D.

### 9.3. Personagens

Personagens são opcionais.

Usar apenas quando ajudam a:

- orientar;
- humanizar;
- fazer uma pergunta;
- representar uma situação;
- conduzir uma sequência.

Não preencher espaço com personagens sem função.

### 9.4. Logo e identificação

Usar sempre a logo original fornecida por Matheus; nunca redesenhar ou gerar uma versão semelhante.

A logo pode aparecer na abertura do capítulo, página inicial ou área institucional. Não precisa ser repetida em todas as cenas.

A identificação da plataforma deve usar somente **Matheus Moreira** e a assinatura pessoal aprovada. Não inserir marcas ou vínculos institucionais.

### 9.5. Responsividade

A experiência deve funcionar bem em:

- projetor/computador;
- notebook;
- tablet;
- celular.

O layout pode mudar entre dispositivos. Não sacrificar legibilidade mobile para preservar uma composição “de slide”.

---

## 10. TRÊS MODOS DE USO DO MESMO CAPÍTULO

A plataforma deve tratar cada capítulo como uma mesma base pedagógica capaz de assumir **três experiências diferentes**. Depois de escolher o capítulo, a pessoa deve escolher claramente como quer utilizá-lo:

1. **Apresentar como professor**;
2. **Apresentar como aluno**;
3. **Estudar sozinho**.

Esses três modos não são apenas nomes diferentes para a mesma interface. O conteúdo conceitual pode ser compartilhado, mas a quantidade de controle, o tipo de ajuda, o momento de revelar respostas e o grau de autonomia mudam.

### 10.1. Entrada do capítulo

O fluxo desejado é:

**Escolher capítulo → escolher modo de uso → iniciar a experiência.**

A tela de escolha deve deixar a diferença evidente:

- **Apresentar como professor** — controlar a aula e conduzir a turma;
- **Apresentar como aluno** — acompanhar a aula e participar das interações;
- **Estudar sozinho** — aprender no próprio ritmo, com explicações, atividades e feedback.

Na arquitetura de produto, esses modos podem ser agrupados assim:

**Sala de aula**
- Apresentar como professor
- Apresentar como aluno

**Estudo individual**
- Estudar sozinho

### 10.2. Apresentar como professor

O modo professor é um manual pedagógico de condução.

Ele deve permitir, conforme a plataforma evoluir:

- avançar, voltar e escolher a cena;
- ver exatamente a pergunta apresentada ao aluno;
- acessar gabarito, objetivo, pontos de atenção e orientação de condução;
- iniciar, pausar ou reiniciar simulações usadas na exposição;
- receber comparações, exemplos e sugestões para a lousa;
- usar tela cheia para projeção;
- identificar a conclusão “Ou seja” à qual a explicação precisa chegar.

O modo professor deve funcionar em computador, notebook ou tablet.

### 10.3. Apresentar como aluno

O modo aluno é usado principalmente **durante uma aula conduzida**. Ele não é o modo autodidata.

O estudante deve:

- abrir o mesmo capítulo do professor;
- escolher livremente a cena e avançar sem depender de liberação;
- não enxergar gabaritos, notas privadas ou resoluções antecipadas;
- fazer previsões, escolher reformulações, mover controles, manipular simulações e responder pequenas atividades;
- receber feedback individual no próprio aparelho;
- encontrar ao final da unidade de raciocínio um bloco “Ou seja” com a ideia que precisa guardar;
- usar a experiência confortavelmente em tablet, celular ou computador.

O modo aluno deve ser uma **interface de participação**, não uma cópia simplificada do modo professor.

### 10.4. Estudar sozinho

O modo **Estudar sozinho** é a experiência autodidata. Ele não depende de professor nem de sessão coletiva.

Como o estudante controla o próprio ritmo, esse modo deve oferecer mais apoio:

- explicações complementares;
- pistas graduadas;
- botão ou fluxo equivalente a “não entendi”;
- feedback mais detalhado;
- resolução progressiva;
- exemplos extras quando necessário;
- retomada de pré-requisitos;
- liberdade para voltar e avançar;
- indicação de quais pontos revisar após erros recorrentes;
- acesso ao **Teste-se** e ao diagnóstico pessoal ao final do capítulo.
- um bloco “Ou seja” que feche cada unidade importante de raciocínio.

A regra é simples:

**Professor conduz → aluno acompanha e interage → estudar sozinho ensina e acompanha autonomamente.**

### 10.5. Mesma cena, três comportamentos

Uma questão pode aparecer nos três modos, mas não da mesma forma.

Exemplo:

- **Professor:** vê a pergunta da turma, gabarito, objetivo, erros esperados, forma de conduzir, sugestão para a lousa e a conclusão “Ou seja”;
- **Aluno:** prevê, responde, explora e pode consultar a explicação sem bloqueio; depois encontra a síntese “Ou seja”;
- **Estudar sozinho:** responde, pede pistas, lê a explicação completa, confere o feedback e fecha com a mesma síntese.

Ao criar uma cena nova, definir explicitamente:

- o que é comum aos três modos;
- o que só o professor vê;
- o que o aluno em aula pode manipular;
- o que o estudante autodidata pode acessar como ajuda adicional.

### 10.6. Uso local e independente

Os três modos funcionam localmente e não serão sincronizados entre dispositivos. Não planejar sessões por QR Code, código de sala, espelhamento ou controle remoto.

### 10.7. Regra de projeto para qualquer capítulo novo

Ao criar uma cena, perguntar:

> “Como esta cena funciona no professor, no aluno em aula e no estudar sozinho?”

Para cada interação relevante, definir:

- quem controla;
- o que cada modo mantém individualmente;
- o que permanece individual;
- o que fica oculto;
- qual ajuda extra existe no modo autodidata;
- como a cena funciona com mouse, toque e teclado.

Os três modos devem ser tratados como parte estrutural da plataforma, não como recursos adicionados no final.

---

## 11. TESTE-SE E DIAGNÓSTICO DE APRENDIZAGEM

Ao final de cada capítulo deve existir uma etapa própria de **Teste-se**. Ela não deve funcionar apenas como uma prova que devolve uma nota. Sua função é produzir evidências sobre **o que o estudante compreendeu, onde está errando e o que precisa revisar**.

### 11.1. O Teste-se deve avaliar habilidades diferentes

As questões devem ser escolhidas de modo a distinguir, quando pertinente:

- compreensão conceitual;
- interpretação de enunciado;
- identificação de grandezas;
- escolha de relação física;
- conversão de unidades;
- cálculo;
- leitura de gráfico;
- transferência para uma situação nova;
- explicação escrita do fenômeno.

Não reduzir o diagnóstico a “acertou X de Y”.

### 11.2. Cada questão precisa de metadados pedagógicos internos

As questões já catalogadas podem preservar seus campos atuais. A camada diagnóstica deve ser acrescentada, não substituir o banco existente.

Campos recomendados, conforme fizer sentido:

```text
conceito: dilatacao_volumetrica
habilidade: converter_coeficientes
pre_requisitos:
  - dilatacao_linear
tipo_de_raciocinio:
  - interpretacao
  - calculo
erros_diagnosticaveis:
  - usou_alpha_no_lugar_de_gamma
  - confundiu_volume_inicial_com_variacao
secao_para_revisao: dilatacao/dimensoes
```

Essas tags são internas e nunca devem aparecer como códigos para o estudante.

### 11.3. O erro é evidência, não rótulo

O sistema pode dizer:

> “Você resolveu bem as aplicações diretas, mas teve dificuldade recorrente ao converter coeficientes de dilatação.”

Não deve dizer:

> “Você é ruim em dilatação.”

Uma única resposta errada não deve gerar uma conclusão forte. Procurar padrões entre questões diferentes e usar linguagem proporcional à evidência.

### 11.4. Quatro camadas de análise

O diagnóstico pode trabalhar em quatro níveis:

1. **resultado da questão** — correto, incorreto ou parcialmente correto;
2. **tipo de erro** — conceito, interpretação, fórmula, unidade, cálculo, gráfico etc.;
3. **padrão de aprendizagem** — dificuldade recorrente ou domínio consistente;
4. **plano de retomada** — partes específicas do capítulo que devem ser revisitadas.

### 11.5. Diagnóstico deve apontar para o próprio conteúdo

Cada habilidade precisa saber onde é ensinada.

Exemplo:

```text
habilidade: converter_coeficientes
revisar:
  chapter: dilatacao
  section: dimensoes
  scene: relacao-alpha-beta-gamma
```

Assim, o botão **“Revisar este ponto”** leva diretamente ao lugar correto, em vez de apenas recomendar genericamente “revise o capítulo”.

### 11.6. Respostas abertas

Quando a questão for discursiva, a futura camada de IA poderá analisar a resposta do estudante à luz de:

- conceitos esperados;
- relações necessárias;
- concepções erradas conhecidas;
- vocabulário físico relevante;
- coerência do raciocínio.

Exemplo: em uma explicação sobre água a 4 °C, a IA pode verificar se o estudante relacionou corretamente densidade e posição no lago e se confundiu temperatura com calor.

### 11.7. Relatório do estudante

O resultado final deve ser curto e acionável. Preferir três áreas:

**Você já domina**

**Vale revisar**

**Seu próximo passo**

Cada recomendação de revisão deve apontar para uma seção, interação ou exercício específico do capítulo.

### 11.8. Painel do professor fora do escopo atual

Um diagnóstico agregado dependeria de reunir respostas de vários aparelhos. Como não haverá sincronização entre dispositivos, esse painel não faz parte da arquitetura atual. Só reavaliar a ideia se houver uma fonte local, consciente e autorizada de dados, sem coleta automática entre aparelhos.

Caso essa decisão mude no futuro, uma visão local poderia mostrar, por exemplo:

- quantidade de estudantes que responderam;
- habilidades com maior domínio;
- dificuldades recorrentes;
- erros conceituais mais comuns;
- pontos que merecem retomada coletiva.

Não expor resultados individuais no projetor sem necessidade.

### 11.9. Papel da IA

A IA deve atuar sobre uma arquitetura pedagógica já definida. Ela recebe questões, tags, respostas, resoluções esperadas, erros conhecidos e histórico da sessão.

Sua função é:

- detectar padrões;
- analisar respostas abertas;
- explicar a dificuldade observada;
- recomendar retomadas;
- sugerir próximos exercícios.

A IA **não deve inventar sozinha a estrutura curricular** nem substituir as tags pedagógicas definidas pelo projeto.

### 11.10. Teste de retenção

Como evolução futura, o estudante pode receber depois de alguns dias um novo teste curto de retenção, com questões diferentes sobre as mesmas habilidades. Isso permite verificar se a aprendizagem permaneceu, sem repetir mecanicamente o teste anterior.

### 11.11. Relação com os três modos

- **Professor:** visualiza diagnóstico agregado e decide o que retomar;
- **Aluno em aula:** responde sem receber antecipadamente o diagnóstico completo enquanto a atividade coletiva estiver em andamento;
- **Estudar sozinho:** recebe diagnóstico pessoal, recomendações e atalhos de revisão;
- **Teste-se:** pode ser usado ao final do capítulo e, futuramente, como verificação de retenção.

---

## 12. SIMULAÇÕES E MODELOS

Simulações devem relacionar claramente:

**controle → mudança física → representação → conclusão**

Regras:

- deixar claro o que é modelo e o que é realidade;
- não inventar precisão física;
- informar quando deformações, deslocamentos ou velocidades foram ampliados visualmente;
- impedir estados fisicamente absurdos quando o modelo não os comporta;
- usar unidades adequadas;
- não transformar simulação em brinquedo desconectado do conceito.

Se uma simulação não ensina mais que uma animação simples, usar a solução mais simples.

---

## 13. IMAGENS E DIAGRAMAS

Antes de usar uma imagem, perguntar: **o que esta imagem ensina?**

Imagens úteis:

- antes/depois;
- comparação de sistemas;
- relação causal;
- grandeza invisível tornada visível;
- situação real usada para previsão;
- correção de concepção errada.

Quando a própria web puder representar o fenômeno diretamente, preferir um diagrama, SVG, canvas ou componente interativo a uma imagem estática.

Exemplos:

- partículas que respondem à temperatura;
- barra cujo comprimento muda;
- recipiente e líquido dilatando;
- gráfico de densidade da água atualizado por slider;
- vetores ou setas que aparecem conforme a análise.

---

## 14. VESTIBULARES E DADOS DE RECORRÊNCIA

Quando um conteúdo terminar com análise de vestibulares, não usar frases vagas como “cai muito”.

Quando possível, levantar:

- provas analisadas;
- janela de anos;
- número absoluto de ocorrências;
- percentual com denominador explícito;
- tipos de questão encontrados;
- limitações do levantamento.

Distinguir:

- ocorrência em edições;
- quantidade de questões;
- participação no total de Física.

Nunca transformar recorrência passada em previsão de que “vai cair”.

Na interface, esses dados podem ser apresentados por gráfico, filtro por banca ou exemplos clicáveis, desde que os números tenham fonte e definição claras.

---

## 15. REFLEXÃO CIENTÍFICO-SOCIAL

Quando houver conexão natural, incluir discussão que relacione Física a:

- decisões humanas;
- responsabilidade;
- risco;
- segurança;
- impactos sociais;
- impactos ambientais;
- aplicações tecnológicas.

A reflexão deve estar integrada ao conteúdo e permanecer acessível ao Ensino Médio.

Não transformar em apêndice moralizante.

---

## 16. REGRAS ESTRUTURAIS DESTA PLATAFORMA

Ao ampliar este projeto, preservar as decisões estruturais existentes, salvo pedido explícito de Matheus.

### Entrada do capítulo

- o mapa de post-its é a entrada do capítulo;
- o botão **“Voltar aos post-its”** deve permanecer disponível dentro da aula quando essa estrutura estiver sendo usada.

### Organização

A plataforma já pode usar blocos como:

- Orientação;
- Fundamentos;
- Construção;
- Prática e síntese.

Esses nomes não precisam virar páginas obrigatórias. São uma lógica de organização.

### Roteiro de pensamento

O roteiro pertence ao exercício correspondente.

Não criar uma página separada apenas para ele.

### “Entenda a linha de raciocínio”

Fica oculto por padrão e só reaparece quando Matheus indicar que realmente é necessário.

### Identificadores internos

IDs internos de questões nunca aparecem para o estudante.

### Funcionamento local/offline

Sempre que possível:

- evitar dependências remotas obrigatórias;
- manter assets no projeto;
- garantir navegação por teclado;
- oferecer suporte a toque;
- respeitar `prefers-reduced-motion`;
- preservar funcionamento essencial sem internet.

---

## 17. PADRÃO DE TEXTO

A linguagem deve ser:

- direta;
- humana;
- didática;
- rigorosa sem soar acadêmica demais;
- adequada ao Ensino Médio;
- sem burocratês;
- sem texto genérico de IA.

Prefira:

> “Antes da conta, compare as áreas.”

em vez de:

> “Proceda à análise das grandezas geométricas envolvidas.”

Prefira títulos que criem uma necessidade real:

- “O que muda quando aquecemos?”
- “O recipiente também dilata?”
- “Por que a água é diferente a 4 °C?”

Evite títulos vagos como:

- “Considerações gerais”;
- “Aspectos importantes”;
- “Observações adicionais”.

---

## 18. COISAS QUE MATHEUS NÃO QUER

Evitar:

- transformar o capítulo em páginas na mesma ordem do livro sem análise;
- fazer “slides dentro do navegador”;
- excesso de cards apenas para organizar visualmente;
- texto demais visível ao mesmo tempo;
- animação gratuita;
- personagem sem função;
- clay como obrigação estética;
- fórmula pequena ou escondida;
- dica que entrega a resposta antes da tentativa;
- interação que só funciona com mouse;
- hover como única forma de acessar informação;
- respostas reveladas acidentalmente;
- simulação sem relação explícita com o conceito;
- contexto artificial apenas para “enfeitar” exercício;
- dados de vestibular sem universo analisado;
- logo inventada ou redesenhada;
- excesso de páginas quando uma cena com estados resolveria melhor;
- interface visualmente impressionante, mas pedagogicamente passiva.

---

## 19. CHECKLIST ANTES DE CONSIDERAR UM CAPÍTULO PRONTO

### Pedagogia

- [ ] O estudante é provocado a pensar antes de receber a resposta?
- [ ] O significado aparece antes da fórmula?
- [ ] Há algo no capítulo apenas porque estava no livro?
- [ ] As confusões mais comuns foram tratadas?
- [ ] Os exercícios testam compreensão além de substituição?
- [ ] O feedback explica o raciocínio?
- [ ] O nível está adequado ao Ensino Médio?

### Experiência web

- [ ] A web está sendo usada como linguagem ou apenas como suporte para slides?
- [ ] Existe alguma informação estática que deveria virar interação?
- [ ] Cada animação tem função pedagógica?
- [ ] A mesma interação funciona com mouse, toque e teclado quando necessário?
- [ ] A interface é responsiva?
- [ ] O conteúdo essencial continua acessível sem hover?
- [ ] `prefers-reduced-motion` é respeitado?
- [ ] O site continua compreensível se as animações forem reduzidas?

### Visual

- [ ] A hierarquia está clara?
- [ ] Há espaço suficiente para respirar?
- [ ] A tipografia está legível no projetor e no celular?
- [ ] Ilustrações e personagens têm função?
- [ ] A identidade pessoal “Matheus Moreira” foi preservada sem vínculo institucional?

### Três modos de uso

- [ ] O capítulo oferece **Apresentar como professor**, **Apresentar como aluno** e **Estudar sozinho**?
- [ ] Está claro o que muda entre os três modos?
- [ ] No modo autodidata, o aluno consegue entender a sequência sem o professor ao lado?
- [ ] Há explicações complementares sem poluir a experiência conduzida?
- [ ] O aluno autodidata recebe feedback suficiente para corrigir o próprio raciocínio?

### Sala de aula

- [ ] Professor e aluno conseguem usar suas interfaces localmente?
- [ ] Pergunta, resposta do professor e síntese “Ou seja” permanecem coordenadas entre os modos?
- [ ] A experiência funciona de forma confortável em tablet, celular e computador, sem sincronização entre aparelhos?
- [ ] A mesma cena continua útil para estudar sozinho?

### Teste-se e diagnóstico

- [ ] As questões têm habilidades e conceitos identificados internamente?
- [ ] Os erros diagnosticáveis estão descritos quando houver padrão conhecido?
- [ ] Cada habilidade aponta para uma seção ou cena de revisão?
- [ ] O diagnóstico diferencia erro isolado de dificuldade recorrente?
- [ ] O relatório final informa o que já domina, o que revisar e o próximo passo?
- [ ] Respostas abertas têm critérios de análise claros antes de serem avaliadas por IA?
- [ ] A IA usa a arquitetura pedagógica do projeto em vez de inventar critérios sozinha?

### Técnico

- [ ] Funciona com teclado?
- [ ] Funciona com toque?
- [ ] Não depende de internet sem necessidade?
- [ ] Estados e respostas não são revelados acidentalmente?
- [ ] Simulações deixam claros os limites do modelo?

---

## 20. PROMPT OPERACIONAL PARA OUTRA IA OU PROJETO

> Você está criando experiências digitais de aprendizagem para o professor Matheus Moreira. **Não crie slides dentro de um navegador.** Use a web como linguagem pedagógica: interação, manipulação, feedback, animação, revelação progressiva, gráficos dinâmicos e simulações quando essas ferramentas ajudarem o estudante a compreender.
>
> Antes de implementar um capítulo, faça um briefing crítico do material-fonte. Identifique conceitos centrais, pré-requisitos, concepções erradas, fórmulas importantes, exemplos dispensáveis, aplicações, possíveis cortes e pontos em que o estudante deveria agir em vez de apenas ler. Explique por que cada elemento entra ou sai.
>
> Organize o capítulo em seções, cenas, interações e estados, não em uma sequência rígida de slides. Uma mesma cena pode começar com uma pergunta, receber uma previsão do estudante, mostrar uma interação, revelar o fenômeno, construir a explicação e só então formalizar a relação matemática.
>
> Priorize significado físico antes da fórmula, interpretação antes do cálculo e raciocínio antes da memorização. As aulas são principalmente de Ensino Médio. Quando houver conceitos avançados, mantenha-os conceituais salvo pedido explícito.
>
> Sempre pergunte se algo que seria explicado estaticamente pode virar uma ação pedagógica: comparação com slider, hipótese antes da resposta, gráfico dinâmico, variável manipulável, classificação por drag, fórmula com termos interativos, simulação ou resolução progressiva. Não use interação apenas para impressionar.
>
> Em exercícios, prefira uma primeira situação direta e uma segunda que exija perceber uma relação adicional, sem rotular como fácil/difícil e sem dar uma dica que entregue a ideia central. O feedback deve ser gradual e explicar o raciocínio. Informações essenciais nunca podem depender apenas de hover; ofereça também clique, toque e teclado.
>
> Use uma linguagem de movimento consistente: slide-up para entrada de ideias, highlight sweep para conceitos-chave, fade para informação secundária, scale suave para foco, morph para transformações físicas e progressive reveal para raciocínio. Evite giro, bounce e movimento gratuito.
>
> A identidade do site deve vir de tipografia, paleta, espaçamento, componentes, diagramas, ilustrações e movimento. **Clay não é uma regra.** Imagens clay já existentes podem ser reaproveitadas quando forem úteis, mas não tente reproduzir clay em toda a interface. Personagens são opcionais e só devem aparecer com função pedagógica.
>
> Use somente a identidade pessoal aprovada: **Matheus Moreira** e a assinatura em latim. Não criar logo institucional, não redesenhar marcas e não vincular o projeto a qualquer escola ou rede de ensino.
>
> Depois de escolher um capítulo, a plataforma deve oferecer três modos: **Apresentar como professor**, **Apresentar como aluno** e **Estudar sozinho**. O professor recebe um manual pedagógico com a pergunta da turma, objetivo, resposta, pontos de atenção, condução, lousa e conclusão. O aluno participa por previsões, reformulações, exercícios, controles e simulações, com liberdade para avançar. **Estudar sozinho** combina participação com explicações, pistas graduadas, retomadas e resoluções. Nos três modos, o bloco **“Ou seja”** registra a mesma conclusão: para o professor, é a meta da explicação; para aluno e autodidata, é a ideia que precisa ficar. >
> Ao final de cada capítulo, inclua uma etapa **Teste-se** orientada a diagnóstico, não apenas nota. Estruture questões com metadados internos de conceito, habilidade, pré-requisitos, tipo de raciocínio, erros diagnosticáveis e destino de revisão. A futura IA avaliadora deve usar essas tags e as respostas do estudante para identificar padrões, analisar respostas abertas, dizer o que já está dominado, o que vale revisar e apontar diretamente para as cenas ou exercícios adequados. Não rotule o aluno nem conclua dificuldade forte a partir de um erro isolado.
>
> Preserve responsividade, navegação por teclado e toque, `prefers-reduced-motion` e funcionamento offline sempre que possível. Uma página não precisa manter proporção de slide; o layout deve responder ao dispositivo.
>
> Quando houver análise de vestibulares, use dados verificáveis, informe universo analisado, intervalo de anos, números absolutos, percentuais e limitações. Não transforme recorrência passada em previsão.
>
> Antes de implementar um capítulo novo, valide símbolos e nomenclaturas quando necessário. Preserve a estrutura existente do projeto: mapa de post-its quando aplicável, roteiro de pensamento dentro do exercício, IDs internos ocultos, aprofundamento para estudo autônomo e simulações que distinguem claramente modelo e realidade.
>
> Critério final: **a aula deve fazer o estudante pensar, manipular, observar e concluir — não apenas percorrer páginas bonitas.**

---

## 21. FRASE-GUIA DO PROJETO

> **Não construa slides dentro de um navegador. Construa uma aula interativa que usa a web como linguagem.**
