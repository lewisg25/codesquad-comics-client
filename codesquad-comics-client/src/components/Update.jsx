import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();
  const navigate = useNavigate();

  
  useEffect(() => {
    fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/${bookId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Could not fetch book details");
        return response.json();
      })
      .then((data) => {
        console.log("Fetched book:", data);
        setBook(data);
      })
      .catch((error) => console.error("Error:", error));
  }, [bookId]);

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
      image: e.target.image.value,
    };

    
    fetch(`https://course-project-codesquad-comics-server.onrender.com/api/books/edit/${bookId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update book");
        return response.json();
      })
      .then((result) => {
        console.log("Update successful:", result);
        setBook(result);
        navigate("/admin"); 
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <main className="container">
      <h1>Update Comic</h1>
     
      <form onSubmit={handleUpdateSubmit} className="update-form" key={book._id || book.id}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" name="title" defaultValue={book.title || ""} required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" name="author" defaultValue={book.author || ""} required />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input type="text" name="publisher" defaultValue={book.publisher || ""} required />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" name="genre" defaultValue={book.genre || ""} required />
        </div>
        <div>
          <label htmlFor="pages">Pages:</label>
          <input type="number" name="pages" defaultValue={book.pages || ""} required />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input type="number" name="rating" defaultValue={book.rating || ""} min="1" max="5" required />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" name="image" defaultValue={book.image || ""} required />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea name="synopsis" defaultValue={book.synopsis || ""} required />
        </div>

        <button type="submit">Submit Changes</button>
      </form>
    </main>
  );
};

export default Update;