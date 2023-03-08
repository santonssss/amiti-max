import "./fans.css";
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
export default function Fans() {
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
  return (
    <div className="Fans">
      <div className="container">
        <div className="cardss">
          {itemData.map((item) => {
            return (
              <div className="card">
                <img src={item.img} alt="" className="amets" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
