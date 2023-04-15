import React from "react";
import Link from "next/link";

type ServiceButtonProps = {
  text: string;
  link: string;
  color: string;
  newTab?: boolean;
};

const getButtonColor = (color: string) => {
  // Default button colors
  const buttonColors = {
    ios: "#94A3B8",
    android: "#34D399",
    view: "#3B82F6",
  };

  return buttonColors[color] ?? color;
};

const ServiceButton = ({ text, link, color, newTab }: ServiceButtonProps) => {
  const buttonColor = getButtonColor(color);
  
  const handleMouseEnter = (e: any) => {
    const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    // Set the color and background color of the button based on whether the OS is in dark mode
    //e.currentTarget.style.color = isDark ? "white" : "black";
    //e.currentTarget.style.backgroundColor = buttonColor;
    e.currentTarget.className="ease focus:shadow-outline mx-2 mb-2 inline-block select-none rounded-md border px-4 py-2 transition duration-500 focus:outline-none text-primary-100 border-primary-900 bg-primary-900 dark:text-primary-900 dark:border-primary-100 dark:bg-primary-200"
  };
  const handleMouseLeave = (e: any) => {
    // Reset the color and background color to their default values
    //e.currentTarget.style.color = "inherit";
    //e.currentTarget.style.backgroundColor = "inherit";
    e.currentTarget.className="ease focus:shadow-outline mx-2 mb-2 inline-block select-none rounded-md border px-4 py-2 transition duration-500 focus:outline-none text-primary-900 border-primary-900 bg-primary-100 dark:text-primary-900 dark:border-primary-900 dark:bg-primary-50"
  };

  return (
    <Link
      href={link}
      target={newTab ? "_blank" : "_self"}
      rel="noreferrer"
      className="ease focus:shadow-outline mx-2 mb-2 inline-block select-none rounded-md border px-4 py-2 transition duration-500 focus:outline-none text-primary-900 border-primary-900 bg-primary-100 dark:text-primary-900 dark:border-primary-900 dark:bg-primary-50"
      role="button"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {text}
    </Link>
  );
};

export default ServiceButton;
