import { useState, useCallback } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useGetRequest = (url) => {
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);
    const get = useCallback(async () => {
        setLoadingState(loadingStatus.isLoading);
        try {
            const response = await fetch(url);
            const houses = await response.json();
            setLoadingState(loadingStatus.loaded);
            return houses;
        } catch {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [url]);
    return [get, loadingState];
};

export default useGetRequest;
