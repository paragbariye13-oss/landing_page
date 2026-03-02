import React from "react";
import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
  return (
    <div className=" w-80 relative rounded-4xl h-full overflow-hidden">
      <img
        className="h-full w-full object-cover"
        src="https://plus.unsplash.com/premium_photo-1690303193793-498c692e9b5c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZGVyfGVufDB8MXwwfHx8MA%3D%3D"
        alt=""
      />
      <RightCardContent />
    </div>
  );
};

export default RightCard;
