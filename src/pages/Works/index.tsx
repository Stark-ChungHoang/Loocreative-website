import React, { useEffect, useState } from "react";
import List from "./List";
import MenuTab from "./MenuTab";
import "./style.scss";
import data from "./data.json";
import Popup from "./Popup";
import Footer from "./Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

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

  useEffect(()=> {
    const card = document.querySelectorAll(".card-pd")
    console.log(card);
    gsap.set(card, {
      opacity: 0,
      scale: 0.8,
    });
    ScrollTrigger.batch(card, {
      onEnter: batch => batch.forEach((card, index) =>gsap.to(card, {opacity: 1, scale: 1, stagger: 0.5, delay: index * 0.1}))

    });
  },[])


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
