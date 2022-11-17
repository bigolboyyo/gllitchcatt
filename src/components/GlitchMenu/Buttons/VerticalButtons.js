import React from "react";
import { Button } from "@mui/material";

function VerticalButtons({ buttonSwitch, setButtonSwitch }) {
  return (
    <>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="PORTFOLIO">
          PORTFOLIO
        </span>
      </Button>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="SHOP">
          SHOP
        </span>
      </Button>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="ABOUT">
          ABOUT
        </span>
      </Button>
    </>
  );
}

export default VerticalButtons;
