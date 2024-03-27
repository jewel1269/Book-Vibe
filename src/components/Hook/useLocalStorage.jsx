import { useEffect, useState } from "react";
import { getFromLocalStorage, getFromLocalStorageInfo } from "../Utility/localStorage";


const useLocalStorage = () => {
    const [localData, setLocalData] = useState();
    const [localInfo, setLocalInfo] = useState();

    useEffect(() => { 
        setLocalData(getFromLocalStorage());
        setLocalInfo(getFromLocalStorageInfo());
    }, [])

    return {localData, localInfo};
};


export default useLocalStorage;