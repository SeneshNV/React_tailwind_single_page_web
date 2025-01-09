import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/Images/xmm-logo.png";
import { FaXmark, FaBarsStaggered } from "react-icons/fa6";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "About", path: "about" },
    { link: "Features", path: "features" },
  ];

  return (
    <>
      <div className="bg-customPurple">
        <nav className="py-4 md:px-12 p-4 max-w-full mx-auto text-primary border-b-2 border-b-slate-200 text-white">
          <div className="text-lg flex space-x-14 container mx-auto justify-between items-center font-small">
            <div>
              {/* logo */}
              <a
                href="/"
                className="text-2xl font-semibold flex items-center space-x-3 text-primary"
              >
                <img
                  src={logo}
                  alt="logo"
                  className="w-16 inline-block items-center"
                />
                <span>Sprincode</span>
              </a>
            </div>
            <div>
              {/* nav items */}
              <ul className="md:flex space-x-8 hidden">
                {navItems.map(({ link, path }) => (
                  <li key={link}>
                    <Link
                      to={path}
                      smooth={true}
                      duration={500}
                      className="block cursor-pointer hover:text-gray-300"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-x-12 hidden md:flex items-center">
              {/* buy token */}
              <a
                href="/"
                className="rounded-full px-8 py-2 bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 text-white hover:text-customPurple"
              >
                Buy Token
              </a>
            </div>
            {/* menu btn. only display on mobile */}
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isMenuOpen ? (
                  <FaXmark className="w-6 h-6 text-primary" />
                ) : (
                  <FaBarsStaggered className="w-6 h-6 text-primary" />
                )}
              </button>
            </div>
          </div>
        </nav>
      </div>

      {/* nav items for mobile devices */}
      <div
        className={`space-y-4 pt-5 pl-4 pb-5 bg-slate-600 md:hidden text-xl ${
          isMenuOpen ? "block top-0 right-0 left-0" : "hidden"
        }`}
      >
        {navItems.map(({ link, path }) => (
          <Link
            key={link}
            to={path}
            smooth={true}
            duration={500}
            className="block cursor-pointer hover:text-yellow-300 text-purple-300"
            onClick={() => setIsMenuOpen(false)} // Close menu after clicking
          >
            {link}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
