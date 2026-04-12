// import React from "react";

// const Create = () => {
//     return (
//         <>
//           <main className="container">
//         <h1>Create New Comic</h1>
//         <p>Fill out the form below to add a new comic to the collection.</p>
//         <form action="#" method="POST" class ="create-form">
//             <div>
//                 <label for="title">Title:</label>
//                 <input type="text" id="title" name="title" placeholder="Title" required/>
//             </div>
//             <div>
//                 <label for="author">Author:</label>
//                 <input type="text" id="author" name="author" placeholder="Author" required/>
//             </div>
//             <div>
//                 <label for="publisher">Publisher:</label>
//                 <select id="publisher" name="publisher" required>
//                     <option value="">Select</option>
//                     <option value="BOOM! Box">BOOM! Box</option>
//                     <option value="DC Comics">DC Comics</option>
//                     <option value="Harry N. Abrams">Harry N. Abrams</option>
//                     <option value="Icon Books">Icon Books</option>
//                     <option value="Image Comics">Image Comics</option>
//                     <option value="Marvel">Marvel</option>
//                     <option value="Simon & Schuster">Simon & Schuster</option>
//                     <option value="Top Shelf Productions">Top Shelf Productions</option>
//                     <option value="VIZ Media LLC">VIZ Media LLC</option>
//                 </select>
//             </div>
//             <div>
//                 <label for="genre">Genre:</label>
//                 <input type="text" id="genre" name="genre" placeholder="Enter genre" required/>
//             </div>
//             <div>
//                 <label for="pages">Number of pages</label>
//                 <input type="number" id="pages" name="pages" placeholder="Enter number of pages" required/>
//             </div>
//             <div>
//                 <label for="rating">Rating:</label>
//                 <input type="number" id="rating" name="rating" min="1" max="5" placeholder="" required/>
//             </div>
//             <div>
//                 <label for="synopsis">Synopsis:</label>
//                 <textarea id="synopsis" name="synopsis" placeholder="Enter comic synopsis" rows="4" cols="50"></textarea>
//             </div>
//             <button type="submit">Submit</button>
//         </form>
//     </main>
//         </>
//     )
// }

// export default Create


const Create = () => {

    const handleCreateSubmit = (e) => {
        e.preventDefault();
        console.log("Create form submission method ran");
        
        
        console.log("Title:", e.target.title.value);
        console.log("Author:", e.target.author.value);
        console.log("Publisher:", e.target.publisher.value);
        console.log("Genre:", e.target.genre.value);
        console.log("Pages:", e.target.pages.value);
        console.log("Rating:", e.target.rating.value);
        console.log("Synopsis:", e.target.synopsis.value);
    };

    return (
        <main className="container">
            <h1>Create New Comic</h1>
            <form onSubmit={handleCreateSubmit} className ="create-form">
                
                <div>
                    <label htmlFor="title">Title:</label>
                    <input type="text" id="title" name="title" required/>
                </div>
    
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}