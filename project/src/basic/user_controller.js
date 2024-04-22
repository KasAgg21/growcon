import { publicAxios } from "../service/axios-config";

function adduser_senc(obj)
{
    var formdata = new FormData();
        if(obj.type=="g"){obj.allowence=2}
        else{obj.allowence=0}
        for (let prop in obj) {
            formdata.append(prop, obj[prop]);
        }
    return publicAxios.post("user/add-user",formdata);
}

function addgrowerc(obj)
{
    return publicAxios.post("grower/add-grower",obj);
}

function addconsc(obj)
{
    return publicAxios.post("cons/add-cons",obj);
}

function dologinfetchc(obj){
    return publicAxios.get(`user/user-login?email=${obj.email}&pass=${obj.pass}`);
}

export {adduser_senc, addgrowerc,dologinfetchc, addconsc};