import currencyFormatter from "@/helpers/currencyFormatter";
import { MdDelete, MdAdd } from "react-icons/md";
import { useContext } from "react";
import React from "react";
import navValues from "@/helpers/navValues";
import { navigationContext } from "./app";

const houseRow = ({ house, deleteHouse }) => {
    const { navigate } = useContext(navigationContext);
    return (
        <tr>
            <td onClick={() => navigate(navValues.house, house)}>
                {house.address}
            </td>
            <td>{house.country}</td>
            {house.price && (
                <td
                    className={`${house.price >= 500000 ? "text-primary" : ""}`}
                >
                    {currencyFormatter.format(house.price)}
                </td>
            )}
            <td onClick={() => deleteHouse(house.id)}>
                <MdDelete />
            </td>
        </tr>
    );
};
// const HouseRowMem = React.memo(houseRow);
export default houseRow;
// export { HouseRowMem };
