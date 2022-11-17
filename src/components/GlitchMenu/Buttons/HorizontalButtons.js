import { Button } from "@mui/material";

import React from "react";

function HorizontalButtons() {
  return (
    <div className="button-bar">
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
    </div>
  );
}
export default HorizontalButtons;
