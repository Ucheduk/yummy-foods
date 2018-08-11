import axios from "axios";

const instance = axios.create({
  baseURL: "https://sweet-burger.firebaseio.com/"
});

export default instance;
