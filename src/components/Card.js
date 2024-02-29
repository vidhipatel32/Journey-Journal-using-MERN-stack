import React, { useState } from 'react';
import './Card.css';

function Card({img,name,description}) 
{
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => 
  {
    setFlipped(!isFlipped);
  };

  return (
    <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {/* Front Content */}
          <img src={img} alt="" />
          <div className="text-overlay">
            <h3>{name}</h3>
          </div>
        </div>
        <div className="flip-card-back">
          {/* Back Content */}
          {description}
          {/* Inside image -- onClick={() => showMoreDetails(name)} */}
          
        </div>
      </div>
    </div>
  );
}

export default Card;
