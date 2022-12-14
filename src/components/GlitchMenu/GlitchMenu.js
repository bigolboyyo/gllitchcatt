import React from "react";
import Buttons from "./Buttons";

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
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: "20vh",
        backgroundImage: `URL(${bkg})`,
        // backgroundSize: "cover",
        backgroundRepeat: "round",
      }}
    >
      <Buttons />
    </Container>
  );
}

export default GlitchMenu;
