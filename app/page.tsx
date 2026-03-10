export default function Home() {

  const serviceImages = [
    "./constuction1.jpeg",
    "./constuction2.jpeg",
    "./constuction3.jpeg"
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Your Trusted Partner in Building Materials & Contracting Solutions in Qatar
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-gray-300">
                Delivering Quality, Reliability, and Professional Excellence in Every Project.
              </p>

              <div className="flex gap-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Request a Quote
                </button>

                <button className="border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition">
                  Contact Us
                </button>
              </div>
            </div>

            <div className="bg-gray-700 rounded-lg overflow-hidden h-96">
              <img
                src="./constuction1.jpeg"
                alt="Hero Image"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>


      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {serviceImages.map((img, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">

                <div className="h-48 overflow-hidden">
                  <img
                    src={img}
                    alt="Service Image"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-3">
                    Service {index + 1}
                  </h3>

                  <p className="text-gray-700">
                    Professional construction and contracting solutions tailored to your needs.
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Why Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            <div className="rounded-lg overflow-hidden h-80">
              <img
                src="./constuction3.jpeg"
                alt="Why Choose Us"
                className="w-full h-full object-cover"
              />
            </div>


            <div className="space-y-6">

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Quality Materials
                  </h3>

                  <p className="text-gray-700">
                    We source only the highest quality materials from trusted manufacturers.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    Professional Team
                  </h3>

                  <p className="text-gray-700">
                    Our experienced team delivers excellence in every project.
                  </p>
                </div>
              </div>


              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold">
                    ✓
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">
                    On-Time Delivery
                  </h3>

                  <p className="text-gray-700">
                    We ensure every project is completed on schedule and within budget.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Future?
          </h2>

          <p className="text-xl mb-8">
            Get in touch with our team today for a consultation.
          </p>

          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Get Started Now
          </button>

        </div>
      </section>

    </main>
  );
}