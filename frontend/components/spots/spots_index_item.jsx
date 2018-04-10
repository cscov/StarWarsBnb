import React from 'react';

const SpotsIndexItem = (props) => {
  return (
    <li className="index-item">
      <React.Fragment>
        <figure><img src={props.spot.spot_first_photo} /></figure>
        <span className="rental-type">{props.spot.rental_type}</span>
          <span className="planet">{props.spot.planet}</span>
        <span className="title">{props.spot.title}</span>
        <span className="daily-rate">{props.spot.daily_rate}</span>
        <span className="stars">{props.spot.stars}</span>
        <span className="num_reviews">{props.spot.num_reviews}</span>
      </React.Fragment>
    </li>
  );
};

export default SpotsIndexItem;
