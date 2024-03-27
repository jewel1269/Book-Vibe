import { toast } from "react-toastify";

// localStorage.js
export const saveLocalStorageData = (data) => {
    const readStatus = JSON.parse(localStorage.getItem("book") || "[]"); 
    const existedData = readStatus.find(item => item.id === data.id); 
    if (!existedData) {
        readStatus.push(data);
        localStorage.setItem("book", JSON.stringify(readStatus));
        toast.success("Successfully Added listed books")
    } else {
        toast.error("Books already added");
    }
};



export const getFromLocalStorage = () =>{
    const data = JSON.parse(localStorage.getItem("book") || "[]");
    return data;

}





export const saveLocalStorageInfo = (info) => {
    const wishlistStatus = JSON.parse(localStorage.getItem("wish") || "[]");
    const existedInfo = wishlistStatus.find(item => item.id === info.id);
    
    if (!existedInfo) {
        wishlistStatus.push(info);
        localStorage.setItem("wish", JSON.stringify(wishlistStatus)); 
        toast.success("Successfully Added wishlist book"); 
    } else {
        toast.error("Books already added");
    }
};

export const getFromLocalStorageInfo = () => {
    const data = JSON.parse(localStorage.getItem("wish") || "[]");
    return data;
};
