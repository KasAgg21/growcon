import { useState } from "react"
import { dologinfetchc } from "./user_controller";
import { useNavigate } from 'react-router-dom';
export default function Login() {

    let navigate = useNavigate();

    const [obj, doupdateobj] = useState({
        email: "",
        pass: ""
    })

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function dologinfetch() {
        const ServMsg = await dologinfetchc(obj);
        if (ServMsg.data.statusu == true) {
            let jtk = ServMsg.data.jtk;
            localStorage.setItem("token", jtk)
            localStorage.setItem("email", obj.email)
            if (ServMsg.data.type == "c") { navigate("/cons") }
            else if (ServMsg.data.type == "g") { navigate("/grower") }

        }
        else if (ServMsg.data.statusu == "pending") {
            localStorage.setItem("email", obj.email)
            alert("Please first fill details")
            navigate("/grower_pending")
        }
        else if (ServMsg.data.statusu == false) {
            alert("Blocked")
        }
    }

    return (
        <section className="bg-white">
            <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
                <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
                    <img
                        alt="Night"
                        src="http://localhost:2007/public/bg.png"
                        className="absolute inset-0 h-full w-full object-cover opacity-80"
                    />

                    <div className="hidden lg:relative lg:block lg:p-12">
                        <a className="block text-white" href="/">
                            <span className="sr-only">Home</span>
                            <img
                                    alt="Night"
                                    src="http://localhost:2007/public/icon.png"
                                    className="h-20 sm:h-20 object-cover rounded-full "
                                    viewBox="0 0 28 24"
                                />
                        </a>

                        <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                            Welcome to GrowCon!
                        </h2>

                        <p className="mt-4 leading-relaxed text-white/90">
                            Introducing GrowCon! Join us in creating a thriving community where growers and consumers come together seamlessly. Login now to discover a marketplace tailored for you. With GrowCon, browsing and selling fresh produce is easier than ever. Let's cultivate connections and support local growers.
                        </p>
                    </div>
                </section>

                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="">
                        <div className="relative -mt-16 block lg:hidden">
                            <a
                                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                                href="/"
                            >
                                <span className="sr-only">Home</span>
                                <img
                                    alt="Night"
                                    src="http://localhost:2007/public/icon.png"
                                    className="h-20 sm:h-20 object-cover rounded-full "
                                    viewBox="0 0 28 24"
                                />
                            </a>

                            <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
                            Welcome to GrowCon!
                            </h1>

                            <p className="mt-4 leading-relaxed text-gray-500">
                            Introducing GrowCon! Join us in creating a thriving community where growers and consumers come together seamlessly. Login now to discover a marketplace tailored for you. With GrowCon, browsing and selling fresh produce is easier than ever. Let's cultivate connections and support local growers.
.
                            </p>
                        </div>

                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">

                            <div className="col-span-6 w-96">
                                <label htmlFor="Email" className="block text-sm font-medium text-gray-700"> Email </label>

                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    onChange={doUpdate}
                                    className="mt-1 w-full rounded-md h-10 border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                />
                            </div>

                            <div className="col-span-6 ">
                                <label htmlFor="Password" className="block text-sm font-medium text-gray-700"> Password </label>

                                <input
                                    type="password"
                                    id="Password"
                                    name="pass"
                                    onChange={doUpdate}
                                    className="mt-1 w-full h-10 rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-md"
                                />
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="button"
                                    className="inline-block shrink-0 rounded-md border border-ge bg-ge px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-lge focus:outline-none focus:ring active:text-lge"
                                    onClick={dologinfetch}
                                >
                                    Log in
                                </button>

                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <a href="/signup" className="text-gray-700 underline">Don't have account ?</a>
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}