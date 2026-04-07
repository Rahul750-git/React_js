import Section1 from "./component/Section1/Section1";
import "./index.css";

function App() {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "“I’ll go first—my name is Tara, and I’m the CFO at ______. I see a lot of new faces here today, and I’m hoping to connect with other finance and accounting professionals.",
      tag: "Satiesfied",
      color:'orange'
    },
    {
      img: "https://images.unsplash.com/photo-1716703371653-ca74beaa7a4a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "“My name is Jesse, and I’m a freelance social media strategist. I overheard you mention that you’re looking for someone well-versed in social media best practices to collaborate with on a new project",
      tag: "Underserved",
      color:'BlueViolet'
    },
    {
      img: "https://images.unsplash.com/photo-1675434303097-210c75b61d3f?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      intro:
        "My name is Rebecca, and I’m a brand manager at _____. I recently saw in the news that your company is focusing heavily on branding initiatives, and that really ",
      tag: "Underbonding",
      color:'pink'
    },
    {
      img:'https://images.unsplash.com/photo-1522152302542-71a8e5172aa1?q=80&w=1008&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'It’s the first day at your new job, congrats! As you go through training and onboarding, you’ll be introduced to lots of new people on your team.',
      tag:'Satiesfied',
      color:'light-green'
    },
     {
      img:'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'At a networking event, you want to introduce yourself with more substance than what’s already written on your business card.',
      tag:'Average',
      color:'blue'
    },
     {
      img:'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro:'Hi Danielle - My name is Alice Liu, and I’m a software engineer and a newcomer to this Slack channel. I saw on LinkedIn that you were recently promoted to head of sales ',
      tag:'Satiesfied',
      color:'red'
    }
  ];
  
  

  return (
    <div>
      <Section1 users={users} />
      
    </div>
  );
}

export default App;
