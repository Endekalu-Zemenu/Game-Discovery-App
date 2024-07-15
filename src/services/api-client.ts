import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6daa7c024464455aa444019f47fa0558"
  }
})