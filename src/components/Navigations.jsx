/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { useEffect, useState } from "react";
const Navigations = () => {
const [books, setBooks] = useState([]);
let moveList = [];
let [neededList, setNeededList] = useState([]);

useEffect(() => {
    async function getBooks() {
        try {
        const response = await fetch(
            `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books`
        );
        const result = await response.json();
        setBooks(result.books);
        } catch (e) {
        //do nothing
        }
    }
    getBooks();
    });

    function createList() {
        let searchName = document.getElementById("searchName").value;
        books.forEach((book) => {
          if (book.title.toLowerCase() == searchName.toLowerCase()) {
            moveList.push(book);
          }
        });
        setNeededList(moveList);
      }

return (
    <>
    <div>
        <h1> Navigations Page</h1>
        <form className="formLayout">
        <label htmlFor="searchName"> Name </label>
        <input type="text" id="searchName" name="searchName"></input>
        <button type="button" onClick={() => createList()}>
        Search
        </button>
    </form>
    </div>
<br></br>
<br></br>
          {
            neededList.map((book) => (
                <div key={book.id} className="book-card2">
                <img className="limitSize"
                src={book.coverimage}
                alt={book.title}
                key={book.id}
              ></img>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              </div>
              
              
            ))}
        
      
    </>
);

}

export default Navigations;