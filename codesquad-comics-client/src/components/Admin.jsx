

import React from "react";
import booksData from "../data/books";

const Admin = () => {
  return (
    <main className="container">
      <div className="admin-div">
        <h1>Admin Page</h1>
        <div className="admin-add">
          <button>Add New Comic</button>
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
            {booksData.map((book) => (
              <tr key={book.id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.genre}</td>
                <td>{book.pages}</td>
                <td>{book.rating}</td>
                <td>
                  <button onClick={() => "update.html"}>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Admin;
