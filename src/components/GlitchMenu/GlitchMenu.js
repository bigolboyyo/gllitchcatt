import React from "react";
import { useState } from "react";
import Title from "../Title/Title";
import "./GlitchMenu.css";
import VerticalButtons from "./Buttons/VerticalButtons";
import HorizontalButtons from "./Buttons/HorizontalButtons";

import Portfolio from "../Portfolio/Portfolio";

import bkg from "../../images/tmp_bkg.jpg";

import { Container } from "@mui/material";

function GlitchMenu() {
  const [buttonSwitch, setButtonSwitch] = useState(false);

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
        justifyContent: buttonSwitch ? "none" : "space-evenly",
        paddingBottom: "3vmax",
        backgroundImage: `URL(${bkg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <Title />
      {!buttonSwitch ? (
        <VerticalButtons
          buttonSwitch={buttonSwitch}
          setButtonSwitch={setButtonSwitch}
        />
      ) : (
        <>
          <HorizontalButtons />
          <Portfolio />
        </>
      )}
    </Container>
  );
}

export default GlitchMenu;
