import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Read from "../Read/Read";
import useLocalStorage from "../Hook/useLocalStorage";
import Wishlisted from "../Wishlist/WishListed";

const ListedBook = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const [sortBy, setSortBy] = useState("");
    const { localData } = useLocalStorage();
    const { localInfo } = useLocalStorage();

    const sortBooks = (books) => {
        switch (sortBy) {
            case "Rating":
                return books.slice().sort((a, b) => b.rating - a.rating);
            case "Number Of page":
                return books.slice().sort((a, b) => a.totalPages - b.totalPages);
            case "Publishing Year":
                return books.slice().sort((a, b) => a.yearOfPublishing - b.yearOfPublishing);
            default:
                return books;
        }
    };

    return (
        <div>
            <div className="h-32 border rounded-2xl w-auto shadow-2xl lg:mt-10 bg-slate-100">
                <h1 className="lg:text-4xl text-2xl text-center mt-8 font-bold">Selected Books</h1>
            </div>

            <div>
                <select className="select select-accent lg:ml-[42%] bg-green-300 text-black font-bold lg:mt-14 lg:mb-20 mt-5 mb-5 w-32 max-w-xs" onChange={(e) => setSortBy(e.target.value)}>
                    <option  defaultValue>Sort By</option>
                    <option>Rating</option>
                    <option>Number Of page</option>
                    <option>Publishing Year</option>
                </select>
            </div>
            <Tabs selectedIndex={tabIndex} onSelect={index => setTabIndex(index)}>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Book</Tab>
                </TabList>
                <TabPanel>
                    <div className="grid lg:grid-cols-1 gap-10 mt-10 lg:ml-36 lg:mr-16">
                        {localData && sortBooks(localData).map(item => <Read key={item.id} item={item}></Read>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="grid lg:grid-cols-1 gap-10 mt-10 lg:ml-36 lg:mr-16">
                        {localInfo && sortBooks(localInfo).map(wish => <Wishlisted key={wish.id} wish={wish}></Wishlisted>)}
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ListedBook;
