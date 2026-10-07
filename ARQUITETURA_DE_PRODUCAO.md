# Arquitetura para colocar a plataforma no ar

## Decisão principal

A versão atual é um protótipo local. Ela pode manter aulas e questões em arquivos JavaScript enquanto o conteúdo e a experiência pedagógica ainda estão sendo definidos. Essa estrutura não deve ser a versão comercial: tudo que vai ao navegador pode ser lido, copiado e alterado pelo usuário, inclusive gabaritos.

## Estrutura recomendada para a versão pública

1. **Interface do site**
   - Exibe aulas, mapas, simulações e exercícios.
   - Recebe conteúdo por uma API.
   - Guarda no aparelho apenas preferências simples, como tema e paleta.

2. **API no servidor**
   - Decide quais questões e aulas cada usuário pode acessar.
   - Entrega questões sem revelar resposta e resolução antes da hora.
   - Corrige respostas no servidor e registra progresso quando esse recurso existir.
   - Aplica limites de uso e valida todos os dados recebidos.

3. **Banco de dados**
   - PostgreSQL é uma escolha adequada.
   - Entidades iniciais: capítulos, etapas, questões, alternativas, figuras, fontes, versões editoriais e relatos de erro.
   - Mais tarde: usuários, assinaturas, permissões, tentativas e progresso.
   - Toda mudança de estrutura deve usar migrações versionadas e cópias de segurança.

4. **Armazenamento de imagens**
   - Figuras não devem ficar misturadas ao banco em formato de texto.
   - Use armazenamento de objetos, com nome estável, versão, texto alternativo, crédito e vínculo com a questão.

5. **Painel editorial**
   - Importar e revisar questões.
   - Conferir enunciado, figuras, notação, fonte, licença, gabarito e explicação.
   - Estados: rascunho, em revisão, aprovado e publicado.
   - Manter histórico de alterações e autoria da revisão.

6. **Conta e assinatura**
   - A autenticação deve ser feita por um serviço consolidado ou biblioteca bem mantida.
   - O pagamento deve usar checkout hospedado pelo provedor. O site não deve receber nem guardar número de cartão.
   - O servidor recebe webhooks assinados do provedor e atualiza o direito de acesso do usuário.
   - Uma página de sucesso de pagamento, sozinha, nunca prova que a compra foi concluída.

## Segurança mínima antes de cobrar

- Segredos e chaves somente no servidor e em variáveis de ambiente.
- HTTPS, cabeçalhos de segurança e política de conteúdo.
- Validação de entrada, proteção contra abuso e limite de requisições.
- Permissões mínimas no banco; painel editorial separado do acesso do aluno.
- Logs de ações administrativas, monitoramento de erros e alertas.
- Backups testados e procedimento de restauração.
- Política de privacidade, termos, cancelamento e tratamento dos dados conforme a LGPD.
- Dependências atualizadas e revisão de segurança antes do lançamento comercial.

## Caminho de migração

### Agora, durante o protótipo

- Separar dados das questões da forma como são exibidos.
- Padronizar identificadores, notação, fontes, imagens e estado editorial.
- Não prometer sigilo de gabaritos nem registrar dados pessoais.

### Antes de uma versão pública de teste

- Criar banco, armazenamento de imagens e API.
- Migrar o banco atual com um importador validado.
- Criar painel de revisão e fluxo de “Reportar erro”.
- Hospedar com domínio, HTTPS, ambiente de teste e ambiente de produção separados.

### Antes de receber pagamentos

- Adicionar autenticação, planos e regras de acesso.
- Integrar checkout e webhooks do provedor.
- Testar compra, renovação, falha, cancelamento, reembolso e restauração de acesso.
- Fazer revisão de segurança, privacidade e operação.

## Critério de arquitetura

Não haverá sincronização especial com tablets. Se no futuro houver conta e histórico, os dados ficam no servidor e qualquer navegador autorizado consulta o mesmo histórico. Isso é acesso normal pela web, não uma integração específica entre aparelhos.

## Regra de consultoria para as próximas decisões

Cada nova ideia deve ser avaliada em quatro pontos: experiência pedagógica, manutenção do conteúdo, segurança e custo operacional. Se uma solução funcionar apenas no protótipo, ela será identificada como temporária antes de ser ampliada.
