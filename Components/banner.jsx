import React from "react";
import { logo, logoHeader } from "@/Components/banner.module.css";

import cssServices from "./cssServices";
export default ({ headerText }) => {
    return (
        <header className="row mb-4">
            <div className="col-5">
                <img src="/GloboLogo.png" className={logo} alt="logo" />
            </div>
            <div className={cssServices("col-7 mt-5", logoHeader)}>
                {headerText}
            </div>
        </header>
    );
};
