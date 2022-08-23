import React, { useEffect, useState } from "react";
import { DeleteInputValue, Header, Search, Spinner } from "../../components";
import { BookItem } from "../../components/book-item/book-item";

export const AddbookScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const handleDeleteInputValue = () => {
    setInputValue("");
  };



  const handleDeleteFromList = (id) => {
    setBooks(prev => prev.filter(book => book.id !== id))
  }
  useEffect(() => {
    if (sessionStorage.getItem("inputValue")) {
      setInputValue(sessionStorage.getItem("inputValue"));
    }
    return () => {
      // if (inputValue === "") {
        // sessionStorage.removeItem("inputValue");
      // }
    };
  }, []);

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
    return () => {
      clearTimeout(typeToFetchThrottle);
      // if (inputValue !== "") {
      //   sessionStorage.setItem("inputValue", inputValue);
      // } else {
      //   sessionStorage.removeItem("inputValue");
      // }
    };
  }, [inputValue]);

  const isInputEmpty = inputValue === ""
  const booksIsEmpty = !!books
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
      <div className="relative">
        {isInputEmpty && <p>Type something to start search...</p>}
        {!isInputEmpty && !booksIsEmpty &&  <p>Nothing have found</p>}
        {isLoading ? (
          <Spinner />
        ) : (
          <div>
            {books?.map((book, idx) => (
              <BookItem
                key={book.id}
                number={idx + 1}
                title={book.volumeInfo.title}
                description={book.volumeInfo.description}
                uid={book.id}
                authors={book.volumeInfo.authors}
                favorite={0}
                deleteBook={handleDeleteFromList}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
