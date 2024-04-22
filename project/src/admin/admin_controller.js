import { publicAxios } from "../service/axios-config";

function dofetchalluserc() {
    return publicAxios.get(`admin/fetch-all`);
}

function dofetchallusersenc() {
    return publicAxios.get(`admin/fetch-all-sen`);
}

function dochangealloc(obj) {
    return publicAxios.post(`admin/change-allo`, obj);
}

export { dofetchalluserc, dofetchallusersenc, dochangealloc };