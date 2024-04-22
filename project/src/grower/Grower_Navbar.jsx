import Growerprofile from "./Growerprofile";
import Availprod from "./Availprod";
import Listofprod from "./Listofprod";
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import Errornotfound from "../basic/Errornotfound";
import Grower_Homepage from "./Grower_homepage";
import Footer from "../basic/Footer";
import React from "react";
export default function Grower_Navbar() {
  let navigate = useNavigate();
  function logout() {
    localStorage.removeItem("token");
    navigate("/login")
  }
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <NavLink className="block text-teal-600" to="">
            <span className="sr-only">Home</span>
            <img
              alt="Night"
              src="http://localhost:2007/public/icon.png"
              className="h-14 sm:h-14 object-cover rounded-full "
              viewBox="0 0 28 24"
            />
          </NavLink>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <NavLink className="text-gray-500 text-base font-bold transition hover:text-lge" to="grower_profile"> Profile </NavLink>
                </li>

                <li>
                  <NavLink className="text-gray-500 text-base font-bold transition hover:text-lge" to="grower_addprod"> Add Product </NavLink>
                </li>

                <li>
                  <NavLink className="text-gray-500 text-base font-bold transition hover:text-lge" to="grower_showprod"> Show Products </NavLink>
                </li>

              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <button
                  type="button"
                  className="hidden rounded-md bg-gray-100 px-5 py-2.5 text-sm font-bold text-lge transition hover:text-white hover:bg-ge sm:block"
                  onClick={logout}
                >
                  Logout
                </button>
              </div>

              <button
                className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
              >
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="">
        <Routes>
          <Route path="/" element={<Grower_Homepage></Grower_Homepage>}></Route>
          <Route path="/grower_profile" element={<Growerprofile></Growerprofile>}></Route>
          <Route path="/grower_addprod" element={<Availprod></Availprod>}></Route>
          <Route path="/grower_showprod" element={<Listofprod></Listofprod>}></Route>
          <Route path="*" element={<Errornotfound></Errornotfound>}></Route>
        </Routes>
      </main>
    </>
  )
}