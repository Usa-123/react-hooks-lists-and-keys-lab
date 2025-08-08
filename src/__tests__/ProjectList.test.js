import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectList from "../components/ProjectList";

test("renders a list of ProjectItem components", () => {
  const mockProjects = [
    { name: "Project 1", about: "About Project 1", technologies: ["HTML", "CSS"] },
    { name: "Project 2", about: "About Project 2", technologies: ["JS", "React"] }
  ];

  render(<ProjectList projects={mockProjects} />);

  expect(screen.getByText("Project 1")).toBeInTheDocument();
  expect(screen.getByText("Project 2")).toBeInTheDocument();
});
