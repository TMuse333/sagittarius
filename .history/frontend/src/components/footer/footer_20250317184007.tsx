import React from "react";
import Link from "next/link";

interface Props {
  excludedLink: string;
}

const Footer: React.FC<Props> = ({ excludedLink }) => {
  function handleScroll(destination: string) {
    if (typeof window !== "undefined") {
      const element = document.getElementById(destination);
  
      if (element) {
        const offset = -100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset + offset;
  
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        console.warn(`Element with ID '${destination}' not found.`);
      }
    } else {
      console.warn("Window is not available.");
    }
  }

  const links = [
    {
      destination: "work",
      name: "Our work",
      hasScroll: true,
    },
    {
      destination: "reviews",
      name: "Reviews",
      hasScroll: true,
    },
    {
      destination: "why-us",
      name: "Why Us",
      hasScroll: true,
    },
    {
      destination: "contact",
      name: "Contact",
      hasScroll: true,
    },
  ];

  const filteredLinks = links.filter(link => link.name !== excludedLink);

  return (
    <footer className="w-screen relative flex flex-col items-center justify-center mx-auto py-8 bg-[#4D8890] text-white">
      <div className="max-w-7xl w-full px-4">
        {/* Site Map Section */}
        <h6 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Site Map</h6>
        
        {/* Links Container */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 mb-12">
          {filteredLinks.map((link, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center md:items-start"
            >
              {link.hasScroll ? (
                <button
                  onClick={() => handleScroll(link.destination)}
                  className="text-lg md:text-xl font-medium hover:text-[#00bfff] transition-colors duration-200"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  href={`/${link.destination}`}
                  className="text-lg md:text-xl font-medium hover:text-[#00bfff] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Social Media Section */}
        <h6 className="text-3xl sm:text-4xl font-semibold mb-8 text-center">Social Media</h6>
        <div className="flex justify-center gap-6 mb-8">
          {/* Add your social media icons/links here */}
          <p>Insert social media links here</p>
        </div>

        {/* Optional Quote */}
        {/* <p className="text-center text-sm md:text-base max-w-2xl mx-auto">
          For every action, there is an equal and opposite reaction. Use this law everyday to create the reality you desire.
        </p> */}
      </div>
    </footer>
  );
};

export default Footer;