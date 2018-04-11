import React from 'react';
import { Link } from 'react-router-dom';
import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const SpotsIndexItem = (props) => {
  return (
      <li className="index-item">
        <Link to={`/rooms/${props.spot.id}`}>
        <React.Fragment>
          <figure><img src={props.spot.spot_first_photo} /></figure>
          <ul className="top-line">
            <li className="rental-type filter">{props.spot.rentalType}</li>
            <li className="planet filter">{props.spot.planet}</li>
          </ul>
          <span className="title">{props.spot.title}</span>
          <span className="daily-rate">${props.spot.dailyRate} per night</span>
          <div className="rating">
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <span className="num-reviews">{props.spot.numReviews}</span>
          </div>
        </React.Fragment>
        </Link>
      </li>
  );
};

export default SpotsIndexItem;
