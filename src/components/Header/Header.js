import React from "react";
import "./Header.scss";

import Container from "@mui/material/Container";

function Header() {
  return (
    <Container fluid="true" disableGutters={true} maxWidth={false}>
      <h1 id="title">
        <span className="glitch" id="main-glitch" data-text="GLLITCHCATT">
          GLLITCHCATT
        </span>
      </h1>
    </Container>
  );
}

export default Header;
