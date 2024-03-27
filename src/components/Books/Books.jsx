import useData from "../Hook/useData";
import Book from "./Book";


const Books = () => {
    const {books} = useData();
    console.log(books)
    
    return (
        <div>
            <div className="text-4xl text-center my-10 font-bold">
                <h1>Books</h1>
            </div>
            <div className="lg:grid lg:grid-cols-3 gap-10">
                {
                    books.map(book => <Book key={book.id} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;