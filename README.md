# WebScraping Brasileirão CBF
## Obtenha dados sobre o Brasileirão direto do site da CBF em {objeto} para usar nos seus projetos.

<img src="https://user-images.githubusercontent.com/109367845/212968375-2cd92c70-52a6-4fcc-b16b-c646865c3e83.png"/>

Para usar você precisa do **NodeJs** e do **NPM** instalados na sua máquina.

- Primeiro clone este repositório.

- No projeto que você vai usar abra seu terminal e execute: <br><br>
Antes de executar o comando abaixo se certifique de que seu terminal está no diretório correto, terminado em:<br>"\WebScraping-Brasileirao-CBF".<br><br>
Caso não esteja no diretório correto use o seguinte comando: ```cd WebScraping-Brasileirao-CBF```<br><br>
   Após se certificar execute ```npm install``` para instalar as dependências (Axios e Cheerio).

- Importe as funções para seu arquivo .js de destino: <br>
    ```const getYearData = require("./getYearData");``` <br>
    ```const getRoundResult = require("./getRoundResult");```

E ta pronto pra usar!<br>
- Funções: <br><br>
```getYearData(ano, serie)``` Recebe como parâmetro o Ano do campeonato e a Série ("a" ou "b"), retorna um Array de objetos com todos os dados de acordo com a tabela de classificação... dados: time, url da imagem do escudo, ano do campeonato, série, pontos, jogos, vitórias derrotas e empates, gols feitos, gols sofridos e mais...<br><br>
```getRoundResult(ano, rodada, serie)``` Recebe como parâmetro o Ano do campeonato, a rodada que deseja e a Série do campeonato ("a" ou "b"), retorna um Array de objetos com os resultados da rodada... dados: ano do campeonato, série, rodada, número do jogo, sigla dos times, placar, gols de cada time, resultado e vencedor de cada partida.
