import React from "react";
import mega from "../images/mega.png";
import lotofacil from "../images/lotofacil.png";
import quina from "../images/quina.png";
import lotomania from "../images/lotomania.png";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";

type Props = {};

const Home = (props: Props) => {
  return (
    <div
      style={{
        minHeight: "85vh",
        textAlign: "center",
      }}
    >
      <h1 className="py-10">Sorte de Hoje</h1>
      <Grid container style={{display:'flex', justifyContent: 'center', alignItems: 'center'}} spacing={6}>
        <Grid item xs={11} md={5}>
          <Link to="/mega">
            <img src={mega} alt="mega"/>
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/quina">
            <img src={quina} alt="quina"/>
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/lotofacil">
            <img src={lotofacil} alt="lotofacil" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5}>
          <Link to="/lotomania">
            <img src={lotomania} alt="lotomania"/>
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
