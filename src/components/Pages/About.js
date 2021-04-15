import React from "react";

const About = () => (
  <div className="container">
    <h1>Hello, I am Angela</h1>
     <div className="flex-row">
          <img
            src={require('../../assets/IMG_0182.JPG').default}
            alt="eder"
            className="img-thumbnail mx-1"
           />
      </div>
    <p>Welcome to my portfolio!  I started learning how to code at UCLA extension Full Stack Web Developer Bootcamp.
      Although I have learned many programs such as HTML, CSS, Javascript, MySQL, and React, there is more I need to improve on.
      Please take a look at the projects I've completed thus far! </p>
  </div>
);

export default About;