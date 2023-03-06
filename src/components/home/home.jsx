import "./home.css";
import { NavLink, Route, Routes } from "react-router-dom";
import ametHomeLeft from "../../img/amet-home-right.png";
import amet300px from "../../img/amet-300px.png";
import backfon from "../../img/back-fon.jpeg";
export default function Home() {
  return (
    <div className="Home">
      <div className="container2">
        <div className="left">
          <div className="quota">
            <h2 className="quota-h">
              <span className="span-word">Жизнь</span> - это стиль, <br />
              Мой стиль это <span className="span-word-swag">S W A G</span>
            </h2>
          </div>
        </div>
        <div className="right">
          <img className="amethome" src={ametHomeLeft} alt="" />
          <img src={amet300px} alt="" className="amet-disp" />
        </div>
      </div>
    </div>
  );
}
