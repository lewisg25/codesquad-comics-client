import React from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const handleCreateSubmit = (e) => {
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

    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/api/books/create",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to create new book");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success: Book created!", data);

        navigate("/admin");
      })
      .catch((error) => {
        console.error("Error creating book:", error);
      });
  };

  return (
    <main className="container">
      <h1>Create New Comic</h1>
      <form onSubmit={handleCreateSubmit} className="create-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" required />
        </div>
        <div>
          <label htmlFor="publisher">Publisher:</label>
          <input type="text" id="publisher" name="publisher" required />
        </div>
        <div>
          <label htmlFor="genre">Genre:</label>
          <input type="text" id="genre" name="genre" required />
        </div>
        <div>
          <label htmlFor="pages">Number of Pages:</label>
          <input type="number" id="pages" name="pages" required />
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label htmlFor="image">Image URL:</label>
          <input type="text" id="image" name="image" required />
        </div>
        <div>
          <label htmlFor="synopsis">Synopsis:</label>
          <textarea id="synopsis" name="synopsis" required></textarea>
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default Create;
