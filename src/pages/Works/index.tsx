import React, { useState } from "react";
import List from "./List";
import MenuTab from "./MenuTab";
import "./style.scss";

const menus = [
  "ALL",
  "SHOWREEL",
  "COMMERCIAL",
  "MOTION",
  "OPENING TITLE",
  "MV",
  "ARTWORK",
  "DESIGN",
];

const Works = () => {
  const [menuType, setMenuType] = useState(menus[0]);

  return (
    <div className="works_">
      <div className="logo-title">
        <div className="title">
          <p className="bold">WORKS</p>
        </div>
      </div>

      <div className="card-all-wrapper">
        <MenuTab menus={menus} setMenuType={setMenuType} menuType={menuType} />
        <List />
      </div>
    </div>
  );
};

export default Works;
