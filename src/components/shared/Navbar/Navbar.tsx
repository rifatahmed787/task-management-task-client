/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";
import Logo from "../../../assets/Logo/logo.svg";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import MobileNav from "./MobileNav";
import { useAppDispatch, useAppSelector } from "@/Hooks/reduxHook";
import { useCookies } from "react-cookie";
import { userLoggedIn, userLoggedOut } from "@/Redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [previousScroll, setPreviousScroll] = useState(0);
  const pathname = usePathname();
  const { user } = useAppSelector((state) => state.auth);
  const [_cookies, _setCookie, removeCookie] = useCookies(["auth_details"]);
  const dispatch = useAppDispatch();
  const router = useRouter();
  // handle logout
  const handleLogout = () => {
    dispatch(userLoggedOut());
    localStorage.removeItem("auth_details");
    localStorage.removeItem("token");
    removeCookie("auth_details", { path: "/" });
    router.push("/");
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token") as string);
    const user = JSON.parse(localStorage.getItem("auth_details") as string);
    if (token && user) {
      dispatch(
        userLoggedIn({
          isLoggedIn: true,
          user,
          accessToken: token,
        })
      );
    }
  }, [dispatch]);

  const handleScroll = () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
      setIsNavbarVisible(false);
    } else {
      setIsNavbarVisible(true);
    }

    setPreviousScroll(currentScroll);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll, previousScroll]);

  const navbarClasses = `fixed z-20 border-b w-full border-gray-200 py-[22px] transition-transform duration-300 ${
    isNavbarVisible ? "translate-y-0" : "-translate-y-full top-auto"
  } bg-white shadow-sm`;

  return (
    <>
      <nav className={navbarClasses}>
        <div className="flex items-center justify-around font-medium">
          <div className="z-50 flex w-full justify-between p-1 md:w-auto">
            <Link href="/">
              <Image
                src={Logo}
                alt="logo"
                className="w-40 md:cursor-pointer"
                width={undefined}
              />
            </Link>
          </div>
          <ul className="hidden  md:flex items-center gap-10">
            <li>
              <Link
                href="/"
                className={`inline-block hover:border-b-primary-200 ${
                  pathname === "/" ? "text-primary-100" : "text-[#181818]"
                }`}
              >
                Home
              </Link>
            </li>

            {user?.email ? (
              <>
                {" "}
                <li>
                  <Link
                    href="/addtask"
                    className={`inline-block  hover:border-b-primary-200 ${
                      pathname === "/addtask"
                        ? "  text-primary-100"
                        : "text-[#181818]"
                    }`}
                  >
                    Add Tasks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/task"
                    className={`inline-block  hover:border-b-primary-200 ${
                      pathname === "/task"
                        ? "  text-primary-100"
                        : "text-[#181818]"
                    }`}
                  >
                    Tasks
                  </Link>
                </li>
                <li>
                  <Link
                    href="/completetask"
                    className={`inline-block  hover:border-b-primary-200 ${
                      pathname === "/completetask"
                        ? "  text-primary-100"
                        : "text-[#181818]"
                    }`}
                  >
                    Complete Task
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className={`inline-block  hover:border-b-primary-200 ${
                      pathname === "/blog"
                        ? "  text-primary-100"
                        : "text-[#181818]"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    href="/blog"
                    className={`inline-block  hover:border-b-primary-200 ${
                      pathname === "/blog"
                        ? "  text-primary-100"
                        : "text-[#181818]"
                    }`}
                  >
                    Blog
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="hidden md:block">
            <div className="flex gap-4">
              {user?.email ? (
                <>
                  <button
                    onClick={handleLogout}
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-1"
                    type="button"
                  >
                    <Icon icon="material-symbols:logout-rounded" width={25} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <Link href="/login">
                    <button
                      className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 flex items-center gap-1"
                      type="button"
                    >
                      <Icon icon="mdi:user" width={25} />
                      Signin
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>

          {/* Mobile navbar */}
          <ul className={`fixed z-50 w-full md:hidden`}>
            <MobileNav />
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
