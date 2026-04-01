import React from "react";

const Update = () => {
    return (
        <>
         <main className="container">
        <h1>Update Comic</h1>
        <form action="#" method="POST" class="update-form">
            <div>
                <label for="title">Title:</label>
                <input type="text" id="title" name="title" value="Batman" required/>
            </div>
            <div>
                <label for="author">Author:</label>
                <input type="text" id="author" name="author" value="Bob Kane" required/>
            </div>
            <div>
                <label for="publisher">Publisher:</label>
                <select id="publisher" name="publisher" required>
                    <option value="">Select a publisher</option>
                    <option value="BOOM! Box">BOOM! Box</option>
                    <option value="DC Comics" selected>DC Comics</option>
                    <option value="Harry N. Abrams">Harry N. Abrams</option>
                    <option value="Icon Books">Icon Books</option>
                    <option value="Image Comics">Image Comics</option>
                    <option value="Marvel">Marvel</option>
                    <option value="Simon & Schuster">Simon & Schuster</option>
                    <option value="Top Shelf Productions">Top Shelf Productions</option>
                    <option value="VIZ Media LLC">VIZ Media LLC</option>
                </select>
            </div>
            <div>
                <label for="genre">Genre:</label>
                <input type="text" id="genre" name="genre" value="Superhero" required/>
            </div>
            <div>
                <label for="pages">Number of pages:</label>
                <input type="number" id="pages" name="pages" value="32" required/>
            </div>
            <div>
                <label for="rating">Rating:</label>
                <input type="number" id="rating" name="rating" min="1" max="5" value="5" required/>
            </div>
            <div>
                <label for="synopsis">Synopsis:</label>
                <textarea id="synopsis" name="synopsis" rows="4"
                    cols="50">The Dark Knight protecting Gotham City from various villains and criminals. Batman is one of the most iconic superheroes in comic book history.</textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    </main>
        </>
    )
}

export default Update