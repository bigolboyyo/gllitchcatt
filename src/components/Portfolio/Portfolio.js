import React from "react";

import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import squid from "../../images/squid32.gif";
// import bkg from "../../images/tmp_bkg.jpg";
// import { jsx, css } from "@emotion/react";

const itemData = [
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 2,
  },
  {
    img: squid,
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
      {itemData.map((item, i) => (
        <ImageListItem key={item.img + i} cols={item.cols || 1}>
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Portfolio;
