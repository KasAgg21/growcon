import { useState } from 'react'
import '../index.css'
import { adduser_senc, addgrowerc, addconsc } from './user_controller';

export default function Signup() {

    const [obj, doupdateobj] = useState(
        {
            email: "",
            pass: "",
            type: "",
            allowence: ""
        }
    )

    function doUpdate(event) {
        const { name, value } = event.target;
        return (
            doupdateobj({ ...obj, [name]: value })
        )
    }

    async function adduser_sen() {
        const servMsg = await adduser_senc(obj);
        if (obj.type == "c") {
            addcons();
        }
        else if (obj.type == "g") {
            addgrower();
        }
        if (servMsg.data.status == true) {
            alert("User Created");
        }
        else
            alert("Duplicate")
    }
    async function addgrower() {
        const servMsg = await addgrowerc(obj);
        if (servMsg.data.status == true)
            alert("User Created")
        else
            alert("Duplicate")
    }
    async function addcons() {
        const servMsg = await addconsc(obj);
        if (servMsg.data.status == true)
            alert("User Created")
        else
            alert("Duplicate")
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
                            Welcome aboard to GrowCon!
                        </h2>
                        <p className="mt-4 leading-relaxed text-white/90">
                            Welcome to GrowCon! Get started by creating your account today. Join us in fostering a vibrant community where growers and consumers connect effortlessly. Sign up now to access a marketplace designed just for you. With GrowCon, discovering fresh produce and showcasing your harvest has never been simpler. Let's grow together and support local growers.
                        </p>
                    </div>
                </section>
                <main
                    className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
                >
                    <div className="max-w-xl lg:max-w-3xl">
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
                                Welcome aboard to GrowCon!

                            </h1>
                            <p className="mt-4 leading-relaxed text-gray-500">
                                Welcome to GrowCon! Get started by creating your account today. Join us in fostering a vibrant community where growers and consumers connect effortlessly. Sign up now to access a marketplace designed just for you. With GrowCon, discovering fresh produce and showcasing your harvest has never been simpler. Let's grow together and support local growers.

                            </p>
                        </div>
                        <form action="#" className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6">
                                <label htmlFor="Email" className="block text-lg font-medium text-gray-700"> Email </label>
                                <input
                                    type="email"
                                    id="Email"
                                    name="email"
                                    onChange={doUpdate}
                                    className="mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
                                />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="Password" className="block text-lg font-medium text-gray-700"> Password </label>
                                <input
                                    type="password"
                                    id="Password"
                                    name="pass"
                                    onChange={doUpdate}
                                    className="mt-1 h-10 w-full rounded-md border-gray-200 bg-white text-base text-gray-700 shadow-sm"
                                />
                            </div>
                            <select className='col-span-6 sm:col-span-3  rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm'
                                onChange={doUpdate}
                                name="type"
                            >
                                <option selected>Select Role</option>
                                <option value="g">Grower</option>
                                <option value="c">Consumer</option>
                            </select>
                            <div className="col-span-6">
                                <p className="text-sm text-gray-500">
                                    By creating an account, you agree to our
                                    <a href="#" className="text-gray-700 "> terms and conditions </a>
                                    and
                                    <a href="#" className="text-gray-700 "> privacy policy</a>.
                                </p>
                            </div>
                            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                                <button
                                    type="button"
                                    className="inline-block shrink-0 rounded-md border border-ge bg-ge px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-lge focus:outline-none focus:ring active:text-lge"
                                    onClick={adduser_sen}
                                >
                                    Create an account
                                </button>
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                    <a href="/login" className="text-gray-700 underline">Already have an account?</a>.
                                </p>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </section>
    )
}