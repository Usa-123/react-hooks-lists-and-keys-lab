import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProjectItem from "../components/ProjectItem";

test("renders the project name, about text, and technologies", () => {
  render(
    <ProjectItem
      name="Test Project"
      about="A sample project for testing"
      technologies={["React", "Node", "Tailwind"]}
    />
  );

  // Check project name
  expect(screen.getByText("Test Project")).toBeInTheDocument();

  // Check about text
  expect(screen.getByText("A sample project for testing")).toBeInTheDocument();

  // Check technologies
  expect(screen.getByText("React")).toBeInTheDocument();
  expect(screen.getByText("Node")).toBeInTheDocument();
  expect(screen.getByText("Tailwind")).toBeInTheDocument();
});
