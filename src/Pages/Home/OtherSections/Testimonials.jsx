import React from 'react';

const testimonials = [
  {
    name: "Sarah Ahmed",
    title: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform helped me find my dream job within a week! Super easy to use and reliable."
  },
  {
    name: "Tanvir Hasan",
    title: "UI/UX Designer",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    text: "The job recommendations were spot on! I really liked the company filters and quick application process."
  },
  {
    name: "Nusrat Jahan",
    title: "Marketing Specialist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "Amazing experience. The resume upload and saved jobs features saved me so much time."
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-base-100 text-center">
      <h3 className="text-3xl font-bold mb-2">What Our Users Say</h3>
      <p className="text-gray-500 mb-10">Real success stories from job seekers</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {testimonials.map((user, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-6 space-y-4 hover:shadow-xl transition">
            <img src={user.photo} alt={user.name} className="w-20 h-20 mx-auto rounded-full object-cover border-2 border-blue-500" />
            <h4 className="text-lg font-semibold">{user.name}</h4>
            <p className="text-sm text-gray-400 italic">{user.title}</p>
            <p className="text-gray-600 text-sm">“{user.text}”</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
