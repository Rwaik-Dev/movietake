import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    language: "pt-BR",
    api_key: "4f621c3fcd5be733ca83f59444029b22",
  },
});

export default api;
