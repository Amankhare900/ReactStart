import { useEffect, useState } from "react";
import useGetRequest from "./useGetRequest";

const useBids = (houseId) => {
    const [bids, setBids] = useState([]);
    const [get, loadingState] = useGetRequest(`/api/bids/${houseId}`);

    useEffect(() => {
        const fetchBids = async () => {
            const bids = await get();
            setBids(bids);
        };
        fetchBids();
    }, [get]);

    const postBid = async (bid) => {
        return fetch(`/api/bids/${bid.houseId}`, {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bid),
        });
    };

    const addBid = (bid) => {
        postBid(bid)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setBids([...bids, data]);
            });
    };

    return { bids, loadingState, addBid };
};

export default useBids;
