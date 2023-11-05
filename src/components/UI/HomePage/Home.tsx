/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import hero from "../../../assets/taskmanager/hero2.jpg";
import Image from "next/image";
import { useAppSelector } from "@/Hooks/reduxHook";

const Home = () => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className="bg-gradient-to-r from-[#6982D0] via-[#7B82CC] to-[#8B83C6] min-h-screen">
      <section className="py-20 md:py-32 px-4 md:px-24 max-w-screen-2xl mx-auto dark:bg-[#0F172A]">
        <div className="  grid grid-cols-1 md:grid-cols-2 justify-items-center items-center gap-5">
          <div className=" text-white dark:text-gray-900 text-left">
            <h1 className="text-xl md:text-5xl font-bold leading-none xl:max-w-3xl dark:text-gray-400">
              Manage work <br />{" "}
              <span className="text-indigo-800">Efficiently.</span>
            </h1>
            <h5 className="text-2xl font-bold pt-5">
              Plan, Track and Organise your work.
            </h5>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-500">
              There's no need to waste a good part of your day attending to
              tasks that can be taken care of by work schedule or even
              automated. When you don't have to worry about simple daily work,
              there will be more time to get work done.
            </p>

            <div>
              {user?.email ? (
                <div>
                  <Link
                    href="/addtasks"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white  shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      Get started
                    </span>
                    <span className="relative invisible">Get started</span>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    href="/signup"
                    className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out border-2 border-white  shadow-md group"
                  >
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-800 group-hover:translate-x-0 ease">
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">
                      Get started
                    </span>
                    <span className="relative invisible">Get started</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
          <Image
            src={hero}
            alt=""
            className="w-full  mx-auto"
            width={undefined}
            height={undefined}
          />
        </div>
      </section>
    </div>
  );
};

export default Home;
