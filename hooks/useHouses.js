import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";
const useHouses = (url) => {
    const [houses, setHouses] = useState([]);
    const [get, loadingState] = useGetRequest(url);
    useEffect(() => {
        (async () => {
            const houses = await get();
            setHouses(houses);
        })();
    }, [get]);
    return [houses, setHouses, loadingState];
};
export default useHouses;
