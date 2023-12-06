import currencyFormatter from "@/helpers/currencyFormatter";
import { MdDelete, MdAdd } from "react-icons/md";
import React from "react";

const houseRow = ({ id, address, country, price, deleteHouse }) => {
    return (
        <tr>
            <td>{address}</td>
            <td>{country}</td>
            <td>{currencyFormatter.format(price)}</td>
            <td onClick={() => deleteHouse(id)}>
                <MdDelete />
            </td>
        </tr>
    );
};
// const HouseRowMem = React.memo(houseRow);
export default houseRow;
// export { HouseRowMem };
