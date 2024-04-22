import { privateReq, publicAxios } from "../service/axios-config";

function doshowfullc(obj) {
    return privateReq.get(`grower/fetch-grower-token?email=${obj}`);
}

function doshowallc() {
    return privateReq.get(`grower/fetch-all-grower-token`);
}

export { doshowfullc, doshowallc }