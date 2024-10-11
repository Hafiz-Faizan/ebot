// pages/about.js
"use client"
import { useState } from "react";

export default function About() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! We have received your message.`);
    // Handle the form submission logic here, like sending the form data to an API
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        {/* About ebotCPA */}
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-4">About ebotCPA</h1>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
            At ebotCPA, we are passionate about empowering businesses to succeed through expert financial guidance, innovative solutions, and personalized support. 
            Our team of seasoned accounting professionals, led by [Your Name], combines decades of experience with cutting-edge expertise to deliver comprehensive 
            accounting, tax, and consulting services.
          </p>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <p className="text-lg text-gray-700">
            Founded on the principles of integrity, expertise, and personalized service, ebotCPA has grown into a trusted advisor for forward-thinking businesses. 
            Our journey began with a simple yet bold vision: to provide innovative financial solutions that drive growth, profitability, and success.
          </p>
        </section>

        {/* Our Expertise */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Expertise</h2>
          <ul className="text-lg text-gray-700 list-disc list-inside">
            <li>Bookkeeping and accounting</li>
            <li>Fractional CFO services</li>
            <li>Tax compliance, planning, and resolution</li>
            <li>SAP S/4HANA Finance implementation, support, and consulting</li>
          </ul>
        </section>

        {/* Why Choose ebotCPA */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose ebotCPA?</h2>
          <ul className="text-lg text-gray-700 list-disc list-inside">
            <li>Personalized attention from experienced professionals</li>
            <li>Cutting-edge technology solutions</li>
            <li>Proactive guidance and strategic advice</li>
            <li>Commitment to integrity and transparency</li>
          </ul>
        </section>

        {/* Meet Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/300"
                alt="Team member 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                <p className="text-gray-600">Senior Accountant</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/300?random=1"
                alt="Team member 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Fractional CFO</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/400/300?random=2"
                alt="Team member 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">Alice Johnson</h3>
                <p className="text-gray-600">Tax Specialist</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Form */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-lg">
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-lg text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="py-2 px-6 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
