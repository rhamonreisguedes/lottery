import timemania from "../images/timemania.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const all_teams = [
  "ABC/RN",
  "América/MG",
  "América/RJ",
  "América/RN",
  "Americano/RJ",
  "Atlético/GO",
  "Atlético/MG",
  "Atlético/PR",
  "Avaí/SC",
  "Bahia/Ba",
  "Bangu/RJ",
  "Barueiri/SP",
  "Botafogo/PB",
  "Botafogo/Rj",
  "Braganino/SP",
  "Brasiliense/DF",
  "Ceará/CE",
  "Corinhtians/SP",
  "Coritiba/PR",
  "CRB/AL",
  "Criciúma/SC",
  "Cruzeiro/MG",
  "CS/AVAL",
  "Desportiva/ES",
  "Figueirense/SC",
  "Flamengo/RJ",
  "Fluminense/RJ",
  "Fortaleza/CE",
  "Gama/DF",
  "Goiás/GO",
  "Grêmio/RS",
  "Guarani/SP",
  "Inter Limeira/SP",
  "Internacional/RS",
  "Ipatinga/MG",
  "Ituano/SP",
  "Ji-Paraná/RO",
  "Joinville/SC",
  "Juventude/RS",
  "Juventus/SP",
  "Londrina/PR",
  "Marília/SP",
  "Mixto/MT",
  "Moto Clube/MA",
  "Nacional/AM",
  "Náutico/PE",
  "Olaria/RJ",
  "Operário/MS",
  "Palmas/TO",
  "Palmeiras/SP",
  "Paraná/PR",
  "Paulista/SP",
  "Paysandú/PA",
  "Ponte Preta/SP",
  "Port Desport/SP",
  "Remo/PA",
  "Rio Branco/AC",
  "Rio Branco/ES",
  "River/PI",
  "Roraima/RR",
  "Samp Côrrea/MA",
  "Santa Cruz/PE",
  "Santo André/SP",
  "Santos/SP",
  "São Caetano/SP",
  "São Paulo/SP",
  "S Raimundo/AM",
  "Sergipe/SE",
  "Sport/PE",
  "Treze/PB",
  "Tuno Luso/PA",
  "Uberlândia/MG",
  "U Barbarense/SP",
  "União S João/SP",
  "Vasco/RJ",
  "Vila Nova/GO",
  "Villa Nova/MG",
  "Vitória/BA",
  "XV Piracicaba/SP",
  "Ypiranga/AP",
];

const Timemania = (props: Props) => {
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(false);
  const [games, setGames] = useState<any>([]);
  const [teams, setTeams] = useState<any>([]);
  const navigate = useNavigate();

  const minus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const plus = () => {
    if (qty < 100) {
      setQty(qty + 1);
    }
  };

  const randomNumber = (): number => {
    return Math.ceil(Math.random() * 80);
  };

  const play = () => {
    let jogos: any = [];
    let times: any = [];
    for (let i = 0; i < qty; i++) {
      const game = eachGame();
      const time = handleTeam();
      jogos.push(game);
      times.push(time);
    }
    setGames(jogos);
    setShow(true);
    setTeams(times);
  };

  const eachGame = () => {
    let jogo: number[] = [];
    while (jogo.length < 10) {
      const ranNum: number = randomNumber();
      if (jogo.indexOf(ranNum) === -1) {
        jogo.push(ranNum);
      }
    }
    const sorted_list = jogo.sort((a, b) => a - b);
    return sorted_list;
  };

  const handleTeam = () => {
    const choosed_number = Math.floor(Math.random() * all_teams.length);
    return all_teams[choosed_number];
  };

  const goToMenu = () => {
    navigate("/");
  };

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="text-base md:text-4xl"
    >
      <Grid item xs={12} md={8} className="pb-3 md:py-3">
        <img src={timemania} alt="megasena-logo" />
      </Grid>
      <p className="py-3">Quantos jogos deseja realizar?</p>
      <div className="my-3">
        <Button
          onClick={minus}
          variant="outlined"
          className="text-base md:text-4xl"
        >
          -
        </Button>
        <span className="p-5">{qty}</span>
        <Button
          onClick={plus}
          variant="outlined"
          className="text-base md:text-xl"
        >
          +
        </Button>
      </div>
      <Button variant="contained" onClick={play} style={{marginBottom: '3rem'}}>
        criar jogos
      </Button>
      {show &&
        games.map((games: any, index: any) => (
          <Grid
            container
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid
              item
              xs={12}
              md={8}
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffce44" : "white",
                color: "black",
                display: "flex",
              }}
              className="mt-2 p-1 md:mt-4 md:p-6"
            >
              <div className="m-1 font-bold md:m-2">Jogo {index + 1}:</div>
              {games.map((numbers: any, i: any) => (
                <span
                  style={{
                    border: "1px solid black",
                    borderRadius: "100%",
                    color: "black",
                  }}
                  key={index}
                  className="m-1 p-1 font-bold md:m-2 md:p-2"
                >
                  {numbers < 10 ? "0" + numbers : numbers}
                </span>
              ))}
            </Grid>
          </Grid>
        ))}
      {teams.map((item: any, index: any) => (
        <div key={index}>{item}</div>
      ))}
      {show && (
        <div className="my-3 flex justify-center items-center">
          <Button onClick={goToMenu} variant="contained">
            Voltar para Menu
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Timemania;
