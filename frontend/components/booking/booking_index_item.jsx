import React from 'react';

const BookingIndexItem = ({trip}) => {
  return (
    <div className="trip-info">
      <span className="planet">{trip.planet}</span>
      <span className="status">-{trip.status}</span>
      <ul>
        <li className="dates">{trip.parseArrivalMonth}{trip.parseArrivalDay}
          -{trip.parseDepartMonth}{trip.parseDepartDay}
      </li>
        <li className="num-guests">{trip.numGuests}</li>
      </ul>
      <img src={trip.spot_first_photo} />
    </div>
  );
};

export default BookingIndexItem;
