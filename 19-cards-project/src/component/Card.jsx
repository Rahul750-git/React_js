import React from "react";
import { Bookmark } from "lucide-react"
const Card = (props) => {
  return (
    
      <div className="card">
        <div>
          <div className="top">
            <img
              src={props.brandlogo}
              alt="Brandlogo "
            />
            <button>
              Save
              <Bookmark size={12} />
            </button>
          </div>
        </div>
        <div className="center">
          <h3>
            {props.company}
            <span> {props.datepost}</span>
          </h3>
          <h2>{props.postTag2}</h2>
          <div className="tag">
            <h4>{props.postTag1}</h4>
            <h4>{props.partTime}</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="div">
            <h3> {props.pay}</h3>
            <p> {props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

  );
};

export default Card;
