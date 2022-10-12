import React from "react";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

function ContextMenu() {
  return (
    <footer className="py-6">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between">
          <p className="text-sm text-blueGray-400">
            &copy; {new Date().getFullYear()} Smile &amp; Shine Nursery. All
            rights reserved.
          </p>
          <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
            <a
              className="inline-block px-2"
              href="https://www.facebook.com/SmileAndShineNursery"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/imgs/icons/facebook-blue.svg"
                alt="Smile &amp; Shine Facebbok"
              />
            </a>
            <a
              className="inline-block px-2"
              href="https://www.instagram.com/smileandshinenursery"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/assets/imgs/icons/instagram-blue.svg"
                alt="Smile &amp; Shine Instagram"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
