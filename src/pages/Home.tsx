import React from "react";
import { Link } from "react-router-dom";

//images
import duplasena from "../images/duplasena.png";
import federal from "../images/federal.png";
import loteca from "../images/loteca.png";
import lotofacil from "../images/lotofacil.png";
import lotogol from "../images/lotogol.png";
import lotomania from "../images/lotomania.png";
import mega from "../images/mega.png";
import quina from "../images/quina.png";
import timemania from "../images/timemania.png";

//components from Matrial UI
import Grid from "@mui/material/Grid";

type Props = {};

const Home = (props: Props) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2 className="py-10">Para onde vai sua sorte de hoje?</h2>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={6}
      >
        <Grid item xs={11} md={5}>
          <Link to="/mega">
            <img src={mega} alt="mega" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/lotofacil">
            <img src={lotofacil} alt="lotofacil" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/quina">
            <img src={quina} alt="quina" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/lotomania">
            <img src={lotomania} alt="lotomania" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/timemania">
            <img src={timemania} alt="timemania" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/duplasena">
            <img src={duplasena} alt="duplasena" />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
