import "./fans.css";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import amet1 from "../../img/amet1.jpg";
import amet2 from "../../img/amet2.jpg";
import amet3 from "../../img/amet3.jpg";
import amet4 from "../../img/amet4.jpg";
import amet5 from "../../img/amet5.jpg";
import amet6 from "../../img/amet6.jpg";
import amet7 from "../../img/amet7.jpg";
import amet8 from "../../img/amet8.jpg";
import amet9 from "../../img/amet9.jpg";
import amet10 from "../../img/amet10.jpg";
import amet11 from "../../img/amet11.jpg";
import amet12 from "../../img/amet12.jpg";
import * as React from "react";
export default function Fans() {
  return (
    <div className="Fans">
      <div className="container7">
        <Box className="image-list" sx={{ overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {itemData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=248&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
                <ImageListItemBar position="below" title={item.author} />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
      </div>
    </div>
  );
}
const itemData = [
  {
    img: `${amet1}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet2}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet3}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet4}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet5}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet6}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet7}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet8}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet9}`,
    title: "Amiti-Maauthor: ",
    author: "AMITI-MAX",
  },
  {
    img: `${amet10}`,
    title: "Amiti-Max",
    author: "AMITI-MAX",
  },
  {
    img: `${amet11}`,
    title: "Candle",
    author: "AMITI-MAX",
  },
  {
    img: `${amet12}`,
    title: "Coffee table",
    author: "AMITI-MAX",
  },
];
