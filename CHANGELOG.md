# Changelog do projeto

Este arquivo consolida as últimas rodadas de evolução do `Manual do Pesquisador`, com foco em conteúdo, arquitetura, navegação, publicação e correções técnicas.

## Rodada 1

Expansão do `FAQ`, padronização de referências cruzadas de rodapé e criação do módulo `BR3 · Periódicos, Indexação e Submissão no Brasil`.

- O `faq.html` foi aprofundado com dúvidas editoriais e metodológicas mais próximas do uso real do portal.
- Os rodapés dos módulos foram normalizados para incluir `Início`, `Glossário`, `Roadmap`, `FAQ`, `Checklist` e `Modelos`.
- Foi criado o módulo `modulos/periodicos-indexacao-brasil.html`, conectando o bloco nacional a periódicos, indexação e estratégia de submissão no Brasil.
- A navegação principal recebeu ajustes para acomodar novas entradas sem quebrar o layout.

## Rodada 2

Ampliação do bloco `Referência`, aprofundamento de `Publicação` e `Submissão` e criação do módulo `BR4`.

- Foi criada a página `checklists-editoriais.html`, cobrindo pré-submissão, resposta a pareceres e pós-aceite.
- `modulos/publicacao.html` recebeu exemplos de decisão editorial, leitura de processo e conexões mais diretas com o fluxo de submissão.
- `modulos/submissao.html` foi aprofundado com exemplos de resposta a pareceres e vínculo explícito com os checklists.
- Foi criado `modulos/repositorios-preservacao-brasil.html`, consolidando repositórios, preservação e circulação institucional no contexto brasileiro.

## Rodada 3

Expansão de `Dados de Pesquisa`, aprofundamento de `Identidade do Pesquisador` e criação de uma nova página de modelos editoriais.

- `modulos/dados-pesquisa.html` passou a incluir uma camada mais clara de depósito, metadados e conexão com `BR4`.
- `modulos/identidade-pesquisador.html` ganhou a seção sobre presença institucional, perfis e autoridade acadêmica.
- Foi criada a página `modelos-editoriais.html` com modelos de carta ao editor, resposta a pareceres e texto curto de submissão.
- As novas páginas de apoio foram integradas à arquitetura global de navegação, rodapé e busca.

## Rodada 4

Revisão visual fina do portal publicado e aprofundamento do eixo `Identidade` e de partes do eixo `Impacto`.

- `modulos/financiamento.html` recebeu exemplos práticos, leitura institucional brasileira e seção sobre armadilhas recorrentes.
- `modulos/bibliometria.html` foi aprofundado com exemplos aplicados, limites de leitura métrica e interpretação institucional no Brasil.
- `modulos/divulgacao-cientifica.html` ganhou cenários aplicados e reforço de responsabilidade pública.
- `modulos/ia-pesquisa.html` passou a tratar usos legítimos, limites de delegação, transparência e cenários aplicados de forma mais concreta.

## Rodada 5

Correções técnicas de navegação, publicação e consistência de assets.

- Foi corrigida uma anomalia visual na navegação responsiva em larguras intermediárias, ajustando o breakpoint do menu e o estado oculto do painel móvel em `styles.css`.
- Foi adotado versionamento por query string para `styles.css` e `script.js`, reduzindo problemas de cache no portal publicado.
- O utilitário `version_assets.py` passou a propagar a versão de assets para todas as páginas HTML.
- O utilitário `check_links.py` foi corrigido para ignorar `#anchors` e `?querystrings` ao validar links locais.
- Âncoras quebradas introduzidas por renomeação de seções foram corrigidas, em especial nos módulos de `Dados de Pesquisa` e `Identidade do Pesquisador`.

## Rodada 6

Padronização estrutural e fortalecimento da arquitetura de apoio.

- A busca global em `script.js` foi atualizada para incluir `CHK`, `MOD`, `BR3` e `BR4`.
- `index.html` foi ajustado para refletir o novo total de módulos e páginas de apoio.
- O bloco `Nacional` passou a operar como conjunto articulado entre `F18`, `BR1`, `BR2`, `BR3` e `BR4`.
- O portal passou a operar com melhor coerência entre páginas temáticas, páginas de apoio e links de circulação transversal.

## Rodada 7

Aprofundamento operacional de `Planejamento` e `Ferramentas Digitais`, além de revisão editorial do bloco `Impacto`.

- `modulos/ferramentas-digitais.html` foi reescrito em estrutura mais limpa e ganhou:
- seção de fluxo operacional
- template-base para organizar entrada, processamento, produção e arquivo
- seção de erros comuns em pilhas digitais excessivamente fragmentadas
- reforço de links cruzados com `Planejamento`, `Divulgação`, `IA`, `Dados de Pesquisa` e `BR4`
- `modulos/planejamento.html` ganhou:
- nova descrição de página com microtexto mais homogêneo
- refinamento do menu lateral
- seção `Fluxo operacional do planejamento`
- seção `Erros comuns antes da coleta`
- template-base para transformar problema, pergunta, lacuna, objetivos e protocolo em uma página coerente
- O bloco `Impacto` foi alinhado editorialmente com:
- encadeamento mais consistente entre `Divulgação Científica`, `Ferramentas Digitais` e `IA na Pesquisa`
- revisão de conexões internas entre páginas do bloco
- atualização dos termos de busca do eixo em `script.js`

## Arquivos mais afetados

- `index.html`
- `styles.css`
- `script.js`
- `faq.html`
- `checklists-editoriais.html`
- `modelos-editoriais.html`
- `modulos/publicacao.html`
- `modulos/submissao.html`
- `modulos/dados-pesquisa.html`
- `modulos/identidade-pesquisador.html`
- `modulos/financiamento.html`
- `modulos/bibliometria.html`
- `modulos/divulgacao-cientifica.html`
- `modulos/ferramentas-digitais.html`
- `modulos/ia-pesquisa.html`
- `modulos/planejamento.html`
- `modulos/periodicos-indexacao-brasil.html`
- `modulos/repositorios-preservacao-brasil.html`

## Observações técnicas

- O repositório original apresentou problemas de `.git` corrompido em rodadas anteriores, o que exigiu fluxo de publicação com clone limpo para preservar commits e pushes.
- O uso de versionamento de assets foi mantido como medida preventiva contra CSS e JavaScript desatualizados no navegador.
- A validação local de links continua sendo parte importante da rotina antes de publicação, especialmente após criação de novas páginas e renomeação de âncoras.
