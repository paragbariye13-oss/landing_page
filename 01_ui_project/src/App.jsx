import React from "react";
import Section1 from "./components/Section1/Section1";
import Section2 from "./components/Section2/Section2";
const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1717068342175-c3a303a09f91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdvcmtpbmclMjBwcm9mZXNzaW9uYWxzfGVufDB8fDB8fHww",
      intro: "",
      tag: "Satisfied",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1669627111607-fd97efe8866c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fHdvcmtpbmclMjBvbiUyMGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
      intro: "",
      tag: "Unsatisfied",
    },
    {
      img: "https://images.unsplash.com/photo-1769071167822-3a7095cc9bbd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU5fHx3b3JraW5nJTIwb24lMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Underbanked",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661576523483-3f0bfc9a3fdb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmclMjBtZW58ZW58MHx8MHx8fDA%3D",
      intro: "",
      tag: "Underbanked",
    },
  ];
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  );
};

export default App;
