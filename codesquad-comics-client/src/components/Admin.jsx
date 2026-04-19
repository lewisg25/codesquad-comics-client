import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Admin = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(
      "https://course-project-codesquad-comics-server.onrender.com/api/books"
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch books");
        return response.json();
      })
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);


  const handleDelete = (bookId) => {
    fetch(
      `https://course-project-codesquad-comics-server.onrender.com/api/books/delete/${bookId}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (!response.ok) throw new Error("Failed to delete book");
        console.log("Book deleted successfully");

        setBooks(books.filter((book) => (book._id || book.id) !== bookId));
      })
      .catch((error) => console.error("Error deleting book:", error));
  };

  return (
    <main className="container">
      <div className="admin-div">
        <h1>Admin Page</h1>
        <div className="admin-add">
          <Link to="/create">
            <button>Add New Comic</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Publisher</th>
              <th>Genre</th>
              <th>Number of Pages</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => {
              const id = book._id || book.id;
              return (
                <tr key={id}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.publisher}</td>
                  <td>{book.genre}</td>
                  <td>{book.pages}</td>
                  <td>{book.rating}</td>
                  <td>
                    <Link to={`/update/${id}`}>
                      <button>Edit</button>
                    </Link>

                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Admin;
