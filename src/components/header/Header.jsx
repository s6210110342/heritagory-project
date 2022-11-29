import React, { useState } from "react";
import "./header.css";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Thai from "../thai/Thai";
import Islam from "../islam/Islam";

const Header = () => {
  /* =============== Toggle Menu ===============*/
  const [Toggle, showMenu] = useState(false);

  return (
    <header>
      <div className='header'>
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          Heritagory
        </Link>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item ">
              <Link to="/" className="nav__link active-link">
                <i className="uil uil-estate nav__icon"></i> หน้าแรก
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#about" className="nav__link">
                <i className="uil uil-user nav__icon"></i> เกี่ยวกับเรา
              </Link>
            </li>
            <li className="nav__item">
              <Link to="thai" className="nav__link">
                <i className="uil uil-books nav__icon"></i> ไทย
              </Link>
            </li>
            <li className="nav__item">
              <Link to="islam" className="nav__link">
                <i className="uil uil-book-open nav__icon"></i> อิสลาม
              </Link>
            </li>
            <li className="nav__item">
              <Link to="#contact" className="nav__link">
                <i className="uil uil-message nav__icon"></i> ติดต่อเรา
              </Link>
            </li>
          </ul>
          <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}>
            <p className="text-sm text-gray-500 not-italic">
              กดปิดที่นี้
            </p>
          </i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="#about" element={<Home />}></Route>
        <Route path="thai" element={<Thai />}></Route>
        <Route path="islam" element={<Islam />}></Route>
        <Route path="#contact" element={<Home />}></Route>
      </Routes>
    </header>
  );
};

export default Header;
