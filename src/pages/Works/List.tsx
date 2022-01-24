import React from "react";
import Card from "./Card";
import data from "./data";

// interface ListProps {
//   data?: any[];
// }

const List = () => {
  const renderCards = (data: any[]) => {
    return data.map((val, key) => <Card item={val} key={key} />);
  };
  return (
    <div className={"card-wr "}>
      <div className="scroll">{renderCards(data)}</div>
    </div>
  );
};

export default List;
