import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className="bg-gray-100 relative before:absolute before:content-normal before:left-0 before:top-0 before:w-16 before:h-16 before:bg-primary-100 before:rounded-br-full">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 relative before:absolute before:content-normal before:right-0 before:top-0 before:w-16 before:h-16 before:bg-primary-300 before:rounded-bl-full">
        {/* Bottom area */}
        <div className="md:flex flex-row-reverse md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200 md:mx-10 relative before:absolute before:content-normal before:top-0 before:left-0 before:w-full before:h-0.5 before:bg-primary-100">
          {/* Social links */}
          <SocialIcons />

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">
            Made by{" "}
            <a
              className="text-primary-100 hover:underline"
              href="https://cruip.com/"
            >
              Task Management {getCurrentYear()}
            </a>
            . All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
