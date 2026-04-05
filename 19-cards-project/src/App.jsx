import React from "react";
import "./index.css";
import Card from "./component/Card";

const App = () => {
  const jobopening = [
    {
      brandlogo:
        "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
      nameOfCompany: "Google ",
      datePosted: "2 days ago",
      postTag1: "Part Time",
      postTag2: "Fronted Developer",
      partTime: "Senior Level",
      pay: "$78.50 per hour",
      location: "Bengaluru, India",
    },
    {
      brandlogo: "https://gpng.net/wp-content/uploads/Amazon-Logo-PNG-Free.png",
      nameOfCompany: "Amazon ",
      datePosted: "10 days ago",
      postTag1: "Full Time",
      postTag2: "Backend Developer",
      partTime: "Mid Level",
      pay: "$65.00 per hour",
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://tse1.mm.bing.net/th/id/OIP.w6wIB2kz6BXvOVV_ibR_mwHaG8?pid=Api&P=0&h=220",
      nameOfCompany: "Microsoft ",
      datePosted: "2 days ago",
      postTag1: "Full Time",
      postTag2: "Full Stack Developer",
      partTime: "Junior Level",
      pay: "$95.00 per hour",
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://tse4.mm.bing.net/th/id/OIP._gmdrZwZCMJSC-nHx1L37gHaHa?pid=Api&P=0&h=220",
      nameOfCompany: "Apple ",
      datePosted: "1 week ago",
      postTag1: "Half Time",
      postTag2: "Mobile App Developer",
      partTime: "Mid Level",
      pay: "$82.00 per hour",
      location: "Hyderabad, India",
    },
    {
      brandlogo:
        "https://hrcdn.net/s3_pub/istreet-assets/engage-assets/events/414/microsite/nvidia-logo-vert-rgb-blk-for-screen.png",
      nameOfCompany: "NVIDIA ",
      datePosted: "5 days ago",
      postTag1: "Full Time",
      postTag2: "DevOps Engineer",
      partTime: "Senior Level",
      pay: "$72.00 per hour",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://logos-world.net/wp-content/uploads/2021/11/Meta-Emblem.png",
      nameOfCompany: "Meta ",
      datePosted: "3 days ago",
      postTag1: "Part Time",
      postTag2: " Data Engineer",
      partTime: "Junior Level",
      pay: "$110.00 per hour",
      location: "Mumbai, India",
    },
    {
      brandlogo:
        "https://1000logos.net/wp-content/uploads/2017/05/Netflix-Logo.png",
      nameOfCompany: "Netflix ",
      datePosted: "2 weeks ago",
      postTag1: "Full Time",
      postTag2: "Machine Learning Engineer",
      partTime: "Senior Level",
      pay: "$90.00 per hour",
      location: "Remote, India",
    },
    {
      brandlogo:
        "http://3.bp.blogspot.com/-mPh7lr-L5kw/URx8FtZsRYI/AAAAAAAAAU8/1Rl4GwVdyhM/s1600/microsoft-logo+(1).jpg",
      nameOfCompany: "Microsoft ",
      datePosted: "3 days ago",
      postTag1: "Part Time",
      postTag2: "QA / Test Engineer",
      partTime: "Junior Level",
      pay: "$88.00 per hour",
      location: "Noida, India",
    },
    {
      brandlogo:
        "https://freelogopng.com/images/all_img/1657952440google-logo-png-transparent.png",
      nameOfCompany: "Google ",
      datePosted: "1 week ago",
      postTag1: "Full Time",
      postTag2: "Game Developer",
      partTime: "Mid Level",
      pay: "$125.00 per hour",
      location: "Mumbai, India",
    },
    {
      brandlogo: "https://logospng.org/download/apple/logo-apple-2048.png",
      nameOfCompany: "Apple ",
      datePosted: "4 days ago",
      postTag1: "Full Time",
      postTag2: "Software Engineer",
      partTime: "Senior Level",
      pay: "$105.00 per hour",
      location: "Bengaluru, India",
    },
    {
      brandlogo:
        "https://logos-world.net/wp-content/uploads/2020/09/Oracle-Emblem.jpg",
      nameOfCompany: "Oracle ",
      datePosted: " 7 days ago",
      postTag1: "Full Time",
      postTag2: "Java Developer",
      partTime: "Senior Level",
      pay: "$103.00 per hour",
      location: "Delhi, India",
    },
    {
      brandlogo:
        "https://static.vecteezy.com/system/resources/previews/024/806/538/non_2x/infosys-logo-transparent-free-png.png",
      nameOfCompany: "Infosys ",
      datePosted: " 9 days ago",
      postTag1: "Full Time",
      postTag2: "Python Developer",
      partTime: "Junior Level",
      pay: "$106.00 per hour",
      location: "Nodia, India",
    },
  ];
  console.log(jobopening);

  return (
    <div className="parent">
      {jobopening.map(function (ele, idx) {
        return (
          <div key={idx}>
            <Card
              company={ele.nameOfCompany}
              brandlogo={ele.brandlogo}
              datepost={ele.datePosted}
              postTag1={ele.postTag1}
              postTag2={ele.postTag2}
              partTime={ele.partTime}
              pay={ele.pay}
              location={ele.location}
            />
          </div>
        );
      })}
    </div>
  );
};

export default App;
