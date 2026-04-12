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
      <form onSubmit={handleCreateSubmit} className="create-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" required />
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
};
