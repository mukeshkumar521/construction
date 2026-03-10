export default function Projects() {
  const projects = [
    { 
      name: 'Residential Building Complex', 
      category: 'Residential',
      description: 'Modern 15-story residential complex with 250+ units in Doha. Features premium finishes, landscaping, and community amenities.',
      image: '🏢',
      year: '2023'
    },
    { 
      name: 'Commercial Office Renovation', 
      category: 'Commercial',
      description: 'Comprehensive renovation of 50,000 sqft office space. Included MEP works, interior design, and furnishings.',
      image: '🏢',
      year: '2023'
    },
    { 
      name: 'Shopping Mall Interior Design', 
      category: 'Commercial',
      description: 'Complete interior design and finishing of 80,000 sqft shopping mall with retail and entertainment zones.',
      image: '🏪',
      year: '2022'
    },
    { 
      name: 'Hospital MEP Installation', 
      category: 'Healthcare',
      description: 'Professional MEP systems installation for 200-bed hospital facility with advanced climate control.',
      image: '🏥',
      year: '2022'
    },
    { 
      name: 'Educational Institution', 
      category: 'Education',
      description: 'Complete construction and finishing of modern school facility with classrooms, labs, and sports complex.',
      image: '🎓',
      year: '2021'
    },
    { 
      name: 'Infrastructure Development', 
      category: 'Infrastructure',
      description: 'Large-scale infrastructure project including utilities, roads, and utility systems.',
      image: '🏗️',
      year: '2021'
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-center">Our Projects</h1>
          <p className="text-xl mt-4 text-center ">Showcasing Our Excellence and Expertise</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 bg-gradient-to-br from-orange-100 to-gray-100 flex items-center justify-center relative group">
                  <div className="text-6xl">{project.image}</div>
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-semibold text-black">{project.name}</h3>
                  </div>
                  <p className="text-orange-500 text-sm font-semibold mb-3">{project.category}</p>
                  <p className="text-gray-700 mb-4 line-clamp-3">{project.description}</p>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded transition w-full">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Track Record</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { stat: '50+', label: 'Projects Completed' },
              { stat: '1M+', label: 'Sqft Delivered' },
              { stat: '100%', label: 'Client Satisfaction' },
              { stat: '15+', label: 'Years Experience' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-orange-500 mb-2">{item.stat}</div>
                <p className="text-gray-700 font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
     <section className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">

    <h2 className="text-4xl font-bold text-center mb-12 text-black">
      Featured Project
    </h2>

    <div className="bg-white rounded-lg overflow-hidden shadow-lg">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

        {/* Image */}
        <div className="h-96 overflow-hidden">
          <img
            src="./constuction11.jpeg"
            alt="Featured Project"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col justify-center">

          <h3 className="text-3xl font-bold text-black mb-4">
            Residential Building Complex
          </h3>

          <p className="text-gray-700 mb-6">
            Modern 15-story residential complex featuring 250+ luxury units with contemporary architecture. The project includes premium finishing touches, beautifully landscaped areas, and comprehensive community amenities including swimming pools, gym facilities, and recreational areas.
          </p>

          <div className="space-y-3">

            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">Location:</span>
              <span className="text-gray-700">Doha, Qatar</span>
            </div>

            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">Completion:</span>
              <span className="text-gray-700">2023</span>
            </div>

            <div className="flex gap-4">
              <span className="text-orange-500 font-bold">Services:</span>
              <span className="text-gray-700">
                Construction, MEP, Interior Design, Landscaping
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* CTA */}
      <section className="bg-orange-500 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Want to See More?</h2>
          <button className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Our Team
          </button>
        </div>
      </section>
    </main>
  );
}