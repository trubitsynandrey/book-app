import React from "react";

export const Modal = ({ modalTitle, modalDescription }) => {
  return (
    <div>
      <div className="absolute left-0 top-0 color-modalBackDrop w-[100%] h-[100%]"/>
      <div>
        <div>
          <p>{modalTitle}</p>
          <p>Icon</p>
        </div>
        <p>{modalDescription}</p>
        <div>
            <button>yes</button>
            <button>no</button>
        </div>
      </div>
    </div>
  );
};
