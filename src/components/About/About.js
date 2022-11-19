import React from "react";
import { Container } from "@mui/system";
import "./About.css";

function About() {
  return (
    <Container
      sx={{
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        border: "solid red",
      }}
    >
      ABOUT ME
    </Container>
  );
}

export default About;
