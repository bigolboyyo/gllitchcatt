import React from "react";
import "./Portfolio.css";

import { ImageList } from "@mui/material";
import { ImageListItem } from "@mui/material";
import squid from "../../images/squid32.gif";
import { Container, flexbox } from "@mui/system";
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
    <Container fluid="true">
      <ImageList
        cols={4}
        rowHeight={400}
        sx={{
          width: "100vmax",
          transform: "translateY(-20vmin)",
          zIndex: "50",
          position: "absolute",
          //   margin: 0,
          left: 0,
          justifyItems: "center",
          height: "100%",
        }}
        loading="lazy"
      >
        {itemData.map((item, i) => (
          <ImageListItem
            key={item.img + i}
            cols={item.cols || 1}
            sx={
              {
                //   left: 0,
                //   width: "25vmax",
              }
            }
          >
            <img src={item.img} alt={item.title} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

export default Portfolio;
