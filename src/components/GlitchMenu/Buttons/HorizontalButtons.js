import { Button } from "@mui/material";

import React from "react";

function HorizontalButtons({ activeTab, setActiveTab }) {
  const handleClick = (e) => {
    setActiveTab(e.target.textContent);
  };

  return (
    <div className="button-bar">
      <>
        <Button onClick={(e) => handleClick(e)}>
          <span className="glitch" data-text="GALLERY">
            GALLERY
          </span>
        </Button>
        <Button onClick={(e) => handleClick(e)}>
          <span className="glitch" data-text="ABOUT">
            ABOUT
          </span>
        </Button>
        <Button onClick={(e) => handleClick(e)}>
          <span className="glitch" data-text="CONTACT">
            CONTACT
          </span>
        </Button>
      </>
    </div>
  );
}
export default HorizontalButtons;
