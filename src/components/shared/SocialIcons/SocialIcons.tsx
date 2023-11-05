import React from "react";
import { Icon } from "@iconify/react";

const SocialIcons = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-5">
        {/* facebook */}
        <li
          className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-10 h-10 border-2 border-primary-100 after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-primary-200 after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
        >
          <a href="#" className="block text-white z-10">
            <Icon
              icon="ri:facebook-fill"
              width={25}
              className="text-primary-100 group-hover:text-white "
            />
          </a>
        </li>

        {/* instagram */}
        <li
          className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-10 h-10 border-2 border-primary-100 after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-primary-200 after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
        >
          <a href="#" className="block text-white z-10">
            <Icon
              icon="mdi:instagram"
              width={25}
              className="text-primary-100 group-hover:text-white "
            />
          </a>
        </li>

        {/* twitter */}
        <li
          className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-10 h-10 border-2 border-primary-100 after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-primary-200 after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
        >
          <a href="#" className="block text-white z-10">
            <Icon
              icon="mdi:twitter"
              width={25}
              className="text-primary-100 group-hover:text-white"
            />
          </a>
        </li>

        {/* youtube */}
        <li
          className="flex justify-center items-center group relative text-center cursor-pointer
                  rounded-full w-10 h-10 border-2 border-primary-100 after:absolute after:content-normal after:top-1 after:right-1 after:bottom-1 after:left-1
                   after:bg-primary-200 after:rounded-full after:transform after:scale-0
                   after:transition-all after:duration-300 hover:after:transform hover:after:scale-100"
        >
          <a href="#" className="block text-white z-10">
            <Icon
              icon="mdi:youtube"
              width={25}
              className="text-primary-100 group-hover:text-white"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
