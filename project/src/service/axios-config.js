import axios from "axios";

let baseURL="http://localhost:2007/";

let publicAxios=axios.create({baseURL});

export {publicAxios}; 