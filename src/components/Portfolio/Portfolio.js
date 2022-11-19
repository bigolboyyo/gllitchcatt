import React from "react";
import "./Portfolio.css";

import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import squid from "../../images/squid32.gif";
// import { Container } from "@mui/system";
// import bkg from "../../images/tmp_bkg.jpg";
// import { jsx, css } from "@emotion/react";

const itemData = [
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
  {
    img: squid,
    title: "Fun title",
    author: "Cool author",
    cols: 1,
  },
];

function Portfolio() {
  return (
    // <Container
    //   fluid="true"
    //   sx={{
    //     // width: "100vmax",
    //     border: "solid red",
    //   }}
    // >
    <ImageList
      cols={2}
      rowHeight="auto"
      gap={100}
      sx={{
        width: "-webkit-fill-available",
        zIndex: "-1",
        position: "absolute",
        top: 0,
        left: 0,
        justifyItems: "center",
        height: "-webkit-fill-available",
        border: "solid green",
        padding: "20vmin 10vmin 10vmin 10vmin",
        // gap: "100px",
      }}
      loading="lazy"
    >
      {itemData.map((item, i) => (
        <ImageListItem
          key={item.img + i}
          cols={item.cols || 1}
          sx={{
            //   left: 0,
            border: "solid red",
            // paddingTop: "5vmin",
            //   width: "50vmax",
            // gap: 100,
          }}
        >
          <img src={item.img} alt={item.title} />
        </ImageListItem>
      ))}
    </ImageList>
    // </Container>
  );
}

export default Portfolio;
