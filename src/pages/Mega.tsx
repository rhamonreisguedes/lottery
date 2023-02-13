import mega from "../images/mega.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import {useNavigate } from "react-router-dom";

type Props = {};

const Mega = (props: Props) => {
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(false);
  const [games, setGames] = useState<any>([]);
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
    return Math.ceil(Math.random() * 60);
  };

  const play = () => {
    let jogos: any = [];
    for (let i = 0; i < qty; i++) {
      const game = eachGame();
      jogos.push(game);
    }
    console.log(`Os jogos são: ${jogos}`);
    setGames(jogos);
    setShow(true);
  };

  const eachGame = () => {
    let jogo: number[] = [];
    while (jogo.length < 6) {
      const ranNum: number = randomNumber();
      if (jogo.indexOf(ranNum) === -1) {
        jogo.push(ranNum);
      }
    }
    const sorted_list = jogo.sort((a, b) => a - b);
    return sorted_list;
  };

  const resetGames = () => {
    setQty(1);
    setShow(false);
    setGames([]);
  };

  const goToMenu = () => {
    navigate("/")
  }

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className= 'text-base md: text-5xl'
    >
      <Grid item xs={12} md={7} className="pb-3 md:py-3">
        <img src={mega} alt="megasena-logo" />
      </Grid>
      <p className="py-3">Quantos jogos deseja realizar?</p>
      <div className="my-3">
        <Button onClick={minus} variant="outlined">
          -
        </Button>
        <span className="p-5">{qty}</span>
        <Button onClick={plus} variant="outlined">
          +
        </Button>
      </div>
      <Button variant="contained" onClick={play}>
        criar jogos
      </Button>
      {show &&
        games.map((games: any, index: any) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "white" : "#0F9D58",
              color: index % 2 === 0 ? "black" : "black",
            }}
            className="mt-2 p-1"
          >
            Jogo {index + 1}:
            {games.map((numbers: any, i: any) => (
              <span
                style={{
                  border:
                    index % 2 === 0 ? "1px solid gray" : "1px solid black",
                  borderRadius: "100%",
                  color: index % 2 === 0 ? "black" : "black",
                }}
                key={index}
                className="m-1 p-1 font-bold"
              >
                {numbers < 10 ? "0" + numbers : numbers}
              </span>
            ))}
          </div>
        ))}
      {show && (
        <div className="mt-5 flex justify-center items-center">
          <Button onClick={goToMenu} variant="contained">
            Voltar para Menu
          </Button>
        </div>
      )}
    </Grid>
  );
};

export default Mega;
