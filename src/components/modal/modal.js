import React from "react";
import { Button } from "../button";
import { Close } from "../icons";

export const Modal = ({ modalTitle, modalDescription, closeModal, handleYes }) => {
  const handleButtonYes = () => {
    handleYes()
    closeModal()
  }
  return (
    <>
      <div className="fixed bg-modalBackDrop opacity-85 left-0 top-0 color-modalBackDrop w-[100%] h-[calc(100vh)]" onClick={closeModal}/>
      <div className="fixed bg-white z-10 w-[90%] flex items-center flex-col p-6 rounded top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-full">
          <div className="flex justify-between items-center mb-[25px]">
            <p className="font-light text-[22px] text-[#565656]">
              {modalTitle}
            </p>
            <div className="cursor-pointer" onClick={closeModal}>
              <Close />
            </div>
          </div>
          <p className="font-normal text-sm mb-[25px]">{modalDescription}</p>
          <div className="flex justify-end gap-6">
            <Button version={"secondary"} handleClick={handleButtonYes}>YES</Button>
            <Button handleClick={closeModal}>NO</Button>
          </div>
        </div>
      </div>
    </>
  );
};
