// Footer.tsx
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        
        {/* Office Info */}
        <div>
          <h3 className="heading-font text-xl font-bold mb-4 text-blue-500">Our Office</h3>
          <p>123 Main Street</p>
          <p>Edmonton, AB T5J 2N2, Canada</p>
          <a href="mailto:solutions@realtorsitespro.ca">solutions@realtorsitespro.ca</a>
          <p>Phone: (780) 555-1234</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="heading-font text-xl font-bold mb-4 text-blue-500">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">About</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Services</a></li>
            <li><a href="#" className="hover:text-blue-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="heading-font text-xl font-bold mb-4 text-blue-500">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaLinkedinIn size={20} /></a>
            <a href="#" className="hover:text-blue-500 transition"><FaTwitter size={20} /></a>
          </div>
        </div>

        {/* Newsletter / Extra Section */}
        <div>
          <h3 className="heading-font text-xl font-bold mb-4 text-blue-500">Subscribe</h3>
          <p className="mb-4 text-gray-300">Get updates about new listings and tips.</p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md border border-gray-700 bg-[#111827] text-white focus:outline-none focus:ring-2 focus:ring-[#FACC15]"
            />
            <Button
                className="px-8 py-4 text-lg font-semibold bg-gradient-to-r bg-blue-500 text-white shadow-lg hover:bg-blue-900 transition-all duration-200 rounded-xl"
                size="lg"
              >
                Subscribe
              </Button>
          </form>
        </div>

      </div>

      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Realtor Demo. All rights reserved.
      </div>
    </footer>
  );
}
