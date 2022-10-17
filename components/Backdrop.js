import React from "react";

const Backdrop = ({ visibility, togglebackdrop }) => {
  return (
    <div
      className={`flex justify-center h-screen items-center w-screen fixed bg-black opacity-80  text-white z-20 ${visibility}`}
    >
      <div
        onClick={() => togglebackdrop(false)}
        className="absolute top-3 right-10 flex cursor-pointer"
      >
        <svg
          class="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <h1>Backdrop</h1>
    </div>
  );
};

export default Backdrop;
