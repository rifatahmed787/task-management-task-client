import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
  };

  return (
    <div>
      <div className="fixed w-full transition duration-500 lg:hidden pr-3">
        <div className="flex justify-end relative">
          <button
            className="w-10 h-6 absolute right-2 -top-2.5 z-10 flex flex-col justify-between"
            onClick={toggleMenu}
          >
            {/*hamburger menu span one*/}
            <span
              className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                isMenuOpen
                  ? "rotate-45 translate-y-2.5 duration-300"
                  : "translate-y-0 duration-300"
              }`}
            ></span>

            {/*hamburger menu span two*/}
            <span
              className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>

            {/*hamburger menu span three*/}
            <span
              className={`h-1 w-4/5 bg-primary-100 rounded-2xl ${
                isMenuOpen
                  ? "-rotate-45 -translate-y-2.5 duration-300"
                  : "translate-y-0 duration-300"
              }`}
            ></span>
          </button>
        </div>
        {isMenuOpen && (
          <div
            className={`absolute top-1 left-0 right-0 mx-auto z-30 w-11/12 pb-10 bg-gray-200 mt-10 overflow-y-auto transform transition-transform ease-in-out ${
              isMenuOpen ? "animate-slide-in" : "animate-slide-out"
            }
             `}
          >
            <div className="shadow-sm hover:text-primary mt-4 pl-5">
              <nav className="flex justify-between">
                <ul className=" items-center gap-5 pl-4">
                  <li>
                    <Link
                      href="/"
                      className={`inline-block hover:border-b-primary-200 ${
                        location.pathname === "/"
                          ? "border-b-2 border-b-primary-200  py-2 text-black "
                          : "text-[#181818]"
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/products"
                      className={`inline-block hover:border-b-primary-200 pt-2 ${
                        location.pathname === "/products"
                          ? "border-b-2 border-b-primary-200 px-2 py-2 text-black "
                          : "text-[#181818]"
                      }`}
                    >
                      Products
                    </Link>
                  </li>
                </ul>
                {/* signin button */}
                <Link href="/auth/signin" className="pr-5">
                  <button
                    data-modal-target="signinModal"
                    data-modal-toggle="signinModal"
                    className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-1"
                    type="button"
                  >
                    <Icon icon="mdi:user" width={25} />
                    Signin
                  </button>
                </Link>
              </nav>
              {/* searchbar */}
              {/* <div className="pt-4 w-[70%] pl-4">
                    <NavSearchbar />
                  </div> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNav;
