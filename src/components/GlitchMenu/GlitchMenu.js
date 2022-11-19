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

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // const createStars = () => {
  //   const STAR_COUNT = 400;
  //   let result = "";
  //   for (let i = 0; i < STAR_COUNT; i++) {
  //     result += `${randomNumber(-50, 50)}vw ${randomNumber(
  //       -50,
  //       50
  //     )}vh ${randomNumber(0, 1)}px ${randomNumber(0, 1)}px #fff,`;
  //   }
  //   // console.log(result);
  //   return result;
  // };

  // createStars();

  return (
    <>
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
          // backgroundImage: `URL(${bkg})`,
          backgroundColor: "#000",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          position: "relative",
          zIndex: 100,
          // width: "100vw",
        }}
      >
        <div className="stars"></div>
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
    </>
  );
}

export default GlitchMenu;
