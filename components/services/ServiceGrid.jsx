import React from "react";
import Service from "./Service";


const ServiceGrid = ({ resources }) => {
  return (
    <div className="mt-12 grid gap-1 md:grid-cols-4">
      {resources.map((resource, index) => (
        <Service
          name={resource.name}
          description={resource.description}
          link={resource.link}
          imgSrc={resource.imgSrc}
          imgAlt={resource.imgAlt}
          key={resource.name}
          priority={index < 2}
          newTab={resource.newTab}
          tags={resource.tags}
          buttons={resource.buttons}
        />
      ))}
    </div>
  );
};

export default ServiceGrid;
