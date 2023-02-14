import React from "react";
import { Link } from "react-router-dom";

//css
import styles from "./Home.module.css";

//images
import duplasena from "../images/duplasena.png";
import lotofacil from "../images/lotofacil.png";
import lotomania from "../images/lotomania.png";
import mega from "../images/mega.png";
import quina from "../images/quina.png";
import timemania from "../images/timemania.png";

//components from Matrial UI
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";

type Props = {};

const Home = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-500"
    >
      <div>
        <h1 className="py-10 font-semibold text-xl text-center md:text-5xl">
          ESCOLHA SEU JOGO:
        </h1>
      </div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        spacing={6}
      >
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/mega">
            <img src={mega} alt="mega" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/lotofacil">
            <img src={lotofacil} alt="lotofacil" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/quina">
            <img src={quina} alt="quina" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/lotomania">
            <img src={lotomania} alt="lotomania" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/timemania">
            <img src={timemania} alt="timemania" />
          </Link>
        </Grid>
        <Grid item xs={11} md={5} className={styles.animation}>
          <Link to="/duplasena">
            <img src={duplasena} alt="duplasena" />
          </Link>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
