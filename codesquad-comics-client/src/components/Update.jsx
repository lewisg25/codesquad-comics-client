import React, { useState, useEffect } from "react";
import booksData from "../data/books";

const Update = () => {
  const [book, setBook] = useState({});

  const id = 1;

  useEffect(() => {
    const foundBook = booksData.find((b) => b.id === id);
    setBook(foundBook);
  }, []);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    console.log("Update method ran");
    console.log("Title:", e.target.title.value);
  };

  return (
    <main className="container">
      <h1>Update Comic</h1>
      <form onSubmit={handleUpdateSubmit} className="update-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            name="title"
            defaultValue={book.title || ""}
            required
          />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Update;
