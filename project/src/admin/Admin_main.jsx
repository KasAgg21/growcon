import { useEffect, useState } from "react";
import { dofetchalluserc, dofetchallusersenc } from "./admin_controller";
import Filter from "./Filter";

export default function Admin_main() {

    const [obj, doupdateobj] = useState({ email: "", allowence: "" })
    const [unfilterdata, dosendunfilter] = useState([])
    const [filterdata, dosendfilter] = useState([])
    const [alloary, setalloary] = useState(["All"])
    const [typary, settypary] = useState(["All"])



    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function dofetchalluser() {
        const normaldata = await dofetchalluserc();
        const nordata = normaldata.data.userData;
        const sensdata = await dofetchallusersenc();
        const sedata = sensdata.data.userData;
        const JSONAry = nordata;
        const mergeddata = JSONAry.map(obj => {
            const matchingUserData = sedata.find(user => user.email === obj.email);

            if (matchingUserData) {
                return { ...obj, ...matchingUserData };
            } else {
                return obj;
            }
        });
        dosendunfilter((unfilterdata) => unfilterdata = mergeddata);
        const alloset = new Set;
        mergeddata.forEach((obj) => {
            alloset.add(obj.allowence)
        })
        const newAlloary = ["All", ...alloset];
        setalloary(newAlloary);
        const typset = new Set;
        mergeddata.forEach((obj) => {
            typset.add(obj.type)
        })
        const newTypary = ["All", ...typset];
        settypary(newTypary);
        dosendfilter(mergeddata);

    }

    function genCombo(obj) {
        return (
            <option value={obj}>{obj}</option>
        )
    }

    function dofilter(event) {
        if (event.target.value == "All") {
            dosendfilter(unfilterdata);
            return;
        }
        var fldata = unfilterdata.filter((obj) => {
            return (
                obj.allowence == event.target.value
            )
        });
        dosendfilter((filterdata) => filterdata = fldata);

    }

    useEffect(() => {
        dofetchalluser();
    }, [])


    function dotypfilter(event) {
        if (event.target.value == "All") {
            dosendfilter(unfilterdata);
            return;
        }
        var fldata = unfilterdata.filter((obj) => {
            return (
                obj.type == event.target.value
            )
        });
        dosendfilter((filterdata) => filterdata = fldata);
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">


                <div className="mt-8 block lg:hidden">
                    <button
                        className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600"
                    >
                        <span className="text-sm font-medium"> Filters & Sorting </span>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="size-4 rtl:rotate-180"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>

                <div className="mt-4 lg:mt-8 lg:grid lg:grid-cols-4 lg:items-start lg:gap-8">
                    <div className="hidden space-y-4 lg:block">

                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Filter by Allowance</label>
                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm"
                                onChange={dofilter}>
                                {alloary.map(genCombo)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Filter by Type</label>
                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm"
                                onChange={dotypfilter}>
                                {typary.map(genCombo)}
                            </select>
                        </div>
                    </div>

                </div>

                <div className="overflow-x-auto">
                    <Filter data={filterdata}></Filter>

                </div>

            </div>
        </section>
    )
}