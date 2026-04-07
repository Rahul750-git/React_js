import React from "react";
import RightCard from "./RightCard";
const RightContent = (props) => {
  console.log(props.color);
  
  return (
    <div id="rightcontent" className="h-full w-2/3 p-6 flex overflow-x-auto flex-nowrap gap-5  " >
    {props.users.map(function(ele,idx){
      return <RightCard key={idx} id ={idx} img={ele.img}
      tag = {ele.tag} 
      intro ={ele.intro}
        color={ele.color}
      />
    })}
    </div>
  );
};

export default RightContent;
