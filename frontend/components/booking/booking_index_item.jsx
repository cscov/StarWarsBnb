import React from 'react';

const BookingIndexItem = ({trip}) => {
  let guests = (trip.numGuests === 1 ? 'guest' : 'guests');
  let numGuests = `${trip.numGuests} ${guests}`;
  let dates = `${trip.parseArrivalMonth} ${trip.parseArrivalDay} - ${trip.parseDepartMonth} ${trip.parseDepartDay}`;
  return (
    <div className="trip-info">
      <div className="trip-words">
        <div className="trip-subheading">
          <span className="planet">{trip.planet}</span>
          <span className="status">-{trip.tripStatus}</span>
        </div>
        <ul>
          <li className="dates">{dates}</li>
          <li className="num-guests">{numGuests}</li>
        </ul>
      </div>
      <img src={trip.spotFirstPhoto} />
    </div>
  );
};

export default BookingIndexItem;
