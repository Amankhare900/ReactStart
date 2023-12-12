import navValues from "../helpers/navValues";
import House from "./house";
import HouseList from "./houseList";

const componentPicker = ({ currenNavLocation }) => {
    switch (currenNavLocation) {
        case navValues.home:
            return <HouseList />;
        case navValues.house:
            return <House />;
        default:
            return (
                <h3>
                    No component for navigation value {currentNavLocation} found
                </h3>
            );
    }
};

export default componentPicker;
