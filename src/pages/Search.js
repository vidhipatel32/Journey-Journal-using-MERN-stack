import React, { useState } from 'react'
import Aasam from "../Images/Aasam1.jpg";
import Goa from "../Images/Goa1.jpg";
import Hampi from "../Images/Hampi1.jpg";
import Kashmir from "../Images/Kashmir1.jpg";
import Kerela from "../Images/Kerela1.jpg";
import Manali from "../Images/Manali1.jpg";
import Munnar from "../Images/Munnar1.jpg";
import Pune from "../Images/Pune1.jpg";
import Punjab from "../Images/Punjab1.jpg";
import Sikkim from "../Images/Sikkim1.jpg";
import Shimla from "../Images/Shimla1.jpg";
import Karnatak from "../Images/Karnataka1.jpg"
import Explore from "../Images/Explore.jpg"
import "./Search.css"

const Search = () => {
  
    const data = {
      "Goa":  {
          image:Goa,
          title: "Goa",
          subTitle: "Singapore, officialy thr Republic of Singapore, is a",
          description: "Goa is a popular tourist destination located on the western coast of India, along the Arabian Sea",
          attractions: "It is renowned for its picturesque beaches, vibrant nightlife, and rich cultural heritage. Some of the famous beaches include Baga Beach, Calangute Beach, and Palolem Beach.",
          culture :"Goa has a unique blend of Indian and Portuguese cultures due to its colonial history. It is famous for its colorful festivals, music, and dance, including Goa trance music and the Carnival festival.",
          cusine: "Goan cuisine is renowned for its delicious seafood dishes, influenced by Portuguese flavors. Dishes like vindaloo, xacuti, and bebinca are popular among locals and tourists alike.",
          famous: "Goa is famous for its vibrant nightlife with numerous beachfront clubs, bars, and shacks offering live music and entertainment.",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination."
        },
       "Hampi": {
          image:Hampi,
          title: "Hampi",
          subTitle: "Thailand is a Southeast Asia country. It's known for",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
         
        },
       "Kerela": {
          image: Kerela,
          title: "Kerela",
          subTitle: "Paris, France's capital, is a major European city and a",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
     
        },
       "Punjab": {
          image: Punjab,
          title: "Punjab",
          subTitle: "New Zealand is an island country in the",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
       "Aasam": {
          image: Aasam,
          title: "Aasam",
          subTitle: "Bora Bora is a small South Pacific island northwest of",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
       "Kashmir": {
          image: Kashmir,
          title: "Kashmir",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
       "Manali": {
          image: Manali,
          title: "Manali",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
      "Munnar":{
          image: Munnar,
          title: "Munnar",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
        "Pune":{
          image: Pune,
          title: "Pune",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
       "Sikkim": {
          image: Sikkim,
          title: "Sikkim",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
      "Shimla":  {
          image: Shimla,
          title: "Shimla",
          subTitle: "London, the capital of England and the United",
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
      "Karnataka":  {
          image: Karnatak,
          title: "Karnataka",
          subTitle: "London, the capital of England and the United", 
          description: " Ancient and historically significant UNESCO World Heritage site located in the southern Indian state of Karnataka",
          attractions: "The ruins of Hampi are a testament to the architectural and artistic grandeur of the Vijayanagara Empire. The site is dotted with majestic temples, intricate sculptures, royal palaces, and massive stone chariots.",
          culture :"Hampi Utsav is an annual cultural festival held in November, featuring music, dance, drama, and other traditional performances.",
          cusine: "Hampi is not just about history; it is also blessed with scenic landscapes, including the Tungabhadra River, rocky hills, and lush greenery.",
          famous: "One of the most famous landmarks in Hampi is the Virupaksha Temple, dedicated to Lord Shiva. It is still an active pilgrimage site and a hub of religious and cultural activities..",
          climate: "Goa has a tropical monsoon climate with a hot and humid season from May to September and a dry and cooler season from November to February, making it a year-round destination"
        },
        "Default":  {
          image: Explore,
          title: "Ready To Explore",
          subTitle: "Hiking is a long, vigorous walk, usually on trails or footpaths in the countryside", 
          description: " Bungee jumping, also spelled bungy jumping, is an activity that involves a person jumping from a great height while connected to a large elastic cord",
          attractions: "Caving – also known as spelunking in the United States and Canada and potholing in the United Kingdom and Ireland – is the recreational pastime of exploring wild cave systems",
          culture :"Camping is a form of outdoor recreation or outdoor education involving overnight stays with a basic temporary shelter such as a tent..",
          cusine: "Scuba diving is a mode of underwater diving whereby divers use breathing equipment that is completely independent of a surface air supply, and therefore has a limited but variable endurance.",
          famous: "A zip-line, zip line, zip-wire, flying fox, or death slide is a pulley suspended on a cable, usually made of stainless steel, mounted on a slope.",
          climate: "Paragliding is the recreational and competitive adventure sport of flying paragliders: lightweight, free-flying, foot-launched glider aircraft with no rigid primary structure. The pilot sits in a harness or in a cocoon-like 'pod' suspended below a fabric wing. "
        }
      }
    const [searchTerm, setSearchTerm] = useState('');
    const [result, setResult] = useState(data["Default"]);
    const handleInputChange = (e) =>
    {
        const value = e.target.value;
        setSearchTerm(value);
    }
    
    const handleSearch = () =>
    {
      if (data[searchTerm]) 
      {
        setResult(data[searchTerm]);
    
        
      } 
      else 
      {
        setResult('Key not found');
      }
    }

  return (
    <div>
      <div className='searchbar'>
          <input type='text' placeholder='Search Destination...' value={searchTerm} onChange={handleInputChange} className='search-input'/>
          <button onClick={handleSearch} className='search-button'>
            Search
          </button>
      </div>
      <br></br><br></br>
      <div className='wrapper'>
          <figure class="card">
            <img src={result.image} width="640" height="640" alt=""/>
            <figcaption>
              <blockquote>{result.title}</blockquote>
              <cite>{result.description}</cite>
              <cite>{result.attractions}</cite>
              <cite>{result.climate}</cite>
              <cite>{result.culture}</cite>
              <cite>{result.famous}</cite> 
            </figcaption>
          </figure>
        </div>

      
    </div>
  )
}
export default Search