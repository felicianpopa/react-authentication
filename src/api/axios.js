import axios from "axios";

export default axios.create({
  // Set the base url so that we can use it everywhere in the project
  baseURL: "http://localhost:3500", // The nodejs server
});
