import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  const profiles = [
    {
      name: "Aryan Mehta",
      bio:"A passionate web developer.",
      image:"https://i.pinimg.com/736x/72/39/9f/72399f96aa0bf42eb15f45a5da438056.jpg",
      color:"yellow"
    },
    {
      name: "Aryan Mehta",
      bio:"A passionate web developer.",
      image:"https://i.pinimg.com/736x/72/39/9f/72399f96aa0bf42eb15f45a5da438056.jpg",
      color:"red"
    },
    {
      name: "Aryan Mehta",
      bio:"A passionate web developer.",
      image:"https://i.pinimg.com/736x/72/39/9f/72399f96aa0bf42eb15f45a5da438056.jpg",
      color:"green"
    },
    {
      name: "Aryan Mehta",
      bio:"A passionate web developer.",
      image:"https://i.pinimg.com/736x/72/39/9f/72399f96aa0bf42eb15f45a5da438056.jpg",
      color:"gray"
    },
    {
      name: "Aryan Mehta",
      bio:"A passionate web developer.",
      image:"https://i.pinimg.com/736x/72/39/9f/72399f96aa0bf42eb15f45a5da438056.jpg",
      color:"blue"
    },
  ]
  return (
    <div className="h-auto flex flex-wrap justify-center items-center gap-10 p-10">

      {/* from here we can pass the props as an argument or attribute */}
      
      {
        profiles.map((student, index) => (
          <ProfileCard key={index}
          name={student.name}
          bio={student.bio}
          image={student.image}
          color={student.color}
          />
        ))
      }
    </div>
  );
}

export default App;
