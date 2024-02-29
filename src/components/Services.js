import React from "react";
import service1 from "../Images/service1.png";
import service2 from "../Images/service2.png";
import service3 from "../Images/service3.png";
import service4 from "../Images/service4.png";
import './Services.css'

export  function Services () {
  const data = [
    {
      icon: service1,
      title: "Uncharted",
      subTitle:
        "Not all those who wander are lost ",
    },
    {
      icon: service2,
      title: "Adventure",
      subTitle:
        "Adventure is worthwhile in itself.",
    },
    {
      icon: service3,
      title: "Flexible Stay",
      subTitle:
        " Enjoy the flexible stay.",
    },
    {
      icon: service4,
      title: "Exploration",
      subTitle:
        "The world is a book, and those who do not travel read only one page.", // you can add here too and import image in png 
    },
  ];
  return (
    <div className="services">
      {data.map((service, index) => {
        return (
          <div className="service">
            <div className="icon">
              <img src={service.icon} alt="" />
            </div>
            <h3>{service.title}</h3>
            <p>{service.subTitle}</p>
          </div>
        );
      })}
    </div>
  );
}


