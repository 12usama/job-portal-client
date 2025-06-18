import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section className="bg-base-200 min-h-screen py-16 px-4 md:px-10 lg:px-20">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-10 text-primary">Contact Us</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <p className="text-gray-700 text-lg">
                            Got a question, feedback, or just want to say hello? We'd love to hear from you!
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-blue-500 text-xl" />
                                <span>123 Job Street, Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-blue-500 text-xl" />
                                <span>support@jobportal.com</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-blue-500 text-xl" />
                                <span>+880 1234-567890</span>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-6 rounded-xl shadow-md">
                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full"
                                required
                            />
                            <textarea
                                className="textarea textarea-bordered w-full h-32"
                                placeholder="Your Message"
                                required
                            ></textarea>
                            <button type="submit" className="btn btn-primary w-full">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
