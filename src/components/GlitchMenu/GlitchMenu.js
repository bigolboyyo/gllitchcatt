import React from "react";
import Buttons from "./Buttons";

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
        paddingBottom: "17.5vh",
      }}
    >
      <Buttons />
    </Container>
  );
}

export default GlitchMenu;
