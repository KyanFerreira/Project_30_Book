/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  let { id } = useParams();
  const [book, setBook] = useState({});
  console.log(id);

  useEffect(() => {
    async function getBook() {
      try {
        const response = await fetch(
          `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`
        );
        const result = await response.json();
        console.log(result);
        setBook(result.book);
        console.log(book.author);
      } catch (e) {
        console.log(e);
      }
    }

    getBook();
  });

  return (
    <div>
      <h1> Title: {book.title}</h1>
      <div className="player-image-container">
        <img
          className="book-image-singlePage"
          src={book.coverimage}
          alt={book.title}
        ></img>
      </div>

      <div className="player-details"></div>
      <p>Author: {book.author}</p>
      <p>Description: {book.description}</p>
    </div>
  );
};

export default SingleBook;
