import React, { useState } from "react";
import { Button } from "../button";
import { Modal } from "../modal";

export const BookItem = ({ number, title }) => {
  const [isModal, setIsModal] = useState(false);
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleOpenModal = () => {
    setIsModal(true);
  };
  console.log(isModal, "ismodal");
  return (
    <>
      <div className="flex items-center h-[60px] bg-[#FAFAFA] border-[1px] border-[#CCCCCC] pr-[12px]">
        <div className="w-[6px] h-[100%] bg-palewhite" />
        <div className="flex flex-1 justify-between">
          <p className="w-[24px] ml-[14px]">{`${number}.`}</p>
          <div className="flex flex-1 justify-between ml-[26px]">
            <p className="sm:max-w-[500px] lg:max-w-[800px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] text-[14px]">
              {title}
            </p>
            <Button version={"success"} handleClick={handleOpenModal}>
              ADD
            </Button>
          </div>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={handleCloseModal}
          modalTitle={"Add book"}
          modalDescription={"Are you sure you want to add this book?"}
        />
      )}
    </>
  );
};
