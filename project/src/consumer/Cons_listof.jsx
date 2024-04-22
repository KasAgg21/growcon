import { useEffect, useState } from "react";
import { doallfetchprodwithtokenc, dofetchprodwithtokenc } from "../grower/Listofprod_controller";
import Cards from "./cards/Cards";
import ProdCardsFilter from "./cards/ProdCardsFilter";
import { doshowallc, doshowfullc } from "./Listof_controller";

export default function Cons_listof() {

    const [obj, doupdateobj] = useState({ email: "" })
    const [unfilterdata, dosendunfilter] = useState([])
    const [filterdata, dosendfilter] = useState([])
    const [cateary, setcateary] = useState(["All"])
    const [searchQuery, setSearchQuery] = useState("");
    const [cityary, setcityary] = useState(["All"])



    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function dofetchprod() {
        const response = await doallfetchprodwithtokenc();
        const servMsg = await doshowallc()
        let userData = servMsg.data.userData;
        const JSONAry = response.data.userData;
        const mergeddata = JSONAry.map(obj => {
            const matchingUserData = userData.find(user => user.email === obj.email);

            if (matchingUserData) {
                return { ...obj, ...matchingUserData };
            } else {
                return obj;
            }
        });
        dosendunfilter((unfilterdata) => unfilterdata = mergeddata);
        const cateset = new Set;
        mergeddata.forEach((obj) => {
            cateset.add(obj.prod_cate)
        })
        const newCateary = ["All", ...cateset];
        setcateary(newCateary);
        const cityset = new Set;
        mergeddata.forEach((obj) => {
            cityset.add(obj.city)
        })
        const newCityary = ["All", ...cityset];
        setcityary(newCityary);
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
                obj.prod_cate == event.target.value
            )
        });
        dosendfilter((filterdata) => filterdata = fldata);

    }

    function handleSearch(event) {
        setSearchQuery(event.target.value);

    }

    useEffect(() => {
        loademail();
        if (obj.email) {
            dofetchprod();
        };
    }, [, obj.email])

    useEffect(() => {
        const filteredData = unfilterdata.filter(filterByName);
        dosendfilter(filteredData);
    }, [searchQuery, unfilterdata]);

    function loademail() {
        const email = localStorage.getItem("email");
        doupdateobj(prevState => ({ ...prevState, email: email }));
    }

    function filterByName(product) {
        return product.item_name.toLowerCase().includes(searchQuery.toLowerCase());
    }

    function filterByCity(event) {
        if (event.target.value == "All") {
            dosendfilter(unfilterdata);
            return;
        }
        var fldata = unfilterdata.filter((obj) => {
            return (
                obj.city == event.target.value
            )
        });
        dosendfilter((filterdata) => filterdata = fldata);
    }

    return (
        <section>
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
                <header>
                    <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Produce </h2>

                    <p className="mt-4 max-w text-gray-500">
                        Explore our diverse marketplace with ease, where every search brings you closer to the freshest offerings from local growers. Whether you're seeking vibrant fruits, crisp vegetables, or other organic delights, our intuitive search functionality makes finding your favorites a breeze.
                    </p>
                </header>

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
                            <label htmlFor="Search" className="block text-base font-medium text-gray-700">
                                {" "}
                                Search by Item Name{" "}
                            </label>
                            <input
                                type="text"
                                id="Search"
                                className="mt-1 rounded border-0 text-base ring-1 ring-black"
                                onChange={handleSearch}
                            />
                        </div>
                        <div>
                            <label htmlFor="SortBy" className="block text-xs font-medium text-gray-700"> Filter by Category</label>
                            <select id="SortBy" className="mt-1 rounded border-gray-300 text-sm"
                                onChange={dofilter}>
                                {cateary.map(genCombo)}
                            </select>
                        </div>
                        <div>
                            <label htmlFor="CityFilter" className="block text-xs font-medium text-gray-700"> Filter by City </label>
                            <select id="CityFilter" className="mt-1 rounded border-gray-300 text-sm"
                                onChange={filterByCity}>
                                {cityary.map(genCombo)}
                            </select>
                        </div>

                    </div>

                </div>

                <div className="flex flex-wrap p-4 m-4" >
                    <ProdCardsFilter data={filterdata}></ProdCardsFilter>
                </div>

            </div>
        </section>
    )
}