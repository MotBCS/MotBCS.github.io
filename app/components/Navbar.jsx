"use client"; //turn it into a client component to add interactivity like clicking
import React, { useState } from 'react'; // useState to keep track of if the navbar is open or not
{/* Import Link */ }
import Link from 'next/link';

{/* Import Icons from heroicons */ }
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";


{/* Import NavLink component made in NavLink.jsx */ }
import NavLink from './NavLink';

{/* Import MenuOverlay component */ }
import MenuOverlay from './MenuOverlay';

{/* Array of props that are passed to the navLink */ }
const navLinks = [
    // Sections 
    {
        title: "Home",
        path: "#/",
    },

    {
        title: "About",
        path: "#about",
    },

    {
        title: "Projects",
        path: "#projects",
    },

    {
        title: "Contact",
        path: "#contact",
    },

];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed mx-auto top-0 left-0 right-0 z-10 bg-transparent backdrop-blur-sm bg-opacity-100">
            <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
                <Link
                    href={"/"}
                    className="text-xl md:text-3xl text-white font-semibold"
                >
                    &lt; Mya Thomas /&gt;
                </Link>

                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5" />
                        </button>
                    )}
                </div>

                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    );
};
export default Navbar;
