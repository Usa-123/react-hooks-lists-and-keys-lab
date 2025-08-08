import React from "react";
import ProjectList from "./ProjectList";

function App() {
  const projects = [
    {
      id: 1,
      name: "Portfolio Website",
      about: "A personal portfolio to showcase my projects and skills.",
      technologies: ["HTML", "CSS", "JavaScript"]
    },
    {
      id: 2,
      name: "E-commerce Store",
      about: "An online store with product listings and a cart system.",
      technologies: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 3,
      name: "Weather App",
      about: "A simple weather forecasting app using an API.",
      technologies: ["React", "API", "Bootstrap"]
    }
  ];

  return (
    <div className="App">
      <h1>My Projects</h1>
      <ProjectList projects={projects} />
    </div>
  );
}

export default App;
