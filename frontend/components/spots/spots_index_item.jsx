import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const SpotsIndexItem = (props) => {
  return (
    <li className="index-item">
      <React.Fragment>
        <figure><img src={props.spot.spot_first_photo} /></figure>
        <ul className="top-line">
          <li className="rental-type filter">{props.spot.rental_type}</li>
          <li className="planet filter">{props.spot.planet}</li>
        </ul>
        <span className="title">{props.spot.title}</span>
        <span className="daily-rate">${props.spot.daily_rate} per night</span>
        <div className="rating">
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <FontAwesomeIcon icon={["fas", "star"]} />
          <span className="num-reviews">{props.spot.num_reviews}</span>
        </div>
      </React.Fragment>
    </li>
  );
};

export default SpotsIndexItem;
