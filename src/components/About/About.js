import React from "react";
import { Container } from "@mui/system";
import "./About.css";

function About() {
  return (
    <Container
      maxWidth="false"
      disableGutters="true"
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "-webkit-fill-available",
        position: "absolute",
        top: "25vmin",
        padding: "2.5vmin",
        border: "solid red",
      }}
    >
      ABOUT ME
    </Container>
  );
}

export default About;
