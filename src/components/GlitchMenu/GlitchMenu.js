import React from "react";
import Buttons from "./Buttons";
import Title from "../Title/Title";

import bkg from "../../images/tmp_bkg.jpg";

import { Container } from "@mui/material";

function GlitchMenu() {
  return (
    <Container
      fluid="true"
      disableGutters={true}
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "5vmax",
        backgroundImage: `URL(${bkg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Title />
      <Buttons />
    </Container>
  );
}

export default GlitchMenu;
