import lotofacil from "../images/lotofacil.png";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

type Props = {};

const Lotofacil = (props: Props) => {
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
    if (qty < 99) {
      setQty(qty + 1);
    }
  };

  const randomNumber = (): number => {
    return Math.ceil(Math.random() * 25);
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
    while (jogo.length < 15) {
      const ranNum: number = randomNumber();
      if (jogo.indexOf(ranNum) === -1) {
        jogo.push(ranNum);
      }
    }
    const sorted_list = jogo.sort((a, b) => a - b);
    return sorted_list;
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
      <Grid item xs={12} md={7} className="pb-3 md:py-3">
        <img src={lotofacil} alt="megasena-logo" />
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
          className="text-base md:text-4xl"
        >
          +
        </Button>
      </div>
      <Button variant="contained" onClick={play}>
        criar jogos
      </Button>
      {show &&
        games.map((game: any, index: any) => (
          <div
            key={index}
            style={{
              backgroundColor: index % 2 === 0 ? "#aa98b5" : "white",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="mt-2 p-1 md:mt-4 md:p-6"
          >
            <div>Jogo {index + 1}:</div>
            {game.map((numbers: any, i: any) => (
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "100%",
                  color: "black",
                }}
                key={index}
                className="m-1 p-1 font-bold md:m-2 md:p-2"
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {i < 8 ? (
                    <div>{numbers < 10 ? "0" + numbers : numbers}</div>
                  ) : (
                    <div>{numbers < 10 ? "0" + numbers : numbers}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
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

export default Lotofacil;
