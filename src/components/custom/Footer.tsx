import { Code2, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Code2 className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Portfolio</span>
          </div>

          <div className="text-center md:text-left mb-6 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} John Doe. All rights reserved.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Nitish2626"
              className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nitish-kumar-sharma-9465ab252/"
              className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nitishksharma517@gmail.com"
              className="p-2 bg-gray-700 rounded-lg hover:bg-blue-600 transition-colors duration-300"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
