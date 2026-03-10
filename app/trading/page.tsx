export default function Trading() {
  const products = [
    { name: 'Tiles (Floor & Wall Tiles)', icon: '🏠', description: 'Premium quality floor and wall tiles' },
    { name: 'Marble & Granite', icon: '🪨', description: 'Natural stone for elegant finishes' },
    { name: 'Sanitaryware', icon: '🚿', description: 'Modern bathroom fixtures' },
    { name: 'Ceramic Products', icon: '🏺', description: 'High-grade ceramic materials' },
    { name: 'Electrical Materials', icon: '⚡', description: 'Complete electrical solutions' },
    { name: 'Plumbing Materials', icon: '🔧', description: 'Durable plumbing components' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Trading Division</h1>
          <p className="text-xl mt-4 text-center">High-Quality Building Materials & Construction Supplies</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700">
              We source high-quality materials from trusted manufacturers to ensure durability, elegance, and long-term performance in every project.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                  <div className="text-6xl">{product.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{product.name}</h3>
                  <p className="text-gray-700 mb-4">{product.description}</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Materials */}
      <section className="py-16 bg-white">
  <div className="container mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-12 text-black">
      Why Choose High Professional Trading?
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

      <div>
        <div className="space-y-4">

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Proven Quality
              </h3>
              <p className="text-gray-700">
                All materials are sourced from certified manufacturers with international standards.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Competitive Pricing
              </h3>
              <p className="text-gray-700">
                We offer the best value without compromising on quality.
              </p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="text-lg font-semibold text-black mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-700">
                Reliable supply chain ensuring timely delivery across Qatar.
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Image Section */}
      <div className="rounded-lg overflow-hidden h-80 shadow-lg">
        <img
          src="./constuction9.jpeg"
          alt="Building Materials"
          className="w-full h-full object-cover"
        />
      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Quality Building Materials?</h2>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Request Quote
          </button>
        </div>
      </section>
    </main>
  );
}