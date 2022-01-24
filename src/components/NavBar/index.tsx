import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "./style.scss";

const menu = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/works",
    display: "Works",
  },
  {
    path: "/teams",
    display: "Teams",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const contact = {
  adress: "서울특별시 강남구 도산대로 8길 17-10 이리스빌딩 1F",
  tell: "Tel 02. 543. 4983 / Fax 02. 6280. 4079",
  email: "loocreative@playlooc.com",
};

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { pathname } = useLocation();
  const { t, i18n } = useTranslation();
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    console.log(lang);
  };

  return (
    <div className="menuAreaWrapper">
      <nav role="navigation">
        <div id="menuToggle">
          <div className="changeLangWrapper">
            <div
              onClick={() => handleLanguage("ko")}
              className={`changeLang ${i18n.language === "ko" ? "select" : ""}`}
            >
              KR
            </div>
            <div
              onClick={() => handleLanguage("en")}
              className={`changeLang en ${
                i18n.language === "en" ? "select" : ""
              }`}
            >
              EN
            </div>
          </div>
          <div
            className={`${openMenu ? "btn-toggle open" : "btn-toggle"}`}
            onClick={handleToggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul id="menu" className={`${openMenu ? "open" : ""}`}>
            <div className="changeLangWrapperMenu">
              <div
                onClick={() => handleLanguage("ko")}
                className={`changeLangMemnu ko ${
                  i18n.language === "ko" ? "select" : ""
                }`}
              >
                KR
              </div>
              <div
                onClick={() => handleLanguage("en")}
                className={`changeLangMemnu en ${
                  i18n.language === "en" ? "select" : ""
                }`}
              >
                EN
              </div>
            </div>
            {menu.map((val, key) => (
              <Link
                key={key}
                onClick={handleToggleMenu}
                className={`list ${
                  pathname.toLowerCase() === val.path.toLowerCase()
                    ? "select"
                    : ""
                }`}
                to={val.path}
              >
                <li>{val.display}</li>
              </Link>
            ))}
            <div className="infoWrapper">
              <p id="adress">
                {t("navbar.address")}
                <br />
                {contact.tell}
              </p>
              <p className="link">
                <a href="/" target="blank">
                  View Map
                </a>
              </p>
              <br />
              <p>Work with us.</p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
              <br />
              <p>Recruiting</p>
              <p className="link">
                <a href={`mailto:${contact.email}`} title="">
                  {contact.email}
                </a>
              </p>
            </div>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
