import React from "react";
import "./style.css";
import { BsBarChartLineFill } from "react-icons/bs";
var cardData = [
  {
    image: BsBarChartLineFill,
    price: 310,
    subTitle: "All Earning",
    detail: "10% changes on profit",
    role: 1,
  },
  {
    image: BsBarChartLineFill,
    price: 229,
    subTitle: "Task ",
    detail: "28% task performance ",
    role: 2,
  },
  {
    image: BsBarChartLineFill,
    price: 568,
    subTitle: "Pages View",
    detail: "10% details view",
    role: 3,
  },
  {
    image: BsBarChartLineFill,
    price: 998,
    subTitle: "Download",
    detail: "10% download in App store",
    role: 4,
  },
];

const BoxComponent = () => {
  const getStatuseColor = (role) => {
    switch (role) {
      case 1:
        return "#F6C90E";
      case 2:
        return "#D2001A";
      case 3:
        return "rgba(239, 87, 11, 0.932)";
      case 4:
        return "#3E7C17";
      default:
        return "gray";
    }
  };
  return (
    <div className="all_box">
      {cardData.map((item) => (
        <div
          className="box"
          style={{
            border: `1px solid ${getStatuseColor(item.role)} `,
          }}
        >
          <div className="box_content">
            <div className="ouer_detais">
              <h2 style={{ color: `${getStatuseColor(item.role)} ` }}>
                {item.price}
              </h2>
              <p>{item.subTitle}</p>
            </div>
            <BsBarChartLineFill
              className="box_icon"
              style={{ color: `${getStatuseColor(item.role)} ` }}
            />
          </div>
          <div
            style={{ backgroundColor: `${getStatuseColor(item.role)} ` }}
            className="en_box"
          >
            {item.detail}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BoxComponent;
