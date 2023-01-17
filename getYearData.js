const axios = require("axios");
const cheerio = require("cheerio");

const getYearData = async (ano, serie) => {
  let allData = [];
  const url = `https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-${serie}/${ano}`;
  const { data } = await axios.get(url);
  const $ = cheerio.load(data);

  $("table.m-b-20 tbody tr.expand-trigger").each((i, elem) => {
    let object = {
      time: $(elem).find("span.hidden-xs").text(),
      urlEscudo: $(elem).find("img.icon").attr("src"),
      colocacao: $(elem).find("b.m-l-10").text(),
      anoCampeonato: `${ano}`,
      serie: `${serie}`,
      pontos: $(elem).find("th").text(),
      jogos: $(elem).find("td:nth-child(3)").text(),
      vitorias: $(elem).find("td:nth-child(4)").text(),
      derrotas: $(elem).find("td:nth-child(5)").text(),
      empates: $(elem).find("td:nth-child(6)").text(),
      golsFeitos: $(elem).find("td:nth-child(7)").text(),
      golsSofridos: $(elem).find("td:nth-child(8)").text(),
      saldoDeGols: $(elem).find("td:nth-child(9)").text(),
      cartoesAmarelos: $(elem).find("td:nth-child(10)").text(),
      cartoesVermelhos: $(elem).find("td:nth-child(11)").text(),
      aproveitamento: $(elem).find("td:nth-child(12)").text(),
    };

    allData.push(object);
  });

  console.log(allData);
};

module.exports = getYearData;
