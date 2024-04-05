import { useState } from "react"
import "../index.css"
import { doaddprodc } from "./Availprod_controller"
export default function Availprod() {

    const [obj, doupdateobj] = useState(
        {
            email:"",
            prod_cate:"",
            item_name:"",
            item_pic:null

        }
    )

    const [ipobj,ipupdateobj]=useState("");

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function doaddprod() {
        const servMsg = await doaddprodc(obj);
        if (servMsg.data.status == true)
            {
                alert("Product Listed");
            }
        else
            alert("Error")
    }

    function doipicupdate(event) {
        doupdateobj({ ...obj, ["item_pic"]: event.target.files[0] });
        ipupdateobj(URL.createObjectURL(event.target.files[0]));
    }


    return (
        
        <form className="mx-auto w-9/12 flex-col justify-center">
            <h2 className="text-4xl p-8 font-semibold leading-7 text-gray-900">List out Item</h2>
            <div className="flow-root mt-10 ">
                <dl className="-my-3 divide-y divide-gray-100 text-sm">
                    <div className="sm:col-span-full">
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
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>



                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                            Product Category
                        </label>
                        <select 
                        onChange={doUpdate}
                        name="prod_cate"
                        className='col-span-6 sm:col-span-3  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'>
                            <option selected>Select Product</option>
                            <option value="d">Diary</option>
                            <option value="v">Veg</option>
                            <option value="nv">Non-Veg</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Item
                            </label>
                            <div className="mt-2">
                                <input
                                    id="item"
                                    name="item_name"
                                    type="text"
                                    onChange={doUpdate}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                        <div className="sm:col-span-2">
                            <label htmlFor="photo" className="block text-lg font-medium leading-6 text-gray-900">
                                Product Picture
                            </label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <img
                                        src={ipobj}
                                        alt="Product Picture"
                                        className="h-20 w-20 object-cover rounded-full"
                                    />
                                <input id="file-upload"
                                    name="ppic"
                                    onChange={doipicupdate}
                                    type="file"
                                    className="rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-1 py-3 sm:grid-cols-3 sm:gap-4">
                    <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={doaddprod}
                >
                    Save
                </button>
                    </div>
                </dl>
            </div>
        </form>
    )
}