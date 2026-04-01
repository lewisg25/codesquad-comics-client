// import React from "react";

// const Admin = () => {
//     return (
//         <>
//          <main className="container">
//         <div className="admin-div">
//             <h1>Admin Page</h1>
//             <div className="admin-add">
//                 <button>Add New Comic</button>
//             </div>
//             <table>
//             <thead>
//                 <tr>
//                     <th>Title</th>
//                     <th>Author</th>
//                     <th>Publisher</th>
//                     <th>Genre</th>
//                     <th>Number of Pages</th>
//                     <th>Rating</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr>
//                     <td>Batman</td>
//                     <td>Bob Kane</td>
//                     <td>DC Comics</td>
//                     <td>Superhero</td>
//                     <td>32</td>
//                     <td>5/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//                 <tr>
//                     <td>Black Panther</td>
//                     <td>Stan Lee</td>
//                     <td>Marvel</td>
//                     <td>Superhero</td>
//                     <td>32</td>
//                     <td>4/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Fun Home</td>
//                     <td>Alison Bechdel</td>
//                     <td>Houghton Mifflin</td>
//                     <td>Memoir</td>
//                     <td>232</td>
//                     <td>5/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Hunter x Hunter</td>
//                     <td>Yoshihiro Togashi</td>
//                     <td>VIZ Media LLC</td>
//                     <td>Manga</td>
//                     <td>192</td>
//                     <td>4/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Lumberjanes</td>
//                     <td>Noelle Stevenson</td>
//                     <td>BOOM! Box</td>
//                     <td>Adventure</td>
//                     <td>128</td>
//                     <td>4/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>March</td>
//                     <td>John Lewis</td>
//                     <td>Top Shelf Productions</td>
//                     <td>Biography</td>
//                     <td>128</td>
//                     <td>5/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>One Piece</td>
//                     <td>Eiichiro Oda</td>
//                     <td>VIZ Media LLC</td>
//                     <td>Manga</td>
//                     <td>192</td>
//                     <td>5/5</td>
//                     <td>
//                         <button onclick="location.href='update.html'">Edit</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//                 <tr>
//                     <td>Parable of the Sower</td>
//                     <td>Octavia Butler</td>
//                     <td>Harry N. Abrams</td>
//                     <td>Graphic Novel</td>
//                     <td>272</td>
//                     <td>4/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//                 <tr>
//                     <td>Queer</td>
//                     <td>Various</td>
//                     <td>Icon Books</td>
//                     <td>Graphic Novel</td>
//                     <td>256</td>
//                     <td>4/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//                 <tr>
//                     <td>The Walking Dead</td>
//                     <td>Robert Kirkman</td>
//                     <td>Image Comics</td>
//                     <td>Horror</td>
//                     <td>32</td>
//                     <td>4/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//                 <tr>
//                     <td>Wake</td>
//                     <td>Rebecca Hall</td>
//                     <td>Simon & Schuster</td>
//                     <td>Graphic Novel</td>
//                     <td>208</td>
//                     <td>5/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//                 <tr>
//                     <td>Watchmen</td>
//                     <td>Alan Moore</td>
//                     <td>DC Comics</td>
//                     <td>Superhero</td>
//                     <td>416</td>
//                     <td>5/5</td>
//                     <td><button onclick="location.href='update.html'">Edit</button> <button>Delete</button></td>
//                 </tr>
//             </tbody>
//             </table>
//         </div>
//     </main>
//         </>
//     )
// }
// export default Admin

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

                  <button
                    onClick={() => ("update.html")}
                  >
                    Edit
                  </button>
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
