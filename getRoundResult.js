const axios = require("axios");
const cheerio = require("cheerio");

const getRoundResult = async (ano, rodada, serie) => {
  let roundResults = [];
  const url = `https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-${serie}/${ano}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  $(`div[data-slide-index=${rodada - 1}] ul.list-unstyled li`).each((i) => {
    i++;

    let stringJogo = $(`div[data-slide-index=${rodada - 1}]`)
      .find(`li:nth-child(${i}) span:nth-child(1)`)
      .text();

    let object = {
      ano: `${ano}`,
      serie: `${serie}`,
      rodada: $(`div[data-slide-index=${rodada - 1}]`)
        .find("h3")
        .text(),
      jogo: stringJogo.match(/Jogo: [0-9]+/)[0],
      time1: $(`div[data-slide-index=${rodada - 1}]`)
        .find(`li:nth-child(${i}) div.pull-left span`)
        .text(),
      time2: $(`div[data-slide-index=${rodada - 1}]`)
        .find(`li:nth-child(${i}) div.pull-right span`)
        .text(),
      placar: $(`div[data-slide-index=${rodada - 1}] li:nth-child(${i})`)
        .find("strong span")
        .text(),
      golsTime1: "",
      golsTime2: "",
      resultado: "",
      vencedor: "",
    };

    object.resultado = `${object.time1} ${object.placar} ${object.time2}`;
    object.golsTime1 = object.placar[0];
    object.golsTime2 = object.placar[4];

    if (object.golsTime1 > object.golsTime2) {
      object.vencedor = object.time1;
    } else if (object.golsTime2 > object.golsTime1) {
      object.vencedor = object.time2;
    } else {
      object.vencedor = "Empate";
    }

    roundResults.push(object);
  });

  console.log(roundResults);
  return roundResults;
};

module.exports = getRoundResult;
