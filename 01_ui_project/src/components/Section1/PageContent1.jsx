import React from "react";
import Left1 from "./Left1";
import Right1 from "./Right1";

const PageContent1 = (props) => {
  return (
    <div className="h-[90vh] gap-10 flex items-center pb-16 pt-6 px-18">
      <Left1 />
      <Right1 users={props.users} />
    </div>
  );
};

export default PageContent1;
