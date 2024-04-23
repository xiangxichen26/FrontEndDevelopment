import React from "react";

import Card from "../components/Card";
import SkipLink from "../components/SkipLink";

import "./JoinUs.css";

function JoinUs() {
  return (
    <div className="join-us">
      <SkipLink />
      <h2 className="title">Join Us</h2>
      <h3 className="subtitle">
        Connect, Explore, and Experience the Best of Bay Area
      </h3>
      <p>
        Welcome to Circle, your gateway to discovering vibrant events and unique
        social opportunities in the Bay Area. Whether you're a local resident or
        a visitor looking to make new connections, Circle is the perfect place
        for you to start.
      </p>
      <h3 className="subtitle">Why Join Circle?</h3>
      <li>
        Discover: Get exclusive access to the most exciting events around—from
        tech meetups and art exhibitions to music festivals and networking
        events.
      </li>
      <li>
        Connect: Meet like-minded individuals who share your passions. Our
        platform is designed to help you build your network and foster
        meaningful relationships.
      </li>
      <li>
        Participate: Dive into the community by joining events, contributing to
        discussions, and even hosting your own events.
      </li>
      <h3 className="subtitle">How It Works</h3>
      <li>Sign up for an account using your email address.</li>
      <li>Complete your profile by providing your name and occupation.</li>
      <li>
        Start exploring events, joining groups, and connecting with other
        members.
      </li>
      <h3 className="subtitle" id="main">Career Opportunities</h3>
      <div className="career-cards">
        <Card title="Product Manager">
          <p>
            Responsibilities: Define product vision and roadmap, prioritize
            product features based on user needs, collaborate with engineering
            and design teams to develop and launch products.
          </p>
          <p>
            Requirements: Experience in product management, strong analytical
            skills, excellent communication and leadership abilities.
          </p>
        </Card>
        <Card title="Software Engineer">
          <p>
            Responsibilities: Design, build, and maintain efficient, reusable,
            and reliable code, support continuous integration and deployment
            processes, collaborate with other team members to solve complex
            problems.
          </p>
          <p>
            Requirements: Strong proficiency in one or more programming
            languages (e.g., Python, Java, C++), experience with databases and
            web application frameworks, solid understanding of object-oriented
            programming.
          </p>
        </Card>
        <Card title="Front-End Engineer">
          <p>
            Responsibilities: Develop and optimize the front-end of our web
            platform, ensure high performance on mobile and desktop, collaborate
            with designers to implement clean and efficient user interfaces.
          </p>
          <p>
            Requirements: Proficient in HTML, CSS, JavaScript, and frameworks
            like React or Angular, experience with responsive design, good
            understanding of web performance optimization.
          </p>
        </Card>
      </div>
      <h3 className="subtitle">Interested in Working With Us?</h3>
      <p>
        Please feel free to contact us by email: chen.xiangxi@northeastern.edu
      </p>
    </div>
  );
}

export default JoinUs;
