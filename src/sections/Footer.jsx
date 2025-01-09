import React from "react";

const Footer = () => {
  return (
    <footer className="bg-customPurple text-white py-4 text-center">
      <div className="container mx-auto">
        <p className="text-sm">© {new Date().getFullYear()} Sprincode</p>
        <p className="text-sm">
          Develop by : Senesh Nagoda Vithana
          <br /> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
