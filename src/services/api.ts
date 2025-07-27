import axios from "axios";

export const api = axios.create({
  // baseURL:'https://api.helpdeskapp.site',
  baseURL:'http://localhost:3000'
})