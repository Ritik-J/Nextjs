interface Book {
  id: number;
  name: string;
}

async function Page() {
  const resonse = await fetch("http://localhost:3000/api/books");

  const books = await resonse.json();

  return (
    <main>
      {books.map((book: Book) => (
        <div key={book.id}>
          <h1>{book.id}</h1>
          <h2>{book.name}</h2>
        </div>
      ))}
    </main>
  );
}

export default Page;
