import axios from "axios";
export const apiJson = axios.create({
  baseURL:
    "https://techcrunch.com/wp-json/wp/v2/",
});
