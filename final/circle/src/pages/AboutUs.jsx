import React from "react";

import Tabs from "../components/Tabs";
import TabPane from "../components/TabPane";
import Card from "../components/Card";
import SkipLink from "../components/SkipLink";

import teamMembersData from "../mock-data/our-team";
import ImgForMission from "../assets/img/about-us/mission.jpg";
import ImgForStory from "../assets/img/about-us/story.jpg";

import "./AboutUs.css";

function AboutUs() {
  const teamMembers = teamMembersData.map((member) => {
    return (
      <Card className="tab-team-members-card" key={member.id}>
        <div className="tab-team-members-card-content">
          <img
            className="tab-team-members-card-content-img"
            src={member.img}
            alt={member.imgAlt}
          />
          <h4 className="tab-team-members-card-content-name">{member.name}</h4>
          <p className="tab-team-members-card-content-position">{member.position}</p>
          <p className="tab-team-members-card-content-bio">{member.bio}</p>
        </div>
      </Card>
    );
  });

  return (
    <div className="about-us">
      <SkipLink />
      <Tabs className="about-us-tabs" >
        <TabPane id="1" title="Our Team">
          <div className="tab-team">
            <div className="tab-team-text">
              <p>
                At Circle, our diverse team is united by a shared passion for
                bringing people together through unforgettable Bay Area events.
                From tech innovators to creative visionaries, our team members
                bring a unique blend of expertise and enthusiasm to every
                project.
              </p>
              <p>
                Our leadership, consisting of seasoned event planners and
                community builders, directs our mission to connect like-minded
                individuals and foster meaningful experiences. They are
                supported by a dynamic group of software engineers, designers,
                and customer service professionals who are dedicated to
                providing a seamless and engaging user experience. Each member
                of our team is committed to making Circle the go-to platform for
                discovering and enjoying local events, ensuring that our
                community is vibrant, inclusive, and continuously evolving.
              </p>
              <p>
                Join us in exploring the best of what the Bay Area has to offer!
              </p>
            </div>
            <div className="tab-team-members" id="main">{teamMembers}</div>
          </div>
        </TabPane>
        <TabPane id="2" title="Our Mission">
          <div className="tab-mission">
            <div className="tab-mission-text">
              <h2>Our Mission</h2>
              <p>
                At Circle, our mission is to enrich the lives of Bay Area
                residents and visitors by connecting them through a centralized
                platform that showcases the best local events.
              </p>
              <p>
                We aim to foster a vibrant community where people can discover,
                engage, and share experiences that fuel their passions and
                enhance their social interactions. Whether it is arts, culture,
                technology, or sports, Circle brings together diverse events to
                cater to varied interests, ensuring every encounter is memorable
                and meaningful.
              </p>
            </div>
            <img
              className="tab-mission-img"
              src={ImgForMission}
              alt="Image for our mission"
            />
          </div>
          <div className="tab-story">
            <img
              className="tab-story-img"
              src={ImgForStory}
              alt="Image for our story"
            />
            <div className="tab-story-text">
              <h2>Our Story</h2>
              <p>
                Circle was born from a simple observation: while the Bay Area
                buzzes with events, many people miss out on these opportunities
                due to lack of information or connection.
              </p>
              <p>
                In 2024, a group of friends with backgrounds in technology and
                community service decided to bridge this gap. They envisioned a
                single, accessible platform that would not only aggregate event
                information but also build a community around these gatherings.
              </p>
              <p>
                Today, Circle is more than just a platform, it is a community
                builder that empowers individuals to explore and engage with
                their local environment in new and exciting ways. Through
                Circle, users not only keep abreast of events but also form
                lasting connections that transcend the events themselves,
                creating a continuous loop of engagement and discovery.
              </p>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default AboutUs;
