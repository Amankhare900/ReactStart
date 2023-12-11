
import loadingStatus from "../helpers/loadingStatus";
const { useState } = require("react")

const useGetRequest = (url)=>{
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const get = async () => {
        setLoadingState(loadingStatus.isLoading);
        try{
            const response = await fetch(url);
            const houses = await response.json();
            setLoadingState(loadingStatus.loaded)
            return houses;
        } catch{
            setLoadingState(loadingStatus.hasErrored)
        }
    };
    return [get, loadingState];
};

export default useGetRequest;