import React, { useState, useEffect } from "react";
import { DeleteInputValue, Header, Search } from "../../components";
import { BookItem } from "../../components/book-item/book-item";

export const AddbookScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteInputValue = () => setInputValue("");
  useEffect(() => {
    if (inputValue === "") {
      setBooks(null);
      return;
    }
    const typeToFetchThrottle = setTimeout(() => {
      setIsLoading(true);
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${inputValue}`)
        .then((res) => res.json())
        .then((res) => {
          setBooks(res.items);
          setIsLoading(false);
        });
    }, 300);
    return () => clearTimeout(typeToFetchThrottle);
  }, [inputValue]);

  console.log(books);
  return (
    <>
      <Header>
        <div className="w-full bg-white m-auto h-9 flex items-center pl-[6px] pr-[10px]">
          <div className="mr-[6px]">
            <Search />
          </div>
          <input
            value={inputValue}
            className="border-none appearance-none outline-none flex-1"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="cursor-pointer" onClick={handleDeleteInputValue}>
            <DeleteInputValue />
          </div>
        </div>
      </Header>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {books?.map((book, idx) => (
            <BookItem
              key={book.id}
              number={idx + 1}
              title={book.volumeInfo.title}
            />
          ))}
        </div>
      )}
    </>
  );
};
