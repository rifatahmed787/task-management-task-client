"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

export const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {},
  isBangla: false,
  toggoleBangla: () => {},
});

type DarkModeProviderProps = {
  children: ReactNode;
};

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isBangla, setIsBangla] = useState(false);

  useEffect(() => {
    const darkModeEnabled = localStorage.getItem("darkModeEnabled") === "true";
    setDarkMode(darkModeEnabled);
  }, []);

  useEffect(() => {
    const banglaEnabled = localStorage.getItem("banglaEnabled") === "true";
    setIsBangla(banglaEnabled);
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !darkMode;
    setDarkMode(updatedMode);
    localStorage.setItem("darkModeEnabled", updatedMode.toString());
  };

  const toggoleBangla = () => {
    const updateBangla = !isBangla;
    setIsBangla(updateBangla);
    localStorage.setItem("banglaEnabled", updateBangla.toString());
  };

  return (
    <DarkModeContext.Provider
      value={{ darkMode, toggleDarkMode, isBangla, toggoleBangla }}
    >
      {children}
    </DarkModeContext.Provider>
  );
};
