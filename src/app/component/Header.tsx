import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <div>
      <header className="header">
        <div className="container">
          <a className="link">
            <span>Parallax Effect</span>
          </a>
          <nav className="nav">
            <Link href={"#scrolldown"} className="mr-5 hover:text-gray-900">
              Scroll Down
            </Link>
            <Link href={"#scrollmiddle"} className="mr-5 hover:text-gray-900">
              Scroll Middle
            </Link>
            <Link href={"#scrollup"} className="mr-5 hover:text-gray-900">
              Scroll Up
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
