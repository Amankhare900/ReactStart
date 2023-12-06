import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { InputGroup } from "react-bootstrap";
import cssServices from "./cssServices";
import { input } from "@/Components/banner.module.css";
const AddHouse = ({ insertHouse }) => {
    const [details, setDetails] = useState({
        id: Date.now(),
        address: "",
        country: "",
        price: "",
    });
    const setInput = (key) => (e) =>
        setDetails({ ...details, [key]: e.target.value });
    const resetInput = () => {
        setDetails({
            id: Date.now(),
            address: "",
            country: "",
            price: "",
        });
    };
    return (
        <div className="row">
            <div className="col-11 row">
                <InputGroup as="div" className="row">
                    <Form.Control
                        size="sm"
                        type="text"
                        value={details.address}
                        className={cssServices("mx-2 col-6", input)}
                        placeholder="Address"
                        onChange={setInput("address")}
                    />
                    <Form.Control
                        size="sm"
                        type="text"
                        value={details.country}
                        className={cssServices("mx-2 col-6", input)}
                        placeholder="Country"
                        onChange={setInput("country")}
                    />
                    <Form.Control
                        size="sm"
                        type="text"
                        value={details.price}
                        placeholder="price"
                        className={cssServices("mx-2 col-6", input)}
                        onChange={setInput("price")}
                    />
                </InputGroup>
            </div>
            <button
                className="btn btn-primary col-1"
                onClick={() => {
                    insertHouse(details), resetInput();
                }}
            >
                Add
            </button>
        </div>
    );
};

export default AddHouse;
