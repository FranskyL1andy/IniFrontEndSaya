import axios from "axios";

axios.defaults.baseURL = "https://inibackendsaya-production.up.railway.app/api";

const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

export default axios;
