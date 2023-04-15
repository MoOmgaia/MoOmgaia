import React from "react";
import Service from "./Service";

type ServiceGridProps = { resources: any; };

const ServiceGrid = ({ resources }: ServiceGridProps) => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-1 md:grid-cols-2 gap-1 md:grid-cols-3 gap-1 md:grid-cols-4">
      {resources.map((resource: any, index: number) => (
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
