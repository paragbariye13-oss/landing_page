import React from "react";
import RightCard from "./RightCard";

const Right1 = (props) => {
  console.log(props);
  return (
    <div className="h-full w-2/3 p-6 text-white flex  gap-5 ">
      {props.users.map(function (elem, idx) {
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} />;
      })}
    </div>
  );
};

export default Right1;
