import React from "react";

// ASSETS
import { FaCopyright } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  const iconSize = "1.5rem";

  return (
    <footer className="bg-[#363062] text-white flex items-center justify-between px-4 md:px-10 py-3 bottom-0 w-full">
      <section className="flex items-center gap-x-2">
        <FaCopyright size={"1.2rem"} />
        <p className="text-xs md:text-base">2023. Neo Vortex, Inc. All rights reserved</p>
      </section>
      <section className="flex items-center gap-x-1 md:gap-x-3">
        <a href="#">
          <FaFacebookSquare size={iconSize} />
        </a>
        <a href="#">
          <FaInstagram size={iconSize} />
        </a>
        <a href="#">
          <FaXTwitter size={iconSize} />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
