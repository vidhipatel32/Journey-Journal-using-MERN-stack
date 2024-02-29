import React from 'react'
import avatarImage from "../Images/avatarImage.jpg";
import "./Ratings.css";

export function Ratings()  {
  return (
    <div className="test">
      <div className="title">
        <h2>Happy Customers</h2>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            I was looking for a perfecdt summer destination and now i found one
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Vidhi Patel</h4>
              <span>Artist - Loacl Art Exhibit</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            It is very helpful and good lookinh
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Kishan Sheth</h4>
              <span>CEO - Shashaan Web Solutions</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <p>
            I was so consfuse aswhere to go and this website helped me a lot
          </p>
          <div className="info">
            <img src={avatarImage} alt="" />
            <div className="details">
              <h4>Sana Dhanani</h4>
              <span>Student - LJU</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
