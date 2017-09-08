var axios = require("axios");

const key = 'f736507c07904df89265c07c3620a044';
const TESCO_API_URL = 'https://dev.tescolabs.com/grocery/products/?';
const TESCO_BARCODE = 'https://dev.tescolabs.com/product/';

export const getItems = (product) => {
  const prodcut = encodeURIComponent(product);
  const requestUrl = `${TESCO_API_URL}query=${product}&offset=0&limit=10`;

  return axios.get(requestUrl, {
    headers: { "Ocp-Apim-Subscription-Key": key }
  });

  ;
};
