import React from "react";


const Edito = ({title, content}) => {
  return (
    <div className="mb-4 flex h-min flex-col rounded-lg bg-neutral shadow-md transition ease-in-out hover:shadow-2xl dark:bg-primary-900">
      {/* Title */}
      <h3 className="flex text-lg text-primary-900 font-semibold dark:text-primary-100">Edito : {title}</h3>
      {/* Content */}
      <p className="flex text-sm text-gray-500 dark:text-gray-300">
          {content}
      </p>
    </div>
  );
};

export default Edito;
