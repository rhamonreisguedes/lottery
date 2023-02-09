import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <div
      style={{
        minHeight: "85vh",
        textAlign: 'center'
      }}
    >
      <h1>Home</h1>
      <div style={{display: 'flex', justifyContent: 'space-around'}}>
        <a href="/mega">Megasena</a>
        <a href="/quina">Quina</a>
        <a href="/lotofacil">Lotofacil</a>
      </div>
    </div>
  );
};

export default Home;
