import React from "react";
import Banner from "@/Components/banner";
import HouseList from "./houseList";
const App = () => {
    return (
        <>
            <Banner headerText="Providing houses all over the world" />
            <HouseList />
        </>
    );
};

export default App;
