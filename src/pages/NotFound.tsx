import React from "react";
import trevo from "../images/trevo.png";
import { Grid } from "@mui/material";

type Props = {};

const NotFound = (props: Props) => {
  return (
    <Grid container>
      <Grid item xs={10} md={6} style={{ margin: "0 auto", padding: "1rem" }}>
        <img src={trevo} alt="trevo de quatro folhas" />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            fontFamily: "monospace",
            fontWeight: 700,
            color: "inherit",
            textDecoration: "none",
            fontSize: "1.5rem",
          }}
        >
          Página não encontrada.
        </div>
        <div style={{ paddingTop: "0.5rem", fontSize: "1.5rem" }}>
          Tente algum dos jogos disponíveis e mude de vida em um clique!
        </div>
      </Grid>
    </Grid>
  );
};

export default NotFound;
