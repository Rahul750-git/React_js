import React from "react";
import "./index.css";
import Card from "./component/Card";
import User from "./component/User";
const App = () => {
  const jobopening =[
    {
    "brandlogo": "https://logo.clearbit.com/google.com",
    "nameOfCompany": "Google",
    "datePosted": "2 days ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "pay": "$78.50 per hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/amazon.com",
    "nameOfCompany": "Amazon",
    "datePosted": "10 days ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "pay": "$65.00 per hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/microsoft.com",
    "nameOfCompany": "Microsoft",
    "datePosted": "2 days ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "pay": "$95.00 per hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/apple.com",
    "nameOfCompany": "Apple",
    "datePosted": "1 week ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "pay": "$82.00 per hour",
    "location": "Hyderabad, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/nvidia.com",
    "nameOfCompany": "NVIDIA",
    "datePosted": "5 days ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "pay": "$72.00 per hour",
    "location": "Bengaluru, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/meta.com",
    "nameOfCompany": "Meta",
    "datePosted": "3 days ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "pay": "$110.00 per hour",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/netflix.com",
    "nameOfCompany": "Netflix",
    "datePosted": "2 weeks ago",
    "postTag1": "Full Time",
    "postTag2": "Junior Level",
    "pay": "$90.00 per hour",
    "location": "Remote, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/microsoft.com",
    "nameOfCompany": "Microsoft",
    "datePosted": "3 days ago",
    "postTag1": "Full Time",
    "postTag2": "Mid Level",
    "pay": "$88.00 per hour",
    "location": "Noida, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/google.com",
    "nameOfCompany": "Google",
    "datePosted": "1 week ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "pay": "$125.00 per hour",
    "location": "Mumbai, India"
  },
  {
    "brandlogo": "https://logo.clearbit.com/apple.com",
    "nameOfCompany": "Apple",
    "datePosted": "4 days ago",
    "postTag1": "Full Time",
    "postTag2": "Senior Level",
    "pay": "$105.00 per hour",
    "location": "Bengaluru, India"
  }
  ];
  console.log(jobopening);
  
  return (
    <div className="parent">
    <Card />
    {jobopening.map(function(ele){
      return <h1>{ele.nameOfCompany}</h1>
    })}
      
      <User  name="Ram"/>
      </div>
  );
};

export default App;
