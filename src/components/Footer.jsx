import React from "react";
import Logo from "../assets/Logo.png";

const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

const socialLinks = [
  {
    href: "https://twitter.com/yourprofile",
    text: "Twitter",
    icon: "path-to-twitter-icon.png",
  },
  {
    href: "https://facebook.com/yourprofile",
    text: "Facebook",
    icon: "path-to-facebook-icon.png",
  },
  {
    href: "https://linkedin.com/yourprofile",
    text: "LinkedIn",
    icon: "path-to-linkedin-icon.png",
  },
  {
    href: "https://instagram.com/yourprofile",
    text: "Instagram",
    icon: "path-to-instagram-icon.png",
  },
];

function Footer() {
  return (
    <>
      <footer className="mt-20 bg-neutral-900 text-neutral-300 py-10 border-t border-neutral-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                {resourcesLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2">
                {platformLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Community</h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white transition duration-150 ease-in-out"
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect with Us</h3>
              <ul className="space-y-2">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-neutral-300 hover:text-white flex items-center space-x-2 transition duration-150 ease-in-out"
                    >
                      <img
                        src={link.icon}
                        alt={`${link.text} icon`}
                        className="w-5 h-5"
                      />
                      <span>{link.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 border-t border-neutral-700 pt-6 text-center">
            <img src={Logo} alt="Company Logo" className="mx-auto mb-4 w-24" />
            <p className="text-neutral-400">
              &copy; {new Date().getFullYear()} Your Company. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
