'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-orange-500">High Professional Trading & Services Co.</h3>
            <p className="text-gray-400">Your Trusted Partner in Building Materials & Contracting Solutions in Qatar</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500">About Us</Link></li>
              <li><Link href="/trading" className="text-gray-400 hover:text-orange-500">Trading Division</Link></li>
              <li><Link href="/contracting" className="text-gray-400 hover:text-orange-500">Contracting & Services</Link></li>
              <li><Link href="/projects" className="text-gray-400 hover:text-orange-500">Projects</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 ">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Building Construction</li>
              <li>MEP Works</li>
              <li>Glass Fitting & Aluminum Works</li>
              <li>Interior & Exterior Finishing</li>
              <li>Building Maintenance</li>
            </ul>
          </div>
          <div>
  <h4 className="text-lg font-semibold mb-4">Contact Info</h4>

  <p className="text-gray-400">
    📍 Location: Doha, Qatar — Serving local and regional partners with on-the-ground support and industry expertise
  </p>

  <p className="text-gray-400">
    📞 Phone: +974 77115181 — Reach our office during business hours for inquiries and support
  </p>

  <p className="text-gray-400">
    ✉ Email: info@hiprofessionalqr.com — For proposals, quotations, and general questions
  </p>

  <p className="text-gray-400">
    🌐 Website: www.hiprofessionalqr.com
  </p>
</div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 High Professional Trading and Services Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}