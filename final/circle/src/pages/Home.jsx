import React, { useState } from "react";

import Carousel from "../components/Carousel";
import Card from "../components/Card";
import EventDetail from "./EventDetail";
import SkipLink from "../components/SkipLink";

import eventData from "../mock-data/events";
import carouselImgs from "../mock-data/carousel-imgs";

import "./Home.css";
import Link from "../components/Link";

function Home() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const showEventDetail = (eventId) => {
    const event = eventData.find((event) => event.id === eventId);
    setSelectedEvent(event);
  };

  const goBack = () => {
    setSelectedEvent(null);
  };

  const events = eventData.map((e) => {
    return (
      <Card
        title={e.eventTitle}
        buttonName="More"
        buttonOnClick={() => showEventDetail(e.id)}
        buttonAriaLabel={`More about ${e.eventTitle}`}
        key={e.id}
      >
        <div className="card-content">
          <div className="card-content-item-description">
            {e.eventDescription}
          </div>
          <div className="card-content-item">
            <div className="card-content-item-icon">
              <i className="gg-calendar-two"></i>
            </div>
            <div className="card-content-item-text">{e.eventDateAndTime}</div>
          </div>
          <div className="card-content-item">
            <div className="card-content-item-icon">
              <i className="gg-pin"></i>
            </div>
            <div className="card-content-item-text">{e.eventLocation}</div>
          </div>
          <div className="card-content-item">
            <div className="card-content-item-icon">
            <i className="gg-organisation"></i>
            </div>
            <div className="card-content-item-text">{e.eventOrganizer}</div>
          </div>
          <div className="card-content-item">
            <div className="card-content-item-icon">
              <i className="gg-mail"></i>
            </div>
            <div className="event-organizer-email">{e.eventOrganizerEmail}</div>
          </div>
        </div>
      </Card>
    );
  });

  const handleEventRegistration = (eventId, isRegistered) => {
    const updatedEvents = eventData.map((event) => {
      if (event.id === eventId) {
        return { ...event, isRegistered: isRegistered };
      }
      return event;
    });
    setSelectedEvent({ ...selectedEvent, isRegistered: isRegistered });
  };

  return (
    <div className="home">
      <SkipLink/>
      {selectedEvent ? (
        <div className="home-events-detail" id="main">
          <EventDetail eventDetail={selectedEvent} onBackClick={goBack} onRegister={handleEventRegistration} />
        </div>
      ) : (
        <div className="home-evets">
          <div className="home-carousel">
            <Carousel images={carouselImgs} gap={-250} />
          </div>
          <div className="home-events-list" id="main">{events}</div>
        </div>
      )}
    </div>
  );
}

export default Home;
