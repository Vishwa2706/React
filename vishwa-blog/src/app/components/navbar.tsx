"use client";

import "../../styles/navbar.scss";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const pathname = usePathname();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  return (
    <nav className="navbar">
      <div className="logo-div">
        <img
          src="/logo-light.svg"
          alt="Logo"
          className="logo-image"
          loading="lazy"
        />
      </div>

      <div className="navigation-tabs">
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/posts"
              className={pathname === "/posts" ? "active" : ""}
            >
              Posts
            </Link>
          </li>
          <li>
            <button
              className={`theme-btn theme-btn-desktop ${
                isDarkTheme ? "dark" : "light"
              }`}
              onClick={toggleTheme}
            >
              <span className="toggle-thumb" />
              {isDarkTheme ? (
                <HiOutlineMoon className="icon" />
              ) : (
                <HiOutlineSun className="icon" />
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
