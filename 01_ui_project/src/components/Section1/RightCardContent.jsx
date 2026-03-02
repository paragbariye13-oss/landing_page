import React from "react";

const RightCardContent = () => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between">
      <h2 className="bg-black rounded-full flex text-xl font-semibold h-12 w-12 items-center justify-center">
        1
      </h2>
      <div>
        <p className="text-lg leading-normal mb-10">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem non
          accusamus assumenda, quibusdam possimus vitae.
        </p>
        <div className="flex justify-between">
          <button className="bg-blue-600 font-medium px-8 py-2 rounded-full">
            Satisfied
          </button>
          <button className="bg-blue-600  px-3 py-2 rounded-full">
            <i className="ri-arrow-right-fill"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
