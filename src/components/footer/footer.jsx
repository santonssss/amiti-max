import "./footer.css";
import { AiFillInstagram } from "react-icons/ai";
import { SiTelegram } from "react-icons/si";
import { AiFillYoutube } from "react-icons/ai";
import { NavLink, Route, Routes } from "react-router-dom";
export default function Footer() {
  return (
    <footer>
      <div className="menus">
        <li>
          <NavLink to="youtube" className="footer-link">
            <AiFillInstagram id="sarvar" />
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-link">
            <SiTelegram id="sarvar" />
          </NavLink>
        </li>
        <li>
          <NavLink className="footer-link">
            <AiFillYoutube id="sarvar" />
          </NavLink>
        </li>
      </div>
    </footer>
  );
}
