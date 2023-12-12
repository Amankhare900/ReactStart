import React, { useContext } from "react";
import { logo, logoHeader } from "@/Components/banner.module.css";
import cssServices from "./cssServices";
import { navigationContext } from "./app";
import navValues from "@/helpers/navValues";

export default ({ headerText, children }) => {
    const { navigate } = useContext(navigationContext);
    return (
        <header className="row mb-4">
            {children}
            <div className="col-5">
                <img
                    onClick={() => {
                        navigate(navValues.home);
                    }}
                    src="/GloboLogo.png"
                    className={logo}
                    alt="logo"
                />
            </div>
            <div className={cssServices("col-7 mt-5", logoHeader)}>
                {headerText}
            </div>
        </header>
    );
};
