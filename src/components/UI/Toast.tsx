"use client";

import { useEffect } from "react";

type IToast = {
  messages: string;
  type: "success" | "error" | "warning";
  isAlertOpen: boolean;
  setIsAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  className: string;
};

export default function ToastContainer({
  messages: message,
  type,
  isAlertOpen,
  setIsAlertOpen,
  className,
}: IToast) {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        isAlertOpen && setIsAlertOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [isAlertOpen, message, setIsAlertOpen]);

  //

  return (
    <div className={className}>
      {/* Success */}
      {type === "success" && (
        <div
          className="flex items-center justify-start px-5 py-4 rounded-lg shadow-sm  bg-white max-w-sm 
				 w-full  gap-5"
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
          <div className=" font-inter text-gray-500  text-sm font-normal flex-grow">
            {message}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsAlertOpen(false);
            }}
            className="ml-auto text-gray-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* Error */}
      {type === "error" && (
        <div
          className="flex items-center justify-start px-5 py-4 rounded-lg shadow-sm  bg-white max-w-sm 
				 w-full  gap-5"
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
          <div className=" font-inter text-gray-500  text-sm font-normal flex-grow">
            {message}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsAlertOpen(false);
            }}
            className="ml-auto text-gray-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/*warning  */}

      {type === "warning" && (
        <div
          className="flex items-center justify-start px-5 py-4 rounded-lg shadow-sm  bg-white max-w-sm 
				 w-full  gap-5"
        >
          <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
              />
            </svg>
          </div>
          <div className=" font-inter text-gray-500  text-sm font-normal flex-grow">
            {message}
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIsAlertOpen(false);
            }}
            className="ml-auto text-gray-500 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
