import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header text-gray-700 font-sans">
        <div className="container w-full mx-auto flex flex-col md:flex-row items-center p-5">
          <a className="link flex font-sans font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="ml-3 text-xl leading-7">Parallax Effect</span>
          </a>
          <nav className="nav flex flex-wrap items-center text-base justify-center md:ml-auto">
            <Link href="/" className="mr-5 hover:text-gray-900">
              Scroll Down
            </Link>
            <Link href="/elephent" className="mr-5 hover:text-gray-900">
              Scroll Middle
            </Link>
            <Link href="/river" className="mr-5 hover:text-gray-900">
              Scroll Up
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
