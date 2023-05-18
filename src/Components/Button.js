import React from "react";

const Button = ({ onClick, text }) => {
  return (
    <div className="flex justify-center">
      <button
        onClick={onClick}
        className="text-white border text-lg sm:py-1 md:py-0 md:my-1 sm:px-5 md:px-4 rounded-2xl"
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
