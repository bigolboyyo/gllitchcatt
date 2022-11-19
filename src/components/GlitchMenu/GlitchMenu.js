import React, { useEffect } from "react";
import { useState } from "react";
import Title from "../Title/Title";
import "./GlitchMenu.css";
import VerticalButtons from "./Buttons/VerticalButtons";
import HorizontalButtons from "./Buttons/HorizontalButtons";

import bkg from "../../images/tmp_bkg.jpg";
import Gallery from "../Gallery/Gallery";
import About from "../About/About";
import Contact from "../Contact/Contact";

import { Container } from "@mui/material";

function GlitchMenu() {
  const [buttonSwitch, setButtonSwitch] = useState(false);
  const [activeTab, setActiveTab] = useState(false);

  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const handleTab = () => {
    if (!activeTab) {
      return (
        <VerticalButtons activeTab={activeTab} setActiveTab={setActiveTab} />
      );
    }
    if (activeTab === "GALLERY") {
      return (
        <>
          <Gallery />
          <HorizontalButtons
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </>
      );
    }
    if (activeTab === "ABOUT") {
      return (
        <>
          <HorizontalButtons
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <About />
        </>
      );
    }
    if (activeTab === "CONTACT") {
      return (
        <>
          <HorizontalButtons
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          <Contact />
        </>
      );
    }
  };

  useEffect(() => {
    handleTab();
  }, [activeTab]);

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
          justifyContent: activeTab ? "none" : "space-evenly",
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
        {handleTab()}
      </Container>
    </>
  );
}

export default GlitchMenu;
