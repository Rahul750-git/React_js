import React from "react";
import { Bookmark } from "lucide-react"
const Card = () => {
  return (
    
      <div className="card">
        <div>
          <div className="top">
            <img
              src="https://images.seeklogo.com/logo-png/29/2/amazon-icon-logo-png_seeklogo-297884.png"
              alt="amazon logo "
            />
            <button>
              Save
              <Bookmark size={12} />
            </button>
          </div>
        </div>
        <div className="center">
          <h3>
            Amazon
            <span> 5 days ago</span>
          </h3>
          <h2>Senior UI/UX Designer</h2>
          <div className="tag">
            <h4>Part Time</h4>
            <h4>Senior Level</h4>
          </div>
        </div>
        <div className="bottom">
          <div className="div">
            <h3> $120/hr</h3>
            <p> Mumbai ,India</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>

  );
};

export default Card;
