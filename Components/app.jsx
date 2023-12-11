import React, { useState } from "react";
import Banner from "@/Components/banner";
import HouseList from "./houseList";
import House from "./house";
const App = () => {
    const [selectedHouse, setSelectedHouse] = useState();
    const setSelectedHouseWrapper = (house) => {
        setSelectedHouse(house);
    };
    return (
        <>
            <Banner>
                <div>Providing houses all over the world</div>
            </Banner>
            {selectedHouse ? (
                <House house={selectedHouse} />
            ) : (
                <HouseList setSelectedHouse={setSelectedHouseWrapper} />
            )}
        </>
    );
};

export default App;
