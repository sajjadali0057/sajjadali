import React from "react";
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span style={{ marginRight: '20px' }}>
          <Image src="/images/logo.jpeg" alt="logo image" width={200} height={200} />
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
