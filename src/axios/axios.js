import axios from "axios";

export default axios.create({
  baseURL: "https://electric-store-parts.firebaseio.com/",
});
