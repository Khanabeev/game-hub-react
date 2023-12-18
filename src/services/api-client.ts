import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e74122699adc41ef89abca995ac60e9c",
  },
});
