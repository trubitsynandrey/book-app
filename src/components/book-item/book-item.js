import Cookies from "js-cookie";
import React, { useState } from "react";
import { Button } from "../button";
import { Modal } from "../modal";

export const BookItem = ({
  number,
  title,
  description,
  favorite,
  uid,
  authors,
  isLibrary,
  id,
  deleteBook,
  addFavorite,
}) => {
  // console.log(uid, 'authors:',authors?.join(","), 'descr:',description, 'title:', title, )
  const [isModal, setIsModal] = useState(false);
  const [isModalDelete, setIsModalDelete] = useState(false);
  const [isModalFavourite, setIsModalFavourite] = useState(false);
  const handleCloseModal = () => {
    setIsModal(false);
  };
  const handleCloseModalDelete = () => {
    setIsModalDelete(false);
  };
  const handleCloseModalFavourite = () => {
    setIsModalFavourite(false);
  };
  const handleOpenModalFavourite = () => {
    setIsModalFavourite(true);
  };
  const handleOpenModalDelete = () => {
    setIsModalDelete(true);
  };
  const handleOpenModal = () => {
    setIsModal(true);
  };

  const handleAddBook = async () => {
    const authorsParsed = authors?.join(",");
    await fetch(
      `https://internsapi.public.osora.ru/api/book/add?title=${title}&authors=${authorsParsed}&description=${description}&favorite=${favorite}&uid=${uid}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${Cookies.get("ACCESS")}`,
        },
      }
    )
    deleteBook(uid)
  };

  const handleAddBookToFavourite = async () => {
    await fetch(`https://internsapi.public.osora.ru/api/book/update/${id}?favorite=1`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${Cookies.get("ACCESS")}`,
      },
    })
    addFavorite(id)

  }

  const handleDeleteBook = async () => { 
    await fetch(`https://internsapi.public.osora.ru/api/book/destroy/${id}`, {
      headers: {
        Authorization: `Bearer ${Cookies.get("ACCESS")}`,
      },
    });
    deleteBook(id)
  };
console.log(favorite, 'fav')
  const isFavourite = favorite === 0 ? "bg-palewhite" : "bg-green"

  return (
    <>
      <div className="flex items-center h-[60px] bg-[#FAFAFA] border-[1px] border-[#CCCCCC] pr-[12px]">
        <div className={`w-[6px] h-[100%] ${isFavourite}`} />
        <div className="flex flex-1 justify-between">
          <p className="w-[24px] ml-[14px]">{`${number}.`}</p>
          <div className="flex flex-1 justify-between ml-[26px]">
            <p className="sm:max-w-[500px] lg:max-w-[800px] overflow-hidden text-ellipsis whitespace-nowrap max-w-[200px] text-[14px]">
              {title}
            </p>
            {!isLibrary && (
              <Button version={"success"} handleClick={handleOpenModal}>
                ADD
              </Button>
            )}
            {isLibrary && (
              <div className="flex gap-[3px]">
                <button className="bg-green h-[24px] w-[24px] rounded text-white text-[11px]"
                onClick={handleOpenModalFavourite}
                >
                  F
                </button>
                <button
                  className="bg-redWarning h-[24px] w-[24px] rounded text-white text-[11px]"
                  onClick={handleOpenModalDelete}
                >
                  D
                </button>
                <button className="bg-blue h-[24px] w-[24px] rounded text-white text-[11px]">
                  I
                </button>
              </div>
            )}
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
      {isModalDelete && (
        <Modal
          closeModal={handleCloseModalDelete}
          modalTitle={"Delete book"}
          modalDescription={"Are you sure you want delete this book?"}
          handleYes={handleDeleteBook}
        />
      )}
      {isModalFavourite && (
        <Modal
          closeModal={handleCloseModalFavourite}
          modalTitle={"Add to favourite books"}
          modalDescription={"Are you sure you want add this book to favourite?"}
          handleYes={handleAddBookToFavourite}
        />
      )}
    </>
  );
};
