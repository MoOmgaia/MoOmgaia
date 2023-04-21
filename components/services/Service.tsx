import React from "react";
import Image from "next/image";
import ServiceButton from "./ServiceButton";
import ServiceTag from "./ServiceTag";
import Link from "next/link";

type ServiceProps = {
  name: string;
  description: string;
  link: string;
  imgSrc: string;
  imgAlt: string;
  priority?: boolean;
  newTab?: boolean;
  tags?: string[];
  buttons?: {
    text: string;
    link: string;
    color: string;
    newTab?: boolean;
  }[];
};

const Service = ({
  name,
  description,
  link,
  imgSrc,
  imgAlt,
  priority,
  newTab = true,
  tags,
  buttons,
}: ServiceProps) => {
  return (
    <div className="mb-4 flex flex-col rounded-lg bg-neutral shadow-md transition ease-in-out hover:shadow-2xl dark:bg-primary-900">
      {/* Image */}
      <Link href={link} target={newTab ? "_blank" : "_self"} rel="noreferrer">
        <div className="relative h-48 w-full flex-1 md:h-24 md:w-full">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill={true}
            sizes="(max-width: 768px) 40%,
            (max-width: 1200px) 40%,
            40%"
            className="absolute inset-0 flex h-18 w-18 rounded-t-lg object-contain transition duration-200 ease-in-out hover:rounded hover:outline hover:outline-4 hover:-outline-offset-2 hover:outline-blue-500 hover:brightness-105"
            priority={priority}
          />
        </div>
      </Link>
      {/* Text */}
      <div className="grid place-items-center text-center p-4">
        <h1 className="flex text-lg text-primary-900 font-semibold dark:text-primary-100">{name}</h1>
        <p className="flex text-sm text-gray-500 dark:text-gray-300">
          {description}
        </p>
      </div>
      {/* Tags (if given) */}
      {tags && (
        <div className="ml-4 mr-4 mt-0 mb-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <ServiceTag text={tag} key={tag} />
          ))}
        </div>
      )}
      {/* Buttons (if given) */}
      {buttons && (
        <div className="mb-2 flex flex-row justify-center">
          {buttons.map((button) => (
            <ServiceButton
              text={button.text}
              color={button.color}
              link={button.link}
              newTab={button.newTab}
              key={button.text}
            />
          ))}
        </div>
      )}
      {!buttons && (
        <div className="mb-2 flex flex-row justify-center">
          <ServiceButton
            text="Click here to view &#10132;"
            color="view"
            link={link}
            newTab={newTab}
          />
        </div>
      )}
    </div>
  );
};

export default Service;
