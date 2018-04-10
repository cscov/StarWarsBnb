import React from 'react';

const SpotsIndexItem = (props) => {
  return (
    <li>
      <React.Fragment>
        <figure>{props.spot.cover_photo}</figure>
        <span>{props.spot.rental_type}</span> <span>{props.spot.planet}</span>
        <span>{props.spot.title}</span>
        <span>{props.spot.daily_rate}</span>
        <span>{props.spot.stars}</span>
        <span>{props.spot.num_reviews}</span>
      </React.Fragment>
    </li>
  );
};

export default SpotsIndexItem;
