import React from 'react';

function EventItem({ event }) {
  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{event.date}</p>
      <p>{event.location}</p>
    </div>
  );
}

export default EventItem;
