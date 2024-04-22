import "../index.css"
import { PhotoIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import { doupdateprofilec } from "./grower_controller"
import { useNavigate } from "react-router-dom"

export default function Grower_pending() {

    const [obj, doupdateobj] = useState(
        {
            email: "",
            name: "",
            address: "",
            vill_town: "",
            city: "",
            category: "",
            adhaarno: "",
            state: "",
            phoneno: "",
            apic: null
        }
    )

    const [idobj, setprevid] = useState("");
    let navigate = useNavigate();

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function doupdateprofile() {

        if (obj.apic == null) {
            alert("First upload Adhaar")
            return;
        }

        const servMsg = await doupdateprofilec(obj);
        if (servMsg.data.status == true)
            alert("Update Profile")
        else {
            alert("Profile not updated")
        }
        alert("Wait for approval from admin");
        navigate("/")

    }

    function doapicupdate(event) {
        doupdateobj({ ...obj, ["apic"]: event.target.files[0] });
        setprevid(URL.createObjectURL(event.target.files[0]));
    }

    useEffect(() => {
        loademail();
    }, [])
    function loademail() {
        const email = localStorage.getItem("email");
        doupdateobj(prevState => ({ ...prevState, email: email }));
    }

    return (
        <form className="mx-auto w-9/12 flex-col justify-center">
            <div className="space-y-12 ">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-4xl p-8 font-semibold leading-7 text-gray-900">Grower Profile</h2>


                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">
                                ID Proof
                            </label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                    {idobj ? (
                                        <img
                                            src={idobj}
                                            alt="ID Proof Preview"
                                            className="h-full w-full text-gray-300"
                                        />
                                    ) : (
                                        <PhotoIcon className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                                    )}
                                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                        <label
                                            htmlFor="file-upload"
                                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                        >
                                            <span>Upload a file</span>
                                            <input id="file-upload" name="apic" type="file" className="sr-only"
                                                onChange={doapicupdate} />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-b border-gray-900/10 pb-12 m-8">

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-full">
                            <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                Full Name
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    onChange={doUpdate}
                                    value={obj.name}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>



                        <div className="sm:col-span-full">
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    readOnly
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onChange={doUpdate}
                                    value={obj.email}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-full">
                            <label htmlFor="phoneno" className="block text-sm font-medium leading-6 text-gray-900">
                                Phone Number
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="phoneno"
                                    id="phoneno"
                                    autoComplete="phoneno"
                                    onChange={doUpdate}
                                    value={obj.phoneno}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="col-span-full">
                            <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                Street address
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="address"
                                    id="street-address"
                                    autoComplete="street-address"
                                    onChange={doUpdate}
                                    value={obj.address}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2 sm:col-start-1">
                            <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                                City
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="city"
                                    id="city"
                                    onChange={doUpdate}
                                    value={obj.city}
                                    autoComplete="address-level2"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="region" className="block text-sm font-medium leading-6 text-gray-900">
                                State
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="state"
                                    id="state"
                                    onChange={doUpdate}
                                    value={obj.state}
                                    autoComplete="address-level1"
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="postal-code" className="block text-sm font-medium leading-6 text-gray-900">
                                Village/Town
                            </label>
                            <div className="mt-2">
                                <input
                                    type="text"
                                    name="vill_town"
                                    id="postal-code"
                                    autoComplete="postal-code"
                                    onChange={doUpdate}
                                    value={obj.vill_town}
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                    type="button"
                    className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    onClick={doupdateprofile}
                >
                    Save
                </button>
            </div>
        </form>
    )
}
