import { Link } from 'react-router-dom';

export default function Landingpage() {
    return (
        < section
            className="relative bg-[url(http://localhost:2007/public/bg.png)] bg-cover bg-center bg-no-repeat"
        >
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
            >
                <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
                        Let us Support

                        <strong className="block font-extrabold text-or"> Local Farmers. </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
                        Buy different types of products from local growers.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <Link
                            to="/signup"
                            className="block w-full rounded bg-ge px-12 py-3 text-sm font-medium text-white shadow hover:bg-lge focus:outline-none focus:ring active:bg-lge sm:w-auto"
                        >
                            Register
                        </Link>

                        <a
                            href="/login"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-ge shadow hover:text-lge focus:outline-none focus:ring active:text-lge sm:w-auto"
                        >
                            Login
                        </a>
                    </div>
                </div>
            </div>

        </section >
    )
}