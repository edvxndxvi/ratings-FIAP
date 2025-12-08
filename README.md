# Ratings 

Ratings é um projeto de estudo de um site de avaliação de jogos. Inicialmente criado para uma avaliação da matérida de Front-End do 1º Semestre do curso de ADS da FIAP, hoje, sendo revisitado para aprimorar e reforçar conceitos do desenvolvimento com React.

## 💻 Tecnologias e Arquitetura

- **Framework**:	React 18
- **Linguagem**:	TypeScript
- **Bundler**: Vite
- **Estilização**: SCSS por Componente
- **API Externa**; RAWG Video Games Database API (https://rawg.io/apidocs)

## 🕹️ Recursos e Funcionalidades

- Lista de Jogos (Home)
- Busca de Jogos: Campo de input que aciona uma requisição à API em tempo real para filtrar jogos.
- Detalhes do Jogo: Tela exclusiva que carrega todas as informações adicionais de um jogo específico, usando seu ID.
- Avaliação por Estrelas:

## 🚀 Como Executar o Projeto Localmente
Siga estas instruções para ter uma cópia local do projeto em execução:

### Pré-requisitos
- Node.js e npm (ou Yarn/pnpm).
- Uma chave de acesso pessoal à RAWG API.

### 🔑 Configuração da API Key
1. Crie um arquivo de ambiente na raiz do projeto chamado `.env`.

2. Obtenha sua chave de API no site da RAWG.

3. Adicione a chave ao arquivo, utilizando o prefixo exigido pelo Vite:

```.env
VITE_RAWG_API_KEY=sua-chave-aqui
```

### Instalação
1. Clone o Repositório

2. Instale as Dependências:

```Bash
npm install
# ou yarn install
```

3. Inicie o Servidor de Desenvolvimento:

```Bash
npm run dev
# ou yarn dev
```

## 🧠 Meu Diário de Aprendizado e Desafios (Changelog Técnico)
Esta seção é o registro da minha evolução técnica com este projeto, documentando os conhecimentos adquiridos e os desafios técnicos superados a cada nova feature.

- `08/12/2025`:
   - **O que foi feito**:
    - FavoriteContext e função de toggleFavorite
    - Ajuste da UI para reagir conforme estado de favorito ou não

- `05/12/2025`:
  - **O que foi feito**:
    - Adicionando função de navageção ao clicar ENTER na busca

- `04/12/2025`:
  - **O que foi feito**:
      - Criei um `SearchContext` para gerenciar o estado global e envolvi a aplicação com o `SearchProvider`
      - Criei uma função para salvar o valor do input a cada mudança (`handleChange()`)
      - Passei o valor do input ao `fetchGames()` e garantindo que caso não houvesse nada digitado não seria usado o parâmetro de search

- `03/12/2025`:
  - **Desafios encontrados**:
    -  Tive dificuldades em como passaria as informações do input para a GameList, tendo em visto que esse processo causaria problemas de comunicação entre componentes distantes (prop-drilling), resolvi com a criação de contexto.
  - **O que foi feito**:
    - Ajuste na função removeEspanolDesc para retornar descrição normalmente caso não possua versão espanhol
    - Criação de um Layout para manter a estrutura global das páginas (Header e Footer)
    - Implementando layout no arquivo `routes.ts`
    - Movi a searchBar para dentro de um componente para separar suas responsabilidades do header
    - Ajustei a `fetchGames()` para receber o parâmetro de busca digitado no input

- `02/12/2025`: 
  - **O que foi feito**:
    - Separei as responsabilidades da API: métodos de `fetchGamesById(id)` e `fetchGames()` (pasta api), melhorando o tratamento de erros nas funções com try e catch
    - Criação de Hooks que utilizam os métodos da API e podem ser consumidos por componentes: useGameDetails(id) e useGameList (pasta hooks) inclui estado de erro e tratei na UI
    - Criação de função para remover a descrição em espanhol, deixando apenas em inglês (pasta utils)
