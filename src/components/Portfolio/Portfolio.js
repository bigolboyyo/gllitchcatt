import React from "react";
import "./Portfolio.css";

import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
// import squid from "../../images/squid32.gif";
// import { Container } from "@mui/system";
import bkg from "../../images/tmp_bkg.jpg";
// import { jsx, css } from "@emotion/react";

const itemData = [
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: bkg,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
];

function Portfolio() {
  return (
    <ImageList
      cols={2}
      rowHeight="auto"
      //   gap={100}
      sx={{
        width: "-webkit-fill-available",
        zIndex: "-1",
        position: "absolute",
        top: "12vmax",
        left: 0,
        justifyItems: "center",
        height: "-webkit-fill-available",
        // border: "solid green",
        padding: "5vmin 10vmin 2.5vmin 10vmin",
      }}
      loading="lazy"
    >
      {itemData.map((item, i) => (
        <ImageListItem
          key={item.img + i}
          cols={item.cols || 1}
          sx={{
            // border: "dotted red",
            width: "clamp(15vw, 30vw, 35vw)",
            // paddingTop: "3vmax",
            // margin: 0,
            paddingBottom: "15vmax",
          }}
        >
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

export default Portfolio;
