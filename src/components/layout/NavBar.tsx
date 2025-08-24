"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/listings", label: "Listings" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-blue-600">
          Realtor<span className="text-gray-700">Demo</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white shadow-md">
          <div className="flex flex-col gap-2 px-4 py-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-gray-700 hover:text-blue-600 transition font-medium"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl text-center shadow hover:bg-blue-700 transition"
              onClick={() => setOpen(false)}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
