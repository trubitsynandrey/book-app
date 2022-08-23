import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header, useBooksContext } from "../../components";

export const InfoBookScreen = () => {
  const [book, setBook] = useState(null);
  const { books } = useBooksContext();
  const { id } = useParams();
  useEffect(() => {
    if (books && id) {
      const findedBook = books.find((book) => book.id == id);
      setBook(findedBook);
    }
  }, [books, id]);
  return (
    <>
      <Header>
        <p className="text-[16px] text-white font-bold ml-[60px]">
          Library - Info
        </p>
      </Header>
      {book && (
        <div className="px-[24px] pt-[24px]">
          <p className="text-[22px] mb-[8px]">{book?.title}</p>
          <div className="flex flex-wrap gap-2 mb-[8px]">
          {book?.authors?.split(",").map(author => <span className="bg-[#E1F1F6] border-[#89CBDF] rounded-[11px] border px-[10px] h-[24px] max-w-[200px] overflow-hidden text-ellipsis whitespace-nowrap">{author}</span>)}
          </div>
          <p id="scrollbar" className="text-[14px] leading-6 overflow-y-scroll max-h-[450px] box-content pr-[8px]">{book.description !== "undefined"? book.description : "No description"}</p>

        </div>
      )}
    </>
  );
};
