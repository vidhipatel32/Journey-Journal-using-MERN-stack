import React, { useState } from "react";
import styled from "styled-components";
import Aasam from "../Images/Aasam.jpg";
import Goa from "../Images/Goa.jpeg";
import Hampi from "../Images/Hampi.jpg";
import Kashmir from "../Images/Kashmir.jpeg";
import Kerela from "../Images/Kerela.jpg";
import Manali from "../Images/Manali.jpg";
import Munnar from "../Images/Munnar.jpeg";
import Pune from "../Images/Pune.jpg";
import Punjab from "../Images/Punjab.jpg";
import Sikkim from "../Images/Sikkim.jpg";
import Shimla from "../Images/Shimla.jpg";
import Karnatak from "../Images/Karnataka.jpg"


import Card from "./Card";

export function Places() 
{

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(null); 

  const data = [
    {
      image:Goa,
      title: "Goa",
      subTitle: "Goa is has wide varieties of beaches and is known for nightlife",
      packages: ["Summer","Family","Party","Calm"]
    },
    {
      image:Hampi,
      title: "Hampi",
      subTitle: "Hampi has amazing ancient architecture and ambience",
      packages: ["Winter","Family","Friends","Calm"]
     
    },
    {
      image: Kerela,
      title: "Kerela",
      subTitle: "Kerela is field with lush green tea mountain and has famous backwaters",
      packages: ["Summer","Friends","Monsoon","party"]
 
    },
    {
      image: Punjab,
      title: "Punjab",
      subTitle: "Punjab has very unique culture and golden temple is located here",
      packages: ["Winter","Family","Calm","Party"]
    },
    {
      image: Aasam,
      title: "Aasam",
      subTitle: "Aasam is amazing hill station and is filled with amazing arts",
      packages: ["Summer","Family","Serene","Monsoon"]
    },
    {
      image: Kashmir,
      title: "Kashmir",
      subTitle: "Kashmir is our pride and has many cold destinations and lakes ",
      packages: ["Summer","Family","Party"]
    },
    {
      image: Manali,
      title: "Manali",
      subTitle: "Manali has many adventorous tracks and activities beside sight seeing",
      packages: ["Summer","Family","Monsoon"]
    },
    {
      image: Munnar,
      title: "Munnar",
      subTitle: "Munnar is field with lush green tea mountain, and is very amazing",
      packages: ["Winter","Family"]
    },
    {
      image: Pune,
      title: "Pune",
      subTitle: "Pune has lot of tracking destinations and temple ", 
      packages: ["Monsoon","Family","Friends","Serene"]
    },
    {
      image: Sikkim,
      title: "Sikkim",
      subTitle: "Sikkim is know for its traditional dance and ambience and local jwellery", 
      packages: ["Monsoon","Family","Friends","Calm"]
    },
    {
      image: Shimla,
      title: "Shimla",
      subTitle: "Shimla is amazing hill station and has lot of tourist destinations", 
      packages: ["Summer","Party","Friends","Calm"]
    },
    {
      image: Karnatak,
      title: "Karnatak",
      subTitle: "Karnatak has many cities and vacation places altogether", 
      packages: ["Monsoon","Family","Friends","Serene"]
    }
  ];

  const packages = [
    "Summer",
    "Winter",
    "Monsoon",
    "Friends",
    "Family",
    "Serene",
    "Party"
  ];

  
  const handleFilterOptionClick = (filter) => {
    setSelectedFilter(filter); // Update the selected filter
  };
  

  const filteredData = selectedFilter
  ? data.filter((destination) => destination.packages.includes(selectedFilter))
  : data;
 

  return (
    <Section id="recommend">
      
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        
  <ul>
    {packages.map((pkg, index) => (
      <li
        key={index}
        onClick={() => handleFilterOptionClick(pkg)}
        selected={selectedFilter === pkg}
      >
        {pkg}
      </li>
    ))}
  </ul>
</div>
      <div className="destinations">
      {filteredData.map((destination , index) => {
          return (
            <div className="destination" key={index} >
               <Card img={destination.image} name= {destination.title} description={destination.subTitle}/>
            </div>
          )
      })}
      </div>
      {selectedImages.length > 0 && (
        <div className="image-gallery">
          {selectedImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

const Section = styled.section`

  padding: 2rem 0;
  margin-top:-80px;
  .title {
    text-align: center;
    margin-top:-30px;
    font-size:x-large;
    font-family:cursive;
    color:#026670;
  }
  .packages {
    display: flex;
    justify-content: center;
    margin: 2rem 0;
    ul {
      display: flex;
      list-style-type: none;
      width: max-content;
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        font-family:cursive;
        font-size:large;
        color:#026670;
      }
      .active {
        border-bottom: 0.5rem solid #8338ec;
      }
    }
  }
  .destinations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    padding: 0 3rem;
    margin-right:20px;
    margin-left:-20px;
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 2vh;
          padding-bottom: 1rem;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;
