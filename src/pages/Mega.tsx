import React, { useEffect } from "react";
import mega from "../images/mega.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";

type Props = {};

const Mega = (props: Props) => {
  const [qty, setQty] = useState(1);
  const [show, setShow] = useState(false);
  const [games, setGames] = useState<any>([]);

  const minus = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const plus = () => {
    setQty(qty + 1);
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

  return (
    <Grid
      container
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Grid item xs={12} md={7} className="pb-3 md:py-3">
        <img src={mega} alt="megasena-logo" />
      </Grid>
      <p className="text-xl py-3 md:text-4xl">Quantos jogos deseja realizar?</p>
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
        Jogar!
      </Button>
      {show &&
        games.map((games: any, index: any) => (
          <div key={index}>
            {games.map((numbers: any, index: any) => (
              <span
                style={{ border: "1px solid gray", borderRadius: "100%" }}
                key={index}
              >
                {numbers}
              </span>
            ))}
          </div>
        ))}
      {show && (
        <div>
          <Button variant="contained">Novos Jogos</Button>
          <Button variant="contained">Voltar para Menu</Button>
        </div>
      )}
    </Grid>
  );
};

export default Mega;
