export default function Contracting() {
  const services = [
    { name: 'Building Construction', icon: '🏗️', description: 'Complete building construction solutions' },
    { name: 'MEP Works', icon: '⚙️', description: 'Mechanical, Electrical & Plumbing systems' },
    { name: 'Glass Fitting & Aluminum Works', icon: '🪟', description: 'Modern glass and aluminum installations' },
    { name: 'Interior & Exterior Finishing', icon: '🎨', description: 'Professional finishing touches' },
    { name: 'Building Maintenance Services', icon: '🔧', description: 'Ongoing maintenance and repairs' },
    { name: 'Renovation & Repair Works', icon: '🛠️', description: 'Complete renovation solutions' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contracting & Services</h1>
          <p className="text-xl mt-4 text-center">Professional Construction and Contracting Solutions</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 font-semibold">
              Our experienced team ensures every project is delivered on time, within budget, and to the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                  <div className="text-5xl">{service.icon}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-black mb-2">{service.name}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Expertise */}
     <section className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Expertise</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      {/* Image */}
      <div className="rounded-lg overflow-hidden h-80 shadow-lg">
        <img
          src="./constuction10.jpeg"
          alt="Project Image"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="space-y-6">

        <div>
          <h3 className="text-2xl font-semibold text-orange-500 mb-3">
            ✓ Skilled Workforce
          </h3>
          <p className="text-gray-700">
            Our team comprises trained professionals with years of industry experience.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-orange-500 mb-3">
            ✓ Quality Equipment
          </h3>
          <p className="text-gray-700">
            We use modern, state-of-the-art equipment for all projects.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-orange-500 mb-3">
            ✓ Safety First
          </h3>
          <p className="text-gray-700">
            We maintain the highest safety standards on all job sites.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-orange-500 mb-3">
            ✓ On-Time Delivery
          </h3>
          <p className="text-gray-700">
            We guarantee projects are completed as scheduled.
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Consultation', description: 'We understand your needs' },
              { step: '2', title: 'Planning', description: 'Detailed project planning' },
              { step: '3', title: 'Execution', description: 'Professional implementation' },
              { step: '4', title: 'Completion', description: 'Quality assurance' }
            ].map((process, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-semibold text-black mb-2">{process.title}</h3>
                <p className="text-gray-700">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Us Today
          </button>
        </div>
      </section>
    </main>
  );
}