import Prodcardsfilter from "./Prodcardsfilter"
import "../index.css"
import { useState } from "react"
import { dofetchprodc } from "./Listofprod_controller"
export default function Listofprod() {

    const [obj, doupdateobj] = useState({ email: "" })

    const [unfilterdata, dosendunfilter] = useState([])

    const [filterdata, dosendfilter] = useState([])

    const [cateary, setcateary] = useState(["All"])

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }



    async function dofetchprod() {
        const response = await dofetchprodc(obj);
        const JSONAry = response.data.userData;
        dosendunfilter((unfilterdata)=>unfilterdata=JSONAry);
        const cateset = new Set;
        JSONAry.forEach((obj) => {
            cateset.add(obj.prod_cate)
        })
        const newCateary = ["All", ...cateset];
        setcateary(newCateary);
        dosendfilter(JSONAry);
        
    }



    function genCombo(obj) {
        return (
            <option value={obj}>{obj}</option>
        )
    }

    function dofilter(event){
        if(event.target.value=="All")
        {
            dosendfilter(unfilterdata);
            return;
        }
        var fldata=unfilterdata.filter((obj)=>{
            return(
                obj.prod_cate==event.target.value
            )
        });
        dosendfilter((filterdata)=>filterdata=fldata);

    }

    return (
        <div >
            <div className="sm:w-3/6">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        onChange={doUpdate}
                        onBlur={dofetchprod}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
            <select onChange={dofilter}>{cateary.map(genCombo)}</select>
            <div className="flex p-4 m-4" >
                <Prodcardsfilter data={filterdata}></Prodcardsfilter>
            </div>
        </div>
    )
}