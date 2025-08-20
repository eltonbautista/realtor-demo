import { LISTINGS } from '@/lib/listings';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="w-full bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">Realtor Demo</h1>
        <div className="space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600">Buy</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Rent</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1560185008-5bf9f9b3bcea')] bg-cover bg-center h-[70vh] flex items-center justify-center">
        <div className="bg-black/50 p-8 rounded-lg text-center text-white max-w-2xl">
          <h2 className="text-4xl font-bold mb-4">Find Your Dream Home</h2>
          <p className="mb-6">Browse the best properties available in your area today.</p>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Enter city or ZIP..."
              className="flex-1 px-4 py-2 rounded-lg text-black"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Map LISTINGS */}

      {/* Featured Listings */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Featured Listings</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LISTINGS.map((listing) => (
        <div key={listing.id} className="bg-white rounded-xl shadow-md overflow-hidden">
          <img
            src={listing.images[0]}
            alt={listing.title}
            className="h-48 w-full object-cover"
          />
          <div className="p-4">
            <h4 className="font-semibold text-lg">{listing.title}</h4>
            <p className="text-gray-600">{listing.beds} Bed • {listing.baths} Bath • {listing.sqft} sqft</p>
          </div>
        </div>
      ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-6 mt-12 text-gray-600">
        © {new Date().getFullYear()} Realtor Demo. All rights reserved.
      </footer>
    </main>
  )
}
