import React, { useState, useCallback } from "react";
import Banner from "@/Components/banner";
import navValues from "@/helpers/navValues";
import ComponentPicker from "./componentPicker";
const navigationContext = React.createContext(navValues.home);
const App = () => {
    const navigate = useCallback((navTo, param) => {
        return setNav({ current: navTo, param, navigate });
    }, []);
    const [nav, setNav] = useState({ current: navValues.home, navigate });
    return (
        <navigationContext.Provider value={nav}>
            <Banner>
                <div className="themeFontColor text-center">
                    Providing houses all over the world
                </div>
            </Banner>
            {<ComponentPicker currenNavLocation={nav.current} />}
        </navigationContext.Provider>
    );
};

export { navigationContext };
export default App;
