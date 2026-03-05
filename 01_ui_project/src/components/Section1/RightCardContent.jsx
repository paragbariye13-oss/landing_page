import React from "react";

const RightCardContent = (props) => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
      <h2 className="bg-white rounded-full flex text-xl font-semibold h-12 w-12 items-center justify-center">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-shadow-2xs text-xl leading-relaxed text-white mb-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem non
          accusamus assumenda, quibusdam possimus vitae.
        </p>
        <div className="flex justify-between">
          <button
            style={{ backgroundColor: props.color }}
            className=" text-white bg-blue-400 font-medium px-8 py-2 rounded-full"
          >
            {props.tag}
          </button>
          <button className="px-3 py-2 rounded-full bg-blue-400 text-white font-medium">
            <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
