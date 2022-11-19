import { Button } from "@mui/material";

import React from "react";

function HorizontalButtons() {
  return (
    <div className="button-bar">
      <>
        <Button>
          <span className="glitch" data-text="GALLERY">
            GALLERY
          </span>
        </Button>
        <Button>
          <span className="glitch" data-text="ABOUT">
            ABOUT
          </span>
        </Button>
        <Button>
          <span className="glitch" data-text="CONTACT">
            CONTACT
          </span>
        </Button>
      </>
    </div>
  );
}
export default HorizontalButtons;
