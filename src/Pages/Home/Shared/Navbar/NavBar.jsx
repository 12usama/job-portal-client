import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AuthContext from '../../../../Context/AuthContext/AuthContext';
import logo from '../../../../assets/icons/Logo.png';

const NavBar = () => {
    const { user, signOutUser } = useContext(AuthContext);

    const handlesignOut = () => {
        signOutUser()
            .then(() => console.log("User logged out"))
            .catch(error => console.error("Error logging out:", error));
    };

    const navLinkClass = ({ isActive }) =>
        `px-3 py-2 rounded-md font-medium transition duration-200 ${
            isActive ? 'text-blue-500 font-semibold' : 'hover:text-blue-400'
        }`;

    const links = (
        <>
            <li><NavLink to="/" className={navLinkClass}>Home</NavLink></li>
            <li><NavLink to="/about-us" className={navLinkClass}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={navLinkClass}>Contact</NavLink></li>
            <li><NavLink to="/myApplications" className={navLinkClass}>My Applications</NavLink></li>
            <li><NavLink to="/addJob" className={navLinkClass}>Add a Job</NavLink></li>
        </>
    );

    return (
        <div className="sticky top-0 z-50 backdrop-blur-md bg-base-100 bg-opacity-80 shadow-sm">
            <div className="navbar max-w-7xl mx-auto">
                {/* Navbar Start (Logo + Mobile Dropdown) */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} Link='/' role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border"
                        >
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2 btn btn-ghost normal-case text-xl">
                        <img className='h-10' src={logo} alt="Logo" />
                        <span className='font-bold text-blue-500 text-2xl'>Job Portal</span>
                    </Link>
                </div>

                {/* Navbar Center (Desktop Links) */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

                {/* Navbar End (Auth) */}
                <div className="navbar-end gap-3">
                    {user ? (
                        <div className="flex items-center gap-3">
                            {user.photoURL ? (
                                <img
                                    src={user.photoURL}
                                    alt="Profile"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://ui-avatars.com/api/?name=" + encodeURIComponent(user.displayName || "User");
                                    }}
                                    className="w-10 h-10 rounded-full border border-gray-300 object-cover transition-transform hover:scale-110"
                                    title={user.displayName || user.email}
                                />
                            ) : (
                                <div
                                    className="w-10 h-10 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm font-bold"
                                    title={user.email}
                                >
                                    {user.email?.charAt(0).toUpperCase()}
                                </div>
                            )}
                            <span className="text-sm font-medium">{user.displayName || user.email}</span>
                            <button
                                onClick={handlesignOut}
                                className="btn btn-sm border border-red-400 text-red-500 hover:bg-red-100"
                            >
                                Sign Out
                            </button>
                        </div>
                    ) : (
                        <>
                            <Link to="/register">
                                <button className='btn btn-outline btn-info'>Register</button>
                            </Link>
                            <Link to="/signin">
                                <button className="btn btn-outline btn-info">Sign In</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NavBar;
