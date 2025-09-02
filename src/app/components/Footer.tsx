import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-[#181411] text-white py-6 mt-12 flex flex-col items-center">
    <div className="max-w-[900px] w-full px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <span className="text-base font-medium">© {new Date().getFullYear()} Cranbourne Public Hall. All rights reserved.</span>
      <span className="text-sm text-gray-300">Designed & built by Softdev Global</span>
    </div>
  </footer>
);

export default Footer;
