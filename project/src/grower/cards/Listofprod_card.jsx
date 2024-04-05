import { useState } from "react";
import { doremoveprodc } from "../Listofprod_controller";
import Listofprod_rem from "./Listofprod_rem";

export default function Listofprod_card(props,childern) {
    function showpic(data){
        let encodedppic = encodeURIComponent(data.item_pic);
        encodedppic="http://localhost:2007/public/uploads/" + encodedppic;
        return(encodedppic)
    }

    const [showdialog,setdialog]=useState(false);

    function removeconf(){
        setdialog(true);
    }

    async function doremoveprod(){
        const servMsg=await doremoveprodc(props);
        window.location.reload();

    }

    return (
        <div className=''>
            {showdialog && (
                <Listofprod_rem 
                    onClose={() => setdialog(false)} 
                    onConfirm={doremoveprod} 
                />
            )}
            <a href="#" className="mx-auto block w-[400px] h-11 p-4 m-4">
                <img
                    alt=""
                    src={showpic(props)}
                    className="h-[250px] w-full object-cover sm:h-80 lg:h-[250px]"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl">{props.item_name}</h3>
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={removeconf}
                >Delete
                </button>
            </a>

        </div>
    )
}