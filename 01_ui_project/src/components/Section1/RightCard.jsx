import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" w-80 relative rounded-4xl h-full overflow-hidden">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <RightCardContent id={props.id} tag={props.tag} />
    </div>
  );
};

export default RightCard;
