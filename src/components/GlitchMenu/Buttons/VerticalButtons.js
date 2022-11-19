import React from "react";
import { Button } from "@mui/material";

function VerticalButtons({ activeTab, setActiveTab }) {
  return (
    <>
      <Button onClick={(e) => setActiveTab(e.target.textContent)}>
        <span className="glitch" data-text="GALLERY">
          GALLERY
        </span>
      </Button>
      <Button onClick={(e) => setActiveTab(e.target.textContent)}>
        <span className="glitch" data-text="ABOUT">
          ABOUT
        </span>
      </Button>
      <Button onClick={(e) => setActiveTab(e.target.textContent)}>
        <span className="glitch" data-text="CONTACT">
          CONTACT
        </span>
      </Button>
    </>
  );
}

export default VerticalButtons;
