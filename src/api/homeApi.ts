import axios from "axios";

export const getProductList = () =>
    axios.get(`https://fakestoreapi.com/products`).then((res) => res?.data);
