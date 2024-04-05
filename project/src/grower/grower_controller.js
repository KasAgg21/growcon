import { publicAxios } from "../service/axios-config";

function dofetchdatac(obj)
{
    return publicAxios.get(`grower/fetch-grower?email=${obj.email}`);
}

function doupdateprofilec(obj)
{
    var formdata = new FormData();
        for (let prop in obj) {
            formdata.append(prop, obj[prop]);
        }
    return publicAxios.post(`grower/update-grower`,formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
}


export {dofetchdatac, doupdateprofilec};