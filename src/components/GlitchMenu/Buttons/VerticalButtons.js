import React from "react";
import { Button } from "@mui/material";

function VerticalButtons({ buttonSwitch, setButtonSwitch }) {
  return (
    <>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="GALLERY">
          GALLERY
        </span>
      </Button>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="ABOUT">
          ABOUT
        </span>
      </Button>
      <Button onClick={() => setButtonSwitch(!buttonSwitch)}>
        <span className="glitch" data-text="CONTACT">
          CONTACT
        </span>
      </Button>
    </>
  );
}

export default VerticalButtons;
