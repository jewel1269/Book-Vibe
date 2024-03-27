import { useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";


const Book = ({ book }) => {
    
    


    return (
        <NavLink to={`/bookInfo/${book.id}`} className="flex lg:ml-20 lg:mr-20 flex-col lg:mt-0 mt-5 max-w-lg p-6 space-y-6 overflow-hidden rounded-2xl shadow-2xl dark:bg-gray-50  dark:text-gray-800">

            <div>
                <img src={book?.image} alt="" className="object-cover w-full border mb-4 rounded-2xl h-56 sm:h-96 p-1  dark:bg-gray-500" />
                <div className="flex gap-2">
                    <button className="btn btn-active btn-accent">{book?.tags}</button>
                    <button className="btn btn-active btn-accent">{book?.tag}</button>
                </div>
                <h2 className="mb-1 text-2xl font-semibold">{book?.bookName}</h2>
                <p className="text-sm font-semibold  ">By: {book?.author}</p>
            </div>
            <hr />
            <div className="flex flex-wrap justify-between">
                <h1 className="text-black font-bold">{book?.category}</h1>
                <div className="flex space-x-2 text-sm text-gray-400 dark:text-gray-600">

                    <button type="button" className="flex items-center text-black  p-1 space-x-1.5">
                        <span className="font-bold text-xl">{book?.rating}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>

                    </button>
                </div>
            </div>
        </NavLink>
    );
};

export default Book;