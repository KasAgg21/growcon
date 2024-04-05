import { publicAxios } from "../service/axios-config";


function dofetchprodc(obj) {
    return publicAxios.get(`prod/all-prod?email=${obj.email}`);
}

function doremoveprodc(obj) {
    return publicAxios.get(`prod/delete-prod?id=${obj._id}`);
}


export { dofetchprodc, doremoveprodc };