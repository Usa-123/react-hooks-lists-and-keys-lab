import React from "react";

function ProjectItem({ name, about, technologies }) {
  return (
    <div className="border p-4 rounded-lg shadow-md bg-white">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{about}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
