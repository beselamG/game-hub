import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "730c70eafac74d17b55c922440342581",
  },
});