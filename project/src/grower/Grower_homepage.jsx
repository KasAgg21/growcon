export default function Grower_Homepage() {
    return (
        <section className="bg-white-900 text-black">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
                <div className="mx-auto max-w text-center">
                    <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your marketing</h2>

                    <p className="mt-4 text-black-300">
                        Welcome to your GrowCon dashboard, where your organic harvest thrives! Take charge of your farm-to-table journey with tools designed to elevate your growing experience. Showcase your healthy and organic produce to a community of eager consumers, highlighting the care and dedication behind every crop. Manage your listings with ease and connect with buyers who share your passion for sustainable agriculture. Your GrowCon dashboard is your partner in cultivating connections and sharing the goodness of your harvest with the world. Welcome to a greener, more fruitful future with GrowCon!
                    </p>
                </div>

                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-ge hover:shadow-lge"
                        href="grower/grower_profile"
                    >
                        <img
              alt="Night"
              src="http://localhost:2007/public/person.png"
              className="h-16 sm:h-16 object-cover "
              viewBox="0 0 28 24"
            />


                        <h2 className="mt-4 text-xl font-bold text-black">Profile</h2>

                        <p className="mt-1 text-sm text-black-300">
                            Update your details
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-ge hover:shadow-lge"
                        href="grower/grower_addprod"
                    >
<img
              alt="Night"
              src="http://localhost:2007/public/pencil.png"
              className="h-16 sm:h-16 object-cover "
              viewBox="0 0 28 24"
            />

                        <h2 className="mt-4 text-xl font-bold text-black">Add Produce</h2>

                        <p className="mt-1 text-sm text-black-300">
                            List out your produce
                        </p>
                    </a>

                    <a
                        className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-ge hover:shadow-lge"
                        href="grower/grower_showprod"
                    >
<img
              alt="Night"
              src="http://localhost:2007/public/note.png"
              className="h-16 sm:h-16 object-cover "
              viewBox="0 0 28 24"
            />

                        <h2 className="mt-4 text-xl font-bold text-black">Show Produce</h2>

                        <p className="mt-1 text-sm text-black-300">
                            See your listed produce
                        </p>
                    </a>
                </div>


            </div>
        </section>
    )
}