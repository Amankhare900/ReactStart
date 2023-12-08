import { useEffect, useState } from "react";
import HouseRow from "./houseRow";
import AddHouse from "./addHouse";

const HouseList = () => {
    const [houses, setHouses] = useState([]);
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            setHouses(houses);
        })();
    }, []);
    const insertHouse = (value) => {
        setHouses([...houses, value]);
    };
    const deleteHouse = (currId) => {
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
                        <HouseRow key={h.id} {...{ ...h, deleteHouse }} />
                    ))}
                </tbody>
            </table>
            <AddHouse {...{ insertHouse }} />
        </>
    );
};

export default HouseList;
