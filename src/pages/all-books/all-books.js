import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { Header, BookItem, Spinner } from "../../components";

export const AllBooksScreen = () => {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    fetch("https://internsapi.public.osora.ru/api/book/list", {
      headers: {
        Authorization: `Bearer ${Cookies.get("ACCESS")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res, "resallbooks");
        setBooks(res?.data);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <Header>
        <p className="text-[16px] text-white font-bold ml-[60px]">Library</p>
      </Header>
      <div>
        {isLoading ? (
          <Spinner offset={80} size={14} />
        ) : (
          books?.map((book, idx) => (
            <BookItem
              key={book.id}
              number={idx + 1}
              title={book.title}
              description={book.description}
              uid={book.id}
              authors={book.authors}
              favorite={book.favorite}
              isLibrary
            />
          ))
        )}
      </div>
    </>
  );
};
