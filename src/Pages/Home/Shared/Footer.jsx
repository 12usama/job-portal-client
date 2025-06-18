import React from 'react';
import logo from '../../../assets/icons/logo.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const services = ['Job Search', 'Resume Upload'];
const companyLinks = ['About Us', 'Contact'];
const legalLinks = ['Terms of Use', 'Privacy Policy', 'Cookie Policy'];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-base-200 text-base-content py-10 px-4 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                {/* Logo & Description */}
                <div className="space-y-4">
                    <img src={logo} alt="Job Portal Logo" className="h-12" />
                    <p className="text-sm text-gray-600">
                        Job Portal Ltd.<br />
                        Connecting talent with opportunity since 1992.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a href="https://facebook.com" aria-label="Facebook" className="text-gray-500 hover:text-blue-600">
                            <FaFacebookF />
                        </a>
                        <a href="https://twitter.com" aria-label="Twitter" className="text-gray-500 hover:text-blue-400">
                            <FaTwitter />
                        </a>
                        <a href="https://linkedin.com" aria-label="LinkedIn" className="text-gray-500 hover:text-blue-700">
                            <FaLinkedinIn />
                        </a>
                        <a href="https://instagram.com" aria-label="Instagram" className="text-gray-500 hover:text-pink-600">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

                {/* Services Links */}
                <div>
                    <h6 className="font-semibold mb-4">Services</h6>
                    <ul className="space-y-2">
                        {services.map((item, idx) => (
                            <li key={idx}>
                                <Link to={`/${item.toLowerCase()}`} className="text-sm link link-hover">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Company Links */}
                <div>
                    <h6 className="font-semibold mb-4">Company</h6>
                    <ul className="space-y-2">
                        {companyLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm link link-hover">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Legal Links */}
                <div>
                    <h6 className="font-semibold mb-4">Legal</h6>
                    <ul className="space-y-2">
                        {legalLinks.map((item, idx) => (
                            <li key={idx}>
                                <Link to={`/${item.toLowerCase().replace(/ /g, '-')}`} className="text-sm link link-hover">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-300 mt-10 pt-6 text-center text-sm text-gray-500">
                &copy; {currentYear} Job Portal Ltd. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;