import { useEffect, useState } from "react";
import useData from "../Hook/useData";
import { useParams } from "react-router-dom";
import {  saveLocalStorageData, saveLocalStorageInfo } from "../Utility/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookInfo = () => {
    const [data, setData] = useState({});
    const [info, setInfo] = useState({});
    const [bookRead, setBookRead] = useState(false); 
    const { books } = useData();
    const { id } = useParams();

    useEffect(() => {
        if (books) {
            const singleData = books.find(read => read.id == id);
            setData(singleData);
        }
    }, [books, id]);

    useEffect(() => {
        if (books) {
            const singleInfo = books.find(wish => wish.id == id);
            setInfo(singleInfo)
        }
    }, [books, id]);

    

    
    const handleRead = () => {
        saveLocalStorageData(data);
        setBookRead(true); 
    };

    
    const handleWish = () => {
        if (bookRead) {
            setBookRead(true)
            toast.error("This book is already selected for reading. You cannot add it to the wishlist again.");
        } else {
            saveLocalStorageInfo(info);
        }
    };

    return (
        <div className="card lg:card-side border lg:w-[1600px] lg:ml-[10%]  mt-16 bg-base-100 shadow-xl">
            <figure><img className="border rounded-2xl lg:w-[800px] lg:h-[600px] p-1" src={data?.image} alt="Album" /></figure>
            <div className="card-body lg:w-[800px">
                <h2 className="card-title text-4xl font-bold ">{data?.bookName}</h2>
                <h2 className="card-title">By: {data?.author}</h2>
                <hr />
                <h1>{data?.category}</h1>
                <hr />
                <p><span className="text-xl font-bold">Review: </span>  {data?.review}</p>
                <div className="card-actions lg:my-5 ">
                    <h1 className="text-2xl font-bold">Tag:</h1>
                    <button className="btn btn-sm mt-1">#{data?.tags}</button>
                    <button className="btn btn-sm mt-1">#{data?.tag}</button>
                </div>
                <br />
                <hr />
                <div className="text-xl ">
                    <h1 className="flex gap-24 ">Number of Page:   <span className="font-semibold text-start">{data?.totalPages}</span></h1>
                    <h1 className="flex gap-24 ">Publisher:         <span className="font-semibold text-start lg:ml-16">{data?.publisher}</span></h1>
                    <h1 className="flex gap-24 ">Year Of Publish :  <span className="font-semibold text-start lg:ml-1">{data?.yearOfPublishing}</span></h1>
                    <h1 className="flex gap-24 ">Rating :  <span className="font-semibold text-start lg:ml-20">{data?.rating}</span></h1>
                </div>
                <div className="flex gap-3 mt-3">
                    <button onClick={handleRead} className="btn btn-outline btn-success">Read</button>
                    <button onClick={handleWish} className="btn btn-active btn-accent" disabled={bookRead}>Wishlist</button>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default BookInfo;
