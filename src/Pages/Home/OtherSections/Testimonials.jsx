import React from 'react';

const Testimonials = () => (
  <section className="text-center bg-gray-50 py-16 rounded-xl px-4">
    <h3 className="text-3xl font-bold mb-6">What Our Users Say</h3>
    <div className="flex flex-col md:flex-row gap-6 justify-center px-4">
      <div className="bg-white shadow p-6 rounded-xl max-w-sm mx-auto">
        <p className="text-gray-700 italic">"I got hired within a week! The platform is so smooth and helpful."</p>
        <p className="mt-4 font-semibold text-blue-600">— Farhan Ahmed</p>
      </div>
      <div className="bg-white shadow p-6 rounded-xl max-w-sm mx-auto">
        <p className="text-gray-700 italic">"Easy to use and lots of job options. Highly recommended!"</p>
        <p className="mt-4 font-semibold text-green-600">— Ayesha Khan</p>
      </div>
    </div>
  </section>
);

export default Testimonials;