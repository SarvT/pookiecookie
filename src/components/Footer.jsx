import { Github, Linkedin, Twitter } from "lucide-react";
import React from "react";

export const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h4 className="font-bold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Press
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Resources</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Documentation
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Support
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-blue-600">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-600">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Connect</h4>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Github size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 text-center text-gray-500 border-t pt-4 px-4">
        © 2024 Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
