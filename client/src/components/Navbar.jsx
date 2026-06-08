import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaTicketAlt } from 'react-icons/fa';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const activeLink = ({ isActive }) =>
        isActive
            ? "text-white font-semibold border-b-2 border-white pb-1"
            : "text-gray-200 hover:text-white transition";

    return (
        <nav className="bg-gray-900 shadow-lg">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">

                    <NavLink to="/" className="text-white text-2xl font-bold flex items-center gap-2">
                        <FaTicketAlt /> EventPoint
                    </NavLink>

                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

                        <NavLink to="/" className={activeLink}>
                            Events
                        </NavLink>

                        {user ? (
                            <>
                                <NavLink
                                    to={user?.role === 'admin' ? '/admin' : '/dashboard'}
                                    className={activeLink}
                                >
                                    Dashboard
                                </NavLink>

                                <button
                                    onClick={handleLogout}
                                    className="bg-gray-700 hover:bg-black text-white px-4 py-2 rounded-md transition"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink to="/login" className={activeLink}>
                                    Login
                                </NavLink>

                                <NavLink
                                    to="/register"
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-white font-semibold border-b-2 border-white pb-1"
                                            : "text-gray-200 hover:text-white transition"
                                    }
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;