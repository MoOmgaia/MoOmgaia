import React from "react";


const ServiceTag = ({ text }) => {
  return (
    <span
      className="mr-2 rounded-lg bg-zinc-200 px-2 dark:bg-zinc-700"
      key={text}
    >
      {text}
    </span>
  );
};

export default ServiceTag;
