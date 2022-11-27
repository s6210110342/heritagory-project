import React, { useState } from 'react'
import "./header.css"

const Header = () => {
/* =============== Toggle Menu ===============*/
    const[Toggle, showMenu] = useState(false);

  return (
    <header className='header'>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                Heritagory
            </a>

            <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                <ul className="nav__list grid">
                    <li className="nav__item ">
                        <a href="#home" className="nav__link active-link">
                            <i className="uil uil-estate nav__icon"></i> หน้าแรก
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                            <i className="uil uil-user nav__icon"></i> เกี่ยวกับเรา
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            <i className="uil uil-books nav__icon"></i> ไทย
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            <i className="uil uil-book-open nav__icon"></i> อิสลาม
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            <i className="uil uil-message nav__icon"></i> ติดต่อเรา
                        </a>
                    </li>
                </ul>
                <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}>
                    <p className='text-sm text-gray-500 not-italic -mt-2y'>กดปิดที่นี้</p>
                </i>
            </div>

            <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                <i class="uil uil-apps"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header