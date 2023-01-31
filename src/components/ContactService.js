import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/7oiden/my-json-server",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  getContacts() {
    return apiClient.get("/contacts");
  },
};
