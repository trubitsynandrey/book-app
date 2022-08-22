import Cookies from "js-cookie";
import React, { useState } from "react";
import { Button } from "../button";
import { Modal } from "../modal";

export const BookItem = ({ number, title, description, favorite, uid, authors, isLibrary }) => {
  // console.log(uid, 'authors:',authors?.join(","), 'descr:',description, 'title:', title, )
  const [isModal, setIsModal] = useState(false);
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleAddBook = () => {
    const authorsParsed = authors?.join(",")
    return fetch(
      `https://internsapi.public.osora.ru/api/book/add?title=${title}&authors=${authorsParsed}&description=${description}&favorite=${favorite}&uid=${uid}`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${Cookies.get('ACCESS')}`,
        },
      }
    ).then(res => res.json()).then(res => console.log(res));
    
  };

  return (
    <>
      <div className="flex group items-center h-[60px] bg-[#FAFAFA] border-[1px] border-[#CCCCCC] pr-[12px]">
        <div className="w-[6px] h-[100%] bg-palewhite group-hover:bg-green" />
        <div className="flex flex-1 justify-between">
          <p className="w-[24px] ml-[14px]">{`${number}.`}</p>
          <div className="flex flex-1 justify-between ml-[26px]">
            <p className="sm:max-w-[500px] lg:max-w-[800px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] text-[14px]">
              {title}
            </p>
            {!isLibrary && <Button version={"success"} handleClick={handleOpenModal}>
              ADD
            </Button>}
            {isLibrary && <div className="flex gap-[3px]">
                <button className="bg-green h-[24px] w-[24px] rounded text-white text-[11px]">F</button>
                <button className="bg-redWarning h-[24px] w-[24px] rounded text-white text-[11px]">D</button>
                <button className="bg-blue h-[24px] w-[24px] rounded text-white text-[11px]">I</button>
              </div>}
          </div>
        </div>
      </div>
      {isModal && (
        <Modal
          closeModal={handleCloseModal}
          modalTitle={"Add book"}
          modalDescription={"Are you sure you want to add this book?"}
          handleYes={handleAddBook}
        />
      )}
    </>
  );
};
