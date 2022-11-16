import React from "react";
import { Button } from "@mui/material";

function Buttons() {
  const buttonStyle = {
    background: "none",
  };

  return (
    <>
      <Button sx={buttonStyle}>
        {" "}
        <span className="glitch" data-text="PORTFOLIO">
          PORTFOLIO
        </span>
      </Button>
      <Button sx={buttonStyle}>
        <span className="glitch" data-text="SHOP">
          SHOP
        </span>
      </Button>
      <Button sx={buttonStyle}>
        <span className="glitch" data-text="ABOUT">
          ABOUT
        </span>
      </Button>
    </>
  );
}

export default Buttons;
