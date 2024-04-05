import { publicAxios } from "../service/axios-config";


function doaddprodc(obj)
{
    var formdata = new FormData();
        for (let prop in obj) {
            formdata.append(prop, obj[prop]);
        }
    return publicAxios.post(`prod/avail-prod`,formdata, { headers: { 'Content-Type': 'multipart/form-data' } });
}




export {doaddprodc};