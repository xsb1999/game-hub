import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "839a151985f54964bea065e606e95c91",
  },
});
