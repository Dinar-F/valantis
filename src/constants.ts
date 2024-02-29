export const password = "Valantis";
export const URL = "http://api.valantis.store:40000/";

export const defaultLimit = 50;

export const actions = {
    filter: "filter",
    getItems: "get_items",
    getIds: "get_ids",
    getFields: "get_fields",
};

export const defaultFilter = {
    name: "price",
    value: ""
};

export const selectOptions = [
    { name: "Price", value: "price" },
    { name: "Name", value: "product" },
    { name: "Brand", value: "brand" },
];