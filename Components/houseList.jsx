import { useState } from "react";
import HouseRow from "./houseRow";
import AddHouse from "./addHouse";
import useHouses from "../hooks/useHouses";
import loadingStatus from "@/helpers/loadingStatus";
import LoadingIndicator from "./loadingIndicator";
const HouseList = () => {
    const [url] = useState("/api/houses");
    const [houses, setHouses, loadingState] = useHouses(url);
    if (loadingState != loadingStatus.loaded) {
        return <LoadingIndicator loadingState={loadingState} />;
    }
    const insertHouse = (data) => {
        let request;
        (async () => {
            const response = await fetch(url, {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
            request = await response.json();
            console.log(request);
            setHouses([...request]);
        })();
    };
    const deleteHouse = (currId) => {
        let request;
        (async () => {
            const response = await fetch(url, {
                method: "DELETE",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(currId),
            });
            request = await response.json();
        })();
        setHouses(houses.filter(({ id }) => id != currId));
    };
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                        <th>Operation</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map((h) => (
                        // <HouseRowMem key={h.id} {...{ ...h, deleteHouse }} />
                        <HouseRow
                            key={h.id}
                            {...{
                                house: h,
                                deleteHouse,
                            }}
                        />
                    ))}
                </tbody>
            </table>
            <AddHouse {...{ insertHouse }} />
        </>
    );
};

export default HouseList;
