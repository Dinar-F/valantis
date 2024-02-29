import md5 from "crypto-js/md5";
import { password } from "../constants";
import { ItemsData } from "../types/types";

export const getToken = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const md5Token = md5(`${password}_${year}${month}${day}`).toString();
    return md5Token;
};

export const getUniqElements = (array: ItemsData[]) => {
    const newArray = array.filter((element, index, array) => {
        return array.map(item => item["id"]).indexOf(element["id"]) === index;
    });

    return newArray;
};