import React, { useEffect, useState } from "react";

interface CardProps {
  item: any;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { mainImg, videoNew, company, name, type, id } = item;

  const [img, setImg] = useState("");

  return (
    <div className="card-pd">
      <div className="card">
        <div className="contents-hide">
          <div className="inner-flex">
            <div>
              <p className="desc">{type.toUpperCase()}</p>
            </div>
            <div>
              <p className="partners">{company.en}</p>
              {/* <p className="title">{name[i18n.language]}</p> */}
            </div>
          </div>
        </div>
        <div
          className="contents-img"
          style={{ backgroundImage: `url(${img})` }}
        />
      </div>
    </div>
  );
};

export default Card;
