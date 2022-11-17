import React from "react";

import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import bkg from "../../images/tmp_bkg.jpg";
// import { jsx, css } from "@emotion/react";

const itemData = [
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
];

function Portfolio() {
  return (
    <ImageList
      rowHeight="auto"
      cols={1}
      gap={100}
      sx={{
        width: "75vw",
      }}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Portfolio;
