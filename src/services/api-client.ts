import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "f1f8d4b28557421cbef7bb7adf9cb9ce",
  },
});
