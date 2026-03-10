export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Contact Us</h1>
          <p className="text-xl mt-4 text-center">Let's Build Your Future Together</p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl text-orange-500 mb-4">📍</div>
              <h3 className="text-2xl font-semibold text-black mb-2">Location</h3>
              <p className="text-gray-700">Qatar</p>
              <p className="text-gray-700">Doha, Qatar</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl text-orange-500 mb-4">📱</div>
              <h3 className="text-2xl font-semibold text-black mb-2">Phone</h3>
              <p className="text-gray-700">+974 77115181</p>
              <p className="text-gray-700">Available During Business Hours</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition">
              <div className="text-5xl text-orange-500 mb-4">✉️</div>
              <h3 className="text-2xl font-semibold text-black mb-2">Email</h3>
              <p className="text-gray-700">info@hiprofessionalqr.com</p>
              <p className="text-gray-700">For proposals & quotations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold mb-6 text-black">Send us a Message</h2>

              <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    placeholder="+974 XXXX XXXX"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    className="w-full p-3 border border-gray-300 rounded-lg h-40 focus:outline-none focus:border-orange-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">

              {/* Google Map */}
              <div className="rounded-lg h-64 overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps?q=Doha,Qatar&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>

              {/* Business Hours */}
              <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-black mb-4">Business Hours</h3>

                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Sunday - Thursday</span>
                    <span>08:00 AM - 06:00 PM</span>
                  </div>

                  <div className="flex justify-between text-gray-700">
                    <span>Friday - Saturday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-orange-600 mb-4">Quick Links</h3>

                <ul className="space-y-2 text-gray-700">
                  <li>✓ Request a Quote</li>
                  <li>✓ Schedule a Consultation</li>
                  <li>✓ View Our Portfolio</li>
                  <li>✓ Download Brochure</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">

          <h2 className="text-4xl font-bold text-center mb-12 text-black">
            Frequently Asked Questions
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Project duration varies based on scope and complexity. We provide detailed timelines during the consultation phase."
              },
              {
                q: "Do you provide free consultations?",
                a: "Yes, we offer free initial consultations to discuss your project requirements and provide estimates."
              },
              {
                q: "What areas do you serve?",
                a: "We serve clients throughout Qatar with our comprehensive construction and trading services."
              },
              {
                q: "Do you offer maintenance services?",
                a: "Yes, we provide ongoing maintenance and repair services for completed projects."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <h3 className="text-lg font-semibold text-orange-500 mb-2">{faq.q}</h3>
                <p className="text-gray-700">{faq.a}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8">Let's build your future together</p>

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition">
            Contact Us Today
          </button>

        </div>
      </section>
    </main>
  );
}