import React from "react";
import "../../Scss/_header.scss";

export const HeaderComponent = ({ title = "Kikoya", ...props }) => {
  return (
    <header className="App-header">
      <h1>{title}</h1>
    </header>
  );
};
