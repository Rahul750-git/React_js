import React from "react";

import RightCardContent from "./RightCardContent";
const RightCard = (props) => {
  return (
    <div className="h-155 w-80 shrink-0 overflow-hidden relative rounded-4xl">
      <img
        className="h-full w-full object-cover "
        src={props.img}
      />
    <RightCardContent id={props.id} tag={props.tag} intro={props.intro} color={props.color}/>
    </div>
  );
};

export default RightCard;
