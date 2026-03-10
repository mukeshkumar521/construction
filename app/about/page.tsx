export default function About() {

  const teamImages = [
    "./constuction5.jpeg",
    "./constuction6.jpeg",
    "./constuction7.jpeg"
  ];

  return (
    <main className="min-h-screen">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">About Us</h1>
          <p className="text-xl mt-4 text-center">Learn about our company and mission</p>
        </div>
      </section>


      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            <div>
              <h2 className="text-4xl font-bold mb-6 text-black text-center">
                About High Professional Trading & Services Co.
              </h2>

              <p className="text-lg text-gray-700 mb-4 text-center">
                High Professional Trading and Services Co. is committed to delivering excellence in trading and contracting services across Qatar. Our mission is to provide reliable materials and skilled workmanship that meet international quality standards.
              </p>

              <p className="text-lg text-gray-700 text-center">
                We focus on integrity, professionalism, safety, and customer satisfaction in every project we undertake.
              </p>
            </div>


            <div className="rounded-lg overflow-hidden h-80 shadow-lg">
              <img
                src="./constuction8.jpeg"
                alt="Company Image"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </section>


      {/* Our Values */}
      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

            {[
              { title: 'Integrity', icon: '🎯' },
              { title: 'Professionalism', icon: '👔' },
              { title: 'Safety', icon: '🛡️' },
              { title: 'Excellence', icon: '⭐' }
            ].map((value, index) => (

              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition"
              >

                <div className="text-5xl mb-4">{value.icon}</div>

                <h3 className="text-2xl font-semibold text-black">
                  {value.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* Team Section */}
      <section className="py-16 bg-white">

        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Our Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {teamImages.map((img, index) => (

              <div
                key={index}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >

                <div className="h-48 overflow-hidden">
                  <img
                    src={img}
                    alt="Team Member"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">

                  <h3 className="text-xl font-semibold text-black mb-2">
                    Professional {index + 1}
                  </h3>

                  <p className="text-gray-700 mb-4">
                    Position / Department
                  </p>

                  <p className="text-gray-600 text-sm">
                    Experienced professional with years of expertise in construction and trading.
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </main>
  );
}