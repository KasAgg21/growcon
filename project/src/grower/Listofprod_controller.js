import { privateReq, publicAxios } from "../service/axios-config";


function dofetchprodc(obj) {
    return publicAxios.get(`prod/all-prod?email=${obj.email}`);
}

function doremoveprodc(obj) {
    return publicAxios.get(`prod/delete-prod?id=${obj._id}`);
}

function dofetchprodwithtokenc(obj) {
    return privateReq.get(`prod/all-prod-token?email=${obj.email}`);
}

function doallfetchprodwithtokenc(obj) {
    return privateReq.get(`prod/all-all-prod-token`);
}

export { dofetchprodc, doremoveprodc, dofetchprodwithtokenc, doallfetchprodwithtokenc };