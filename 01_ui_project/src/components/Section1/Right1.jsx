import React from "react";
import "remixicon/fonts/remixicon.css";
import RightCard from "./RightCard";

const Right1 = (props) => {
  console.log(props.users.color);
  return (
    <div
      id="right"
      className="h-full w-2/3 p-6 flex rounded-4xl overflow-x-auto flex-nowrap gap-10 "
    >
      {props.users.map(function (elem, idx) {
        return (
          <RightCard
            key={idx}
            id={idx}
            color={elem.color}
            img={elem.img}
            tag={elem.tag}
          />
        );
      })}
    </div>
  );
};

export default Right1;
