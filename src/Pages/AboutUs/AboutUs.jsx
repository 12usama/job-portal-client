import React from 'react';
import { FaBullseye, FaHandshake, FaUsers } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className="py-16 px-4 md:px-20 lg:px-40 bg-white">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At Job Portal, we’re dedicated to connecting skilled professionals with their dream careers. Our platform is built on
          transparency, innovation, and a genuine passion for helping people succeed.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="p-6 bg-base-100 rounded-2xl shadow-lg">
          <FaBullseye className="text-4xl text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To empower job seekers worldwide by providing an intuitive, data-driven platform that matches talent with
            opportunity seamlessly and efficiently.
          </p>
        </div>
        <div className="p-6 bg-base-100 rounded-2xl shadow-lg">
          <FaUsers className="text-4xl text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading global marketplace for job discovery, where every candidate finds a meaningful role, and every
            employer finds the perfect fit.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-base-100 rounded-2xl shadow-lg">
            <FaHandshake className="mx-auto text-4xl text-yellow-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Integrity</h3>
            <p className="text-gray-600">
              We uphold honesty and fairness in every interaction, ensuring trust between candidates and employers.
            </p>
          </div>
          <div className="text-center p-6 bg-base-100 rounded-2xl shadow-lg">
            <FaUsers className="mx-auto text-4xl text-purple-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of teamwork—working closely with users and partners to deliver optimal results.
            </p>
          </div>
          <div className="text-center p-6 bg-base-100 rounded-2xl shadow-lg">
            <FaBullseye className="mx-auto text-4xl text-red-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Excellence</h3>
            <p className="text-gray-600">
              We strive for the highest standards, continually improving our platform and services for maximum impact.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4">Join Us Today</h2>
        <p className="text-gray-600 mb-6">
          Whether you’re looking for your next career move or seeking top talent, Job Portal is here to make the process
          simple and successful.
        </p>
        <button className="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  );
};

export default AboutUs;
