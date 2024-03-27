import { useEffect, useState } from "react";


const useData = () => {
    const [books, setBooks] = useState([]);
    

    useEffect(() => {
        fetch('/information.json')
            .then(res => res.json())
            .then(data => setBooks(data))
            .catch(error => console.error('Error fetching jobs:', error));
    }, []);
    return {books}
};

export default useData;