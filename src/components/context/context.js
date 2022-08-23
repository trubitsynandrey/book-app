import {
    createContext, useContext, useState
} from 'react'


  const initial = {
    books: [],
    setBooks: () => undefined,
  }
  
  export const BooksContext = createContext(initial)
  
  export const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(initial.books)

  
    const value = {
        setBooks,
        books,
      }
  
    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>
  }
  
  export const useBooksContext = () => useContext(BooksContext)
  