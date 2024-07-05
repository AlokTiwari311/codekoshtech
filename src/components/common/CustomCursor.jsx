import React, { useState, useEffect } from "react";

const CustomCursor = ({ isVisible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove);
    };

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove);
    };

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    addEventListeners();
    return () => removeEventListeners();
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div data-scroll-container
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      className="custom-cursor hidden  md:flex justify-center items-center w-0 h-0 fixed rounded-full pointer-events-none z-[99] bg-black/70 backdrop-blur-sm "
    >
      <p className="text-center p-4 text-lg">
        See <br />
        Project
      </p>
    </div>
  );
};

export default CustomCursor;
