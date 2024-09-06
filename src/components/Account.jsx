/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
// Import the React library
import { useEffect, useState } from "react";


const Account = ({ token }) => {

const [userInfo, setuserInfo] = useState({});
const [bookList, setbookList] = useState([]);

async function returnBook(bookId) {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/${bookId}` ,{
          method: "DELETE",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`}
    });
      const result = await response.json();
    } catch (e) {
      //Do nothing
    }
  }



useEffect(() => {
async function getUser() {
    try {
      const response = await fetch(
        `https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me` ,{
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`}
    });
      const result = await response.json();
      setuserInfo(result);
      setbookList(result.books);
      
    } catch (e) {
      //Do Nothing
    }
  }
getUser();
})


    return (
        <>
        <div>
            <h1> Account Page</h1>
            <h2>FirstName: {userInfo.firstname}</h2>
            <h2>LastName: {userInfo.lastname}</h2>
            <h2>Email: {userInfo.email}</h2>
        </div>
        <h2 className="Center"><u>{userInfo.firstname} Checkout Books</u></h2>
        {bookList.length > 0?
        <div className="books">
        
        
        {bookList.map((book) => (
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
            <button onClick={() => returnBook(book.id)}>Return Book</button>
            </div>
        ))}
        </div>
         : <p>0 Books Checked Out</p>}
        
        </>
    );

}

export default Account;