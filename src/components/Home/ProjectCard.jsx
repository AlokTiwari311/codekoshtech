// src/components/Project.js
import React from "react";

const ProjectCard = ({ project, onHover }) => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
      onMouseEnter={() => onHover(project.image)}
    >
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
      <p className="text-gray-500">{project.category}</p>
    </div>
  );
};

export default ProjectCard;
