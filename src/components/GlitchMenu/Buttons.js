import React from "react";
import { Button } from "@mui/material";

function Buttons() {
  return (
    <>
      <Button>
        <span className="glitch" data-text="PORTFOLIO">
          PORTFOLIO
        </span>
      </Button>
      <Button>
        <span className="glitch" data-text="SHOP">
          SHOP
        </span>
      </Button>
      <Button>
        <span className="glitch" data-text="ABOUT">
          ABOUT
        </span>
      </Button>
    </>
  );
}

export default Buttons;
