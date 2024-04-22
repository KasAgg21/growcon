export default function Cons_Homepage() {
  return (
    <section className="bg-white-900 text-black">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Kickstart your healthy life</h2>

          <p className="mt-4 text-black-300">
            Welcome to your GrowCon dashboard, your gateway to a world of healthy and organic delights! Dive into a marketplace bursting with locally sourced produce, carefully curated for your well-being. Discover a bounty of nutritious options, from vibrant fruits to crisp vegetables, all grown with care by our community of organic farmers. With your GrowCon dashboard, effortlessly explore the freshest offerings, track your favorite organic growers, and nourish your body with goodness. Welcome to a healthier, more flavorful journey with GrowCon!
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-ge hover:shadow-lge"
            href="cons/cons_produce"
          >
            <img
              alt="Night"
              src="http://localhost:2007/public/search.png"
              className="h-16 sm:h-16 object-cover "
              viewBox="0 0 28 24"
            />


            <h2 className="mt-4 text-xl font-bold text-black">Search Produce</h2>

            <p className="mt-1 text-sm text-black-300">
              Find in your area
            </p>
          </a>

          <a
            className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-ge hover:shadow-lge"
            href="cons/cons_profile"
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


        </div>


      </div>
    </section>
  )
}