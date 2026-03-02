import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-18 py-8">
      <h4 className="bg-black rounded-full text-white px-6 py-2">
        Targeted Audience
      </h4>
      <button className="bg-gray-300 rounded-full py-2 px-6 font-bold tracking-widest text-sm">
        Digital Banking Platform
      </button>
    </div>
  );
};

export default Navbar;
