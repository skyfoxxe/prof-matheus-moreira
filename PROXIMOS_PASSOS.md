# PRÓXIMOS PASSOS — PLATAFORMA MATHEUS MOREIRA

> **Função deste arquivo:** registrar o estado do desenvolvimento e dizer a qualquer IA, designer ou desenvolvedor qual é a próxima prioridade real do projeto.
>
> **Antes de implementar qualquer funcionalidade**, leia também `COMO_PREPARAR_MINHAS_AULAS.md`. O presente arquivo define **o que construir e em que ordem**; o outro define **como a experiência pedagógica deve funcionar**.

## Legenda de status

- `[x]` concluído
- `[~]` parcialmente concluído / base existente
- `[ ]` próximo ou futuro
- `[?]` decisão ainda pendente

---

## 1. ESTADO ATUAL DO PROJETO

### [x] Base offline/local funcional

O projeto já funciona como aplicação web local, sem servidor obrigatório para os conteúdos centrais.

Já existem, conforme a versão atual:

- três capítulos/aulas;
- mapas de post-its por capítulo;
- navegação por etapas;
- temas claro/escuro e paletas;
- navegação por teclado e toque;
- respeito a `prefers-reduced-motion`;
- laboratórios e simulações interativas;
- questões internas autorais;
- banco inicial de questões extraídas dos materiais enviados;
- filtros e análise da amostra de exercícios;
- estrutura de estudo autônomo;
- identificadores estáveis nas questões;
- campos de pendência/verificação em parte do banco.

### [x] Manual pedagógico documentado

O arquivo `COMO_PREPARAR_MINHAS_AULAS.md` registra o padrão de criação das aulas, uso da web como linguagem pedagógica, três modos de uso, Teste-se, diagnóstico, interações, simulações, vestibulares, acessibilidade e critérios editoriais.

### [~] Banco de questões catalogado

Já existe catalogação inicial em `questions-original.js/json` e arquivos relacionados.

A base atual é suficiente para começar a camada diagnóstica, mas **ainda não possui o conjunto completo de metadados pedagógicos necessários para diagnóstico automático**.

---

# PRIORIDADE AGORA

## 2. ARQUITETURA DOS TRÊS MODOS

### [x] Diferenciar pedagogicamente as três experiências

As 35 etapas dos capítulos atuais usam uma base coordenada:

- Professor: pergunta da turma, objetivo, condução, gabarito, sugestão para a lousa e conclusão esperada;
- Aluno: previsão ou escolha conceitual, pista, feedback e explicação consultável;
- Estudar sozinho: atividade, explicação completa, ajuda e síntese.

O bloco “Ou seja” aparece nos três modos. Ele funciona como meta de ensino para o professor e como conclusão direta para aluno e autodidata.
> **Atualização:** os três capítulos oferecem Professor, Aluno em aula e Estudar sozinho. A base de conteúdo é compartilhada e cada modo funciona localmente.


### [~] Criar a escolha de modo após selecionar o capítulo

Depois de escolher o capítulo, oferecer explicitamente:

1. **Apresentar como professor**
2. **Apresentar como aluno**
3. **Estudar sozinho**

Não tratar os três como skins da mesma página.

### [~] Definir permissões e comportamento por modo

Para cada cena/interação, registrar:

- conteúdo comum;
- conteúdo exclusivo do professor;
- conteúdo liberado ao aluno em aula;
- ajudas adicionais do modo autodidata;
- o que pode ser revelado apenas após determinada ação;
- o que permanece local em cada modo.

### [x] Preservar o modo atual como base do “Estudar sozinho”

A experiência autônoma existente já é uma boa base. Não desmontá-la apenas para encaixar os novos modos.

Ela deve evoluir para oferecer:

- pistas graduadas;
- retomadas;
- explicações extras;
- resoluções progressivas;
- “não entendi”;
- links de revisão vindos do diagnóstico.

### Critério de aceite

Um mesmo capítulo deve poder ser aberto nos três modos, com diferenças reais de interface e de revelação, sem duplicar todo o conteúdo em três arquivos independentes.

---

## 3. METADADOS PEDAGÓGICOS DAS QUESTÕES

### [~] Aproveitar a catalogação já existente

Não substituir `tema`, `dificuldade`, `raciocinio`, `pendencia`, `verificacao` ou outros campos já úteis.

Acrescentar uma camada diagnóstica.

### [ ] Definir esquema de tags internas

Modelo inicial sugerido:

```js
{
  conceito: "dilatacao_volumetrica",
  habilidade: "converter_coeficientes",
  preRequisitos: ["dilatacao_linear"],
  tiposDeRaciocinio: ["interpretacao", "calculo"],
  errosDiagnosticaveis: [
    "usou_alpha_no_lugar_de_gamma",
    "confundiu_volume_inicial_com_variacao"
  ],
  revisarEm: {
    chapter: "dilatacao",
    section: "dimensoes",
    scene: "relacao-alpha-beta-gamma"
  }
}
```

Os nomes finais dos campos podem ser ajustados ao padrão do código, mas a informação pedagógica precisa existir.

### [x] Criar catálogo central de habilidades

Evitar escrever a mesma habilidade de maneiras diferentes.

Exemplo:

```js
skills = {
  converter_coeficientes: {
    label: "Relacionar α, β e γ",
    chapter: "dilatacao",
    revisarEm: "relacao-alpha-beta-gamma"
  }
}
```

### [x] Marcar as questões usadas no Teste-se por habilidade

Começar pelas questões já existentes nos três capítulos atuais.

Não é necessário marcar tudo de uma vez. Priorizar primeiro as questões que entrarão no Teste-se.

O conjunto diagnóstico dos três capítulos já está marcado. A marcação das 32 questões do banco original continua como expansão futura.

### Critério de aceite

Dada uma questão, o sistema deve saber **o que ela avalia**, **quais erros relevantes pode revelar** e **para onde mandar o estudante caso precise revisar**.

---

## 4. TESTE-SE AO FINAL DO CAPÍTULO

### [x] Criar etapa “Teste-se”

Ela deve aparecer ao final de cada capítulo.

Não ser apenas “prova final”. Deve coletar evidências de aprendizagem.

### [~] Ampliar os tipos de resposta

Quando o conteúdo permitir, usar combinação de:

- múltipla escolha;
- previsão conceitual;
- cálculo;
- interpretação de gráfico;
- leitura de situação física;
- resposta curta/discursiva.

A versão atual já mistura previsão, cálculo e interpretação de situações físicas em questões objetivas. Respostas curtas e discursivas continuam futuras.

### [x] Cobrir habilidades diferentes

Evitar cinco questões que testam exatamente a mesma coisa.

Cada conjunto deve ter uma matriz simples de cobertura.

### [x] Registrar tentativa, não apenas gabarito

Quando tecnicamente possível, guardar também:

- primeira resposta;
- mudanças de resposta;
- pistas usadas;
- tempo aproximado apenas se pedagogicamente útil;
- erros intermediários em questões estruturadas.

Não transformar isso em vigilância nem usar tempo como sinônimo de competência.

### Critério de aceite

O Teste-se consegue produzir dados suficientes para distinguir “erro de conta” de “erro conceitual” em pelo menos parte das questões.

---

## 5. MOTOR DE DIAGNÓSTICO SEM IA

### [x] Construir primeiro a lógica determinística

Antes de chamar uma IA, criar regras que já consigam analisar:

- acertos/erros por habilidade;
- repetição do mesmo tipo de erro;
- habilidade dominante;
- habilidade que merece revisão;
- destino correto de revisão.

Exemplo de saída interna:

```js
{
  habilidade: "converter_coeficientes",
  evidencias: 3,
  acertos: 1,
  erros: 2,
  confianca: "moderada",
  recomendacao: "revisar"
}
```

### [x] Não diagnosticar a partir de um único erro

Um erro isolado pode gerar feedback da questão, mas não um rótulo de dificuldade consolidada.

### [x] Comunicar a força da evidência sem rotular o estudante

Exemplo:

- evidência insuficiente;
- sinal de atenção;
- dificuldade recorrente;
- domínio consistente.

Os nomes podem mudar, mas devem evitar rótulos negativos sobre a pessoa.

### Critério de aceite

Mesmo sem IA externa, o site consegue dizer quais habilidades tiveram bom desempenho e quais merecem revisão.

---

## 6. LIGAÇÃO DIAGNÓSTICO → REVISÃO

### [x] Criar destinos de revisão estáveis

Cada habilidade deve apontar para:

- capítulo;
- seção;
- cena;
- interação ou exercício, quando necessário.

### [x] Criar ação “Revisar este ponto”

Ao clicar, o estudante volta diretamente à experiência relevante.

### [x] Preservar contexto

Quando possível, indicar por que ele foi enviado para ali:

> “Você voltou aqui porque teve dificuldade ao relacionar α e γ.”

Sem bloquear a navegação.

### Critério de aceite

Nenhuma recomendação importante termina em “revise o capítulo”. Ela deve apontar para um local específico.

---

## 7. CAMADA DE IA PARA AVALIAÇÃO

### [ ] Integrar IA somente depois das tags e regras básicas

A IA não deve receber um banco sem estrutura e tentar adivinhar todo o currículo.

Ela deve receber contexto explícito:

- enunciado;
- habilidade;
- resposta esperada;
- resolução de referência;
- erros conhecidos;
- resposta do estudante;
- histórico daquela sessão;
- destinos possíveis de revisão.

### [ ] Usar IA para o que ela acrescenta valor

Principalmente:

- respostas abertas;
- justificativas;
- explicações em linguagem natural;
- padrões entre erros diferentes;
- síntese personalizada;
- recomendação textual de revisão.

### [ ] Manter saída pedagógica estruturada

A resposta da IA deve ser convertida para campos previsíveis, por exemplo:

```js
{
  conceitosComDominio: [],
  pontosParaRevisar: [],
  evidencias: [],
  proximosPassos: []
}
```

### [ ] Nunca rotular o estudante

Proibido produzir conclusões do tipo:

- “você é ruim em Física”;
- “você não sabe matemática”;
- “você é lento”.

Descrever comportamento observado nas respostas.

### [?] Definir provedor, custo e política de uso

Antes de publicar para estudantes, decidir:

- qual serviço de IA será usado;
- custo por avaliação;
- limites de uso;
- dados enviados;
- retenção;
- consentimento e privacidade;
- comportamento quando estiver offline.

### Critério de aceite

A IA explica o padrão de erro e recomenda revisão específica sem contradizer o gabarito e sem inventar conteúdos fora do capítulo.

---

## 8. RELATÓRIO DO ESTUDANTE

### [x] Criar tela final curta e acionável

Estrutura preferencial:

### Você já domina

Habilidades com evidência consistente de compreensão.

### Vale revisar

Dificuldades detectadas, com linguagem concreta.

### Seu próximo passo

Botões para cenas, interações e exercícios específicos.

### [x] Permitir refazer após revisão

Depois de revisar, oferecer novo conjunto curto de verificação.

### [ ] Futuro: teste de retenção

Depois de alguns dias, propor questões novas sobre as mesmas habilidades.

### Critério de aceite

O estudante sai do teste sabendo **o que fazer em seguida**, não apenas sua pontuação.

---

## 9. PAINEL DO PROFESSOR — FORA DO ESCOPO ATUAL

### [ ] Reavaliar somente se houver uma fonte local de dados

Um painel agregado dependeria de respostas reunidas de vários estudantes. Como o projeto não terá sincronização entre dispositivos, não implementar esse painel com coleta automática. Se o recurso voltar a ser discutido, ele deverá partir de dados importados conscientemente pelo professor e de uma decisão específica sobre privacidade.

Uma eventual visão local poderia mostrar:

- quantidade de respostas;
- habilidades com maior domínio;
- habilidades com dificuldade recorrente;
- erros conceituais mais frequentes;
- questões com maior concentração de erro.

### [ ] Não expor alunos individualmente no projetor

A tela pública deve favorecer dados agregados.

Detalhes individuais, se existirem, ficam em área privada do professor.

### [ ] Transformar dados em decisão de aula

O painel deve responder:

> “O que vale retomar agora?”

### Critério de aceite

Em poucos segundos, Matheus consegue identificar qual ponto merece uma retomada coletiva.

---

## 10. MODOS LOCAIS — DECISÃO DEFINITIVA

### [x] Não haverá sincronização entre dispositivos

Os modos Professor, Aluno e Estudar sozinho funcionam de forma local e independente. Não implementar QR Code, código de sala, sessão remota, espelhamento ou controle coletivo de dispositivos.

---

## 11. PERSISTÊNCIA, CONTAS E PRIVACIDADE

### [?] Decidir se haverá login

Questões a definir antes da implementação:

- estudante precisa de conta?
- professor precisa de conta?
- escola/turma terão códigos?
- é necessário histórico longitudinal?

### [ ] Persistir respostas quando necessário

Hoje boa parte do estado é temporário. Para um histórico longitudinal opcional, será necessário armazenamento persistente.

### [ ] Minimizar dados pessoais

Guardar apenas o necessário para a função pedagógica.

### [?] Definir política de retenção

Especialmente antes de qualquer uso real com estudantes.

---

# ORDEM RECOMENDADA DE IMPLEMENTAÇÃO

## AGORA

1. `[x]` três modos locais nos três capítulos;
2. `[x]` definir o schema de habilidades/tags;
3. `[x]` marcar as questões usadas nos conjuntos diagnósticos;
4. `[x]` Teste-se nos três capítulos;
5. `[x]` diagnóstico determinístico básico;
6. `[x]` recomendações conectadas às cenas de revisão.

## DEPOIS

7. `[ ]` adicionar IA para respostas abertas e síntese;
8. `[x]` criar relatório do estudante;
9. `[ ]` criar painel agregado do professor;


## MAIS ADIANTE

11. `[ ]` persistência e contas;
12. `[ ]` histórico longitudinal;
13. `[ ]` testes de retenção;
14. `[x]` expansão do diagnóstico para os três capítulos atuais;
15. `[ ]` marcar e revisar pedagogicamente as 32 questões do banco original;


---

# REGRA PARA QUALQUER IA QUE ABRIR ESTE REPOSITÓRIO

Antes de programar:

1. leia `COMO_PREPARAR_MINHAS_AULAS.md`;
2. leia este `PROXIMOS_PASSOS.md`;
3. consulte `LEIA-ME.txt` para saber o que a versão atual realmente implementa;
4. não marque como concluída uma funcionalidade apenas porque ela foi documentada;
5. ao terminar uma etapa, atualize o status neste arquivo;
6. se surgir uma decisão nova que altere a arquitetura, registre-a aqui antes de avançar para outras etapas;
7. preserve funcionalidades atuais que já funcionam, salvo pedido explícito para substituí-las.

---

# PRÓXIMO PASSO IMEDIATO

> **Validar pedagogicamente os Teste-se, ampliar os metadados para o banco completo e revisar a qualidade das cenas indicadas para retomada.**
>
> Não começar pela integração com IA. Primeiro o sistema precisa saber, de forma estruturada, **o que cada questão avalia, quais erros ela pode revelar e para onde o estudante deve voltar para revisar**.

---

# COMANDO PARA A PRÓXIMA RECONSTRUÇÃO

Você está recebendo uma versão já funcional da plataforma pessoal **Matheus Moreira**. Seu trabalho não é começar o projeto do zero nem substituir indiscriminadamente o que já existe.

Antes de qualquer alteração, leia integralmente:

1. `COMO_PREPARAR_MINHAS_AULAS.md`
2. `LEIA-ME.txt`
3. `PROXIMOS_PASSOS.md`

Considere esses arquivos como documentação do projeto existente. Preserve funcionalidades atuais que estejam funcionando, salvo quando uma mudança for necessária para melhorar a arquitetura ou atender explicitamente às orientações abaixo.

## Objetivo desta reconstrução

Evoluir a plataforma atual incorporando de forma mais clara uma metodologia de aprendizagem baseada em:

**observar → prever/perguntar → tentar → receber ajuda gradual → compreender o erro → retomar → tentar novamente.**

Não transformar a plataforma em um repositório de textos, PDFs ou apresentações digitais. A web deve continuar sendo usada como linguagem pedagógica própria: interação, manipulação, feedback, revelação progressiva, simulações, diagnóstico e caminhos de retomada.

O estudante deve continuar sendo protagonista. A plataforma ajuda, mas não pensa nem resolve prematuramente no lugar dele.

## 1. Tornar o método de aprendizagem visível

Criar uma pequena área institucional, seção ou página — integrada naturalmente ao site — que explique de maneira simples como se aprende na plataforma.

Não usar linguagem acadêmica nem listar teorias pedagógicas. A mensagem deve transmitir algo próximo desta lógica:

> Aqui você não vem apenas buscar uma fórmula. Você observa, faz uma previsão, testa uma ideia, recebe pistas quando precisa, entende o erro e tenta novamente.

Essa apresentação não deve parecer propaganda exagerada. Deve explicar honestamente a experiência pedagógica da plataforma.

## 2. Criar uma verdadeira escada de ajuda

Desenvolver progressivamente o recurso equivalente a **“Não entendi”**.

Quando o estudante pedir ajuda, não mostrar imediatamente a solução completa. Preferir uma sequência como:

1. pergunta que ajuda a observar o problema;
2. pista curta;
3. destaque do dado ou conceito relevante;
4. exemplo semelhante;
5. explicação de apenas um ponto necessário;
6. resolução progressiva, somente quando realmente necessária;
7. retorno ao problema original.

Depois da ajuda, sempre que possível, **devolver o problema ao estudante**.

Exemplo: em vez de “Use Δp = ρgh”, preferir inicialmente algo como “A questão está comparando dois pontos em alturas diferentes. Qual distância do desenho representa o desnível vertical entre eles?”. Se ainda houver dificuldade, avançar para a próxima camada.

## 3. Transformar o erro em caminho de retomada

O feedback não deve terminar em “Errado. Tente novamente.”

Quando houver evidências suficientes, identificar **qual ideia merece revisão**. Exemplo:

> Sua resposta sugere que você pode estar confundindo pressão absoluta com pressão manométrica.

Oferecer então uma ação **Revisar este ponto →**, levando para uma cena, interação, explicação ou exercício específico, e não simplesmente para o início do capítulo.

Depois da revisão, oferecer uma nova questão semelhante para verificar se a ideia foi reconstruída.

Não criar rótulos sobre o estudante. Descrever apenas o comportamento observado nas respostas.

## 4. Incorporar o padrão “modelo → tentativa semelhante”

Usar regularmente uma estrutura de scaffolding:

**Exemplo trabalhado → exercício muito semelhante → retirada gradual da ajuda.**

Progressão preferencial:

1. problema completamente resolvido e narrado;
2. problema semelhante com algumas etapas já preenchidas;
3. novo problema em que o estudante decide os passos;
4. aplicação menos familiar.

Sempre que a web permitir, transformar essa progressão em uma experiência interativa, e não apenas em texto estático.

## 5. Aumentar a presença de exercícios conceituais

Não concentrar a prática apenas em cálculo.

Usar também previsão antes do cálculo, verdadeiro ou falso, identificação de erro, comparação entre situações, escolha acompanhada de justificativa, interpretação de gráficos, explicação em linguagem natural e correção de afirmações incorretas.

Um padrão especialmente importante:

> **Verdadeiro ou falso? Se for falso, reescreva a afirmação tornando-a correta.**

O estudante não deve apenas selecionar “falso”. Ele precisa reconstruir a ideia.

## 6. Feedback deve ensinar sem entregar cedo demais

Antes de revelar uma resposta, explorar perguntas como:

- O que a questão pede?
- O que sabemos?
- O que está mudando?
- Qual resultado qualitativo esperamos?
- Existe alguma unidade ou ordem de grandeza que possa ser prevista?
- Qual conceito organiza a situação?

Quando possível, mostrar por que uma alternativa está errada, não apenas qual é a correta.

Não colocar uma dica que revele exatamente a habilidade que a questão pretende avaliar antes da primeira tentativa.

## 7. Preservar significado antes da fórmula

Manter como regra central:

**fenômeno/situação → interpretação → previsão → construção conceitual → formalização matemática.**

A fórmula deve aparecer como síntese de uma ideia que o estudante já começou a compreender.

Sempre que uma simulação puder ajudar o estudante a perceber uma relação antes da expressão matemática, preferir essa sequência.

## 8. Ser transparente sobre modelos e limites

A plataforma deve deixar claro quando uma simulação é esquemática, uma deformação foi ampliada visualmente, uma aproximação foi adotada, um valor foi arredondado, uma questão ainda não teve sua origem oficialmente conferida ou uma explicação depende de hipóteses específicas.

Não vender precisão inexistente.

Também deve ficar claro que a plataforma é um recurso pessoal de estudo e aprendizagem e não substitui a escola, o professor nem outras formas de acompanhamento quando necessárias.

## 9. Preparar uma futura ponte para materiais de estudo

Preparar a arquitetura para que, no futuro, possa existir uma área como **Materiais** ou **Materiais de estudo**.

Essa área poderá reunir materiais gratuitos, Kits Temáticos, Guias, recursos para estudantes e recursos para famílias.

Não é necessário implementar toda essa área nesta reconstrução se o produto ainda não estiver pronto.

Não misturar artificialmente o atual site de Física com a futura linha comercial de materiais. Compartilhar o **método pedagógico**, não obrigatoriamente a mesma identidade visual ou a mesma proposta comercial.

## 10. Possível área futura para famílias

Quando a linha de materiais estiver madura, considerar uma página voltada a responsáveis. Nela podem aparecer princípios como:

- observe antes de corrigir;
- pergunte antes de explicar;
- ajude apenas o necessário;
- devolva o problema ao estudante;
- retome após o erro.

Essa página pode futuramente conectar a plataforma aos materiais específicos destinados ao estudo acompanhado em casa.

Não colocar essas mensagens de maneira forçada na homepage atual de Física.

## 11. Preservar os três modos previstos

Manter a arquitetura planejada:

- **Apresentar como professor**;
- **Apresentar como aluno**;
- **Estudar sozinho**.

No modo **Estudar sozinho**, aprofundar principalmente ajuda graduada, “Não entendi”, exemplos semelhantes, retomadas, diagnóstico, feedback progressivo, Teste-se e caminhos específicos de revisão.

No modo professor, não revelar automaticamente aquilo que deve ser conduzido em sala.

Os modos devem compartilhar a mesma base pedagógica sem simplesmente duplicar todo o conteúdo.

## 12. Teste-se deve indicar o próximo passo

A avaliação final de cada capítulo não deve se resumir a uma nota.

Estrutura desejável:

### Você demonstrou domínio em
Habilidades com evidências consistentes.

### Vale retomar
Ideias em que houve dificuldade recorrente.

### Seu próximo passo
Botões para cenas, explicações, simulações ou exercícios específicos.

Depois da revisão, permitir uma nova verificação curta.

Evitar conclusões fortes baseadas em apenas uma questão.

## 13. Não destruir o que já existe

Preservar sempre que continuarem adequados:

- laboratórios e simulações;
- banco de questões;
- histórias da Física;
- mapas dos capítulos;
- navegação;
- acessibilidade;
- funcionamento em dispositivos diferentes;
- modo leitura;
- paletas e temas, se continuarem coerentes com a nova direção visual;
- identificação de limites dos modelos;
- mecanismos de reportar erro;
- funcionamento local/offline quando possível.

Antes de remover uma funcionalidade existente, verificar se ela realmente conflita com a nova arquitetura.

## 14. Não transformar tudo em uma tela cheia de recursos

Cada interação deve responder:

> O que o estudante aprende fazendo isso?

Se a resposta for apenas “fica mais bonito”, não implementar ou reduzir.

A estética deve ser forte e profissional, mas subordinada à aprendizagem.

## 15. Identidade do projeto

Este é um projeto pessoal **Matheus Moreira**.

**Não inserir referências institucionais, logotipos, créditos ou identidade visual de escolas ou redes de ensino.**

A plataforma deve permanecer independente.

## Princípio final

Ao reconstruir qualquer parte da plataforma, perguntar:

> O estudante está apenas recebendo informação ou está sendo levado a pensar?

E depois:

> Se ele não compreender, a plataforma sabe ajudá-lo sem fazer o trabalho por ele?

A direção desejada é:

**menos “conteúdo entregue” e mais “raciocínio construído”.**

A nova versão deve parecer mais inteligente pedagogicamente — não apenas tecnologicamente mais sofisticada.




## Próxima etapa técnica para publicação

Consultar `ARQUITETURA_DE_PRODUCAO.md`. O protótipo ainda entrega o banco e os gabaritos ao navegador. Antes de publicar uma versão paga, migrar conteúdo e correção para uma API com banco de dados, armazenamento de imagens, painel editorial, autenticação e pagamentos por checkout hospedado e webhooks.

## Revisão do capítulo-modelo — Dilatação térmica

- [x] alinhar as 12 cenas visíveis com Professor, Aluno e Estudar sozinho;
- [x] reescrever perguntas, sínteses, orientações de condução e sugestões de lousa;
- [x] manter o roteiro de pensamento dentro dos exercícios, sem página isolada;
- [x] corrigir os destinos de revisão conforme os índices reais das cenas;
- [x] preservar significado antes da fórmula e previsões antes da explicação;
- [ ] revisar individualmente as questões externas de dilatação e suas resoluções;
- [ ] ampliar a progressão exemplo trabalhado → tentativa semelhante → aplicação;
- [ ] fazer uma segunda rodada visual das simulações de sólidos, líquidos e água.

### Auditoria das questões de Dilatação

A revisão individual está registrada em `REVISAO_EDITORIAL_DILATACAO.md`. Foram catalogadas as 22 questões, suas habilidades, cenas de retomada, pré-requisitos externos e pendências de fonte/resolução. A etapa de lâminas bimetálicas foi incorporada ao capítulo porque cinco questões dependem dela.
