import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-gray-200 text-center lg:text-left" style={{ bottom: '0', right: '0', left: '0'}}>
      <div
        className="text-gray-700 text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2023 Copyright: Sorte de Hoje
      </div>
    </footer>
  );
};

export default Footer;
