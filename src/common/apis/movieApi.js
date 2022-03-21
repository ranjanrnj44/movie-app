import axios from "axios";

//create base url
export default axios.create({
  baseURL: "http://www.omdbapi.com",
});
