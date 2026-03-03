import React from "react";
import Left1 from "./Left1";
import Right1 from "./Right1";

const PageContent1 = (props) => {
  return (
    <div className="h-[90vh] bg-gray-100 gap-10 flex items-center py-10 px-18">
      <Left1 />
      <Right1 users={props.users} tag={props.tag} />
    </div>
  );
};

export default PageContent1;
