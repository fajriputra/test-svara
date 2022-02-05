import axios from "axios";
import { apiHost } from "../config";

const instance = axios.create({
  baseURL: `${apiHost}`,
});

export default instance;
