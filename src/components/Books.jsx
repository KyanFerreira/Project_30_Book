/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Books = ({ token }) => {
    const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  useEffect(() => {
    console.log("See Me");
    async function getBooks() {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`
        );
        const result = await response.json();
        console.log(result.books);
        setBooks(result.books);
        console.log(books);
      } catch (e) {
        console.log(e);
      }
    }
    getBooks();
  });

  console.log(token);
  if(token == null){
    return (
        <>
          <h1> Book Page</h1>
          <div className="books">
            {books.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-image-container">
                  <img
                    className="book-image"
                    src={book.coverimage}
                    alt={book.title}
                  ></img>
                </div>
                <h2>Name: {book.title} </h2>
                <p>Author {book.author}</p>
                <button onClick={() => navigate(`singlebook/${book.id}`)}>Book Detail</button>
                
              </div>
            ))}
          </div>
        </>
      );
  }else if(token != null){
    return(
        <>
        <h1> Book Page</h1>
        <div className="books">
          {books.map((book) => (
            <div key={book.id} className="book-card">
              <div className="book-image-container">
                <img
                  className="book-image"
                  src={book.coverimage}
                  alt={book.title}
                ></img>
              </div>
              <h2>Name: {book.title} </h2>
              <p>Author {book.author}</p>
              <button onClick={() => navigate(`singlebook/${book.id}`)}>Book Detail</button>
              <button>Reserve Book</button>
              
            </div>
          ))}
        </div>
      </>
    );
  }
  
};

export default Books;
