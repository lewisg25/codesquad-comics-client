import React, { useState, useEffect } from "react";
import booksData from "../data/books";
import CodeSquadlogo from "../../src/images/images/CodeSquadlogo.jpg";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks(booksData);
  }, []);

  return (
    <div className="collection">
      <div className="container">
        <h1>CodeSquad Comics</h1>
        <p>
          CodeSquad Comics is a collection of graphic novels read by Lewis
          Garnett...
        </p>
      </div>
      <div className="container">
        <h1>Complete Comic Collection</h1>
        <div className="comic-list">
          {books.map((book) => (
            <div className="comic-card" key={book.id}>
              <a href="#">
                <img src={book.image} alt={book.title} />
              </a>
              <h3>{book.title}</h3>
              <p>by {book.author}</p>
              <p>Rating: {book.rating}/5</p>
              <a className="details-link" href="#">
                Details
              </a>
            </div>
          ))}
        </div>
        <button>DISPLAY MORE</button>
      </div>
    </div>
  );
};

export default Home;
