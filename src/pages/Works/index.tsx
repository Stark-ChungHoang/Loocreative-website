import React, { useEffect, useState } from "react";
import List from "./List";
import MenuTab from "./MenuTab";
import "./style.scss";
import data from "./data.json";
import Popup from "./Popup";
import Footer from "./Footer";

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
  const [filterData, setFilterData] = useState(data);
  const [openPopup, setOpenPopup] = useState(false);
  const [idItem, setIdItem] = useState();
  const [item, setItem] = useState(data[0]);

  useEffect(() => {
    (() => {
      if (menuType === menus[0]) {
        setFilterData(data);
      } else {
        const newData = data.filter((val) => val.desc === menuType);
        setFilterData(newData);
      }
    })();

    (() => {
      if (idItem) {
        const newItem = data.filter((val) => val.id === idItem);
        setItem(newItem[0]);
      }
    })();
  }, [menuType, idItem]);

  return (
    <>
      <div className="wrapper_page padding">
        <div className="works_">
          <div className="logo-title">
            <div className="title">
              <p className="bold">WORKS</p>
            </div>
          </div>

          <div className="card-all-wrapper">
            <MenuTab
              menus={menus}
              setMenuType={setMenuType}
              menuType={menuType}
            />
            <List
              data={filterData}
              setIdItem={setIdItem}
              setOpenPopup={setOpenPopup}
            />
          </div>
          <Footer />
        </div>
      </div>
      {openPopup && <Popup data={item} setOpenPopup={setOpenPopup} />}
    </>
  );
};

export default Works;
