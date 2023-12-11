import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";
const useHouses = () =>{
    const url = "/api/houses";
    const [houses, setHouses] = useState([]);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    useEffect(() => {
        (async () => {
            try{
                const response = await fetch(url);
                const houses = await response.json();
                setHouses(houses);
                setLoadingState(loadingStatus.loaded)
            } catch{
                setLoadingState(loadingStatus.hasErrored)
            }
        })();
    }, []);
    return [houses, setHouses, loadingState];
}
export default useHouses;