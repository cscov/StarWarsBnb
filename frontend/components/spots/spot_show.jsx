import React from 'react';
import SimpleSlider from './slider';
import fontawesome from '@fortawesome/fontawesome';
import faStar from '@fortawesome/fontawesome-free-solid/faStar';
import faUsers from '@fortawesome/fontawesome-free-solid/faUsers';
import faBed from '@fortawesome/fontawesome-free-solid/faBed';
import faCouch from '@fortawesome/fontawesome-free-solid/faCouch';
import faBath from '@fortawesome/fontawesome-free-solid/faBath';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
  }

  componentDidMount() {
    this.props.fetchSpot(this.props.match.params.roomId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.roomId !== nextProps.match.params.roomId) {
      this.props.fetchSpot(nextProps.match.params.roomId);
    }
  }


  render() {
    const {spot} = this.props;
    if (!spot) {
      return null;
    }
    let firstAmenities = spot.amenitiesIncluded.slice(5);
    firstAmenities = firstAmenities.map( amenity => amenity.split("_").join(" "));
    const sixAmenities = firstAmenities.map( (amenity, idx) => {
      return (<li className="truncated" key={`amenity-${idx}`}>
        <span className="icon"><FontAwesomeIcon icon={["fab", "rebel"]} /></span>
        <span className="item">{amenity}</span>
      </li>);
    });
    const photos = spot.spotPhotoUrls;
    return (
      <React.Fragment>
        <ul className="photo-carousel">
          <li><img src={photos[0]}/></li>
        </ul>
        <div className="book-container">
          <section className="book">
            <span id="from">From</span><br />
            <span className="daily-rate">${spot.dailyRate}</span>
            <span id="per-night"> per night</span><br />
            <div className="rating">
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <FontAwesomeIcon icon={["fas", "star"]} />
              <span id="small-reviews">{spot.numReviews}</span>
            </div>
            <form className="booking-form">
            </form>
          </section>
        </div>
      <div className="spot-details">
        <section className="details">
          <span className="filter rental-type">
            {spot.rentalType}
          </span>
          <h2 className="show-title">
            {spot.title}
          </h2>
          <span className="planet">
            {spot.planet}
          </span>
          <section className="guest-demographics">
            <section className="guests">
              <span className="icon"><FontAwesomeIcon icon={["fas", "users"]} /></span>
              <span className="num-guests demographic">
                {spot.numGuests} guests
              </span>
            </section>
            <section className="room">
              <span className="icon"><FontAwesomeIcon icon={["fas", "couch"]} /></span>
              <span className="num-bedrooms demographic">
                {spot.numBedrooms} bedroom
              </span>
            </section>
            <section className="bed">
              <span className="icon"><FontAwesomeIcon icon={["fas", "bed"]} /></span>
              <span className="num-beds demographic">
                {spot.numBeds} bed
              </span>
            </section>
            <section className="bath">
              <span className="icon"><FontAwesomeIcon icon={["fas", "bath"]} /></span>
              <span className="num-baths demographic">
                {spot.numBaths} bath
              </span>
            </section>
          </section>
        </section>
        <section className="home-description">
          <section className="hosted-by">
            <img src={spot.avatar} />
            <span className="host">Hosted by {spot.firstName}</span>
          </section>
          <p className="description">{spot.description}</p>
        </section>
        <section className="amenities">
          <h3 className="section-title">Amenities</h3>
          <ul className="amenity-slice">
            {sixAmenities}
          </ul>
          <p className="button-link">Show all 28 amenities</p>
          <section className="amenities-modal">
            <section className="basic-amenity-category">
              <h3>Basic</h3>
              <span className="wifi">{spot.wifi}</span>
              <span className="fireplace">{spot.indoorFireplace}</span>
              <span className="tv">{spot.tv}</span>
              <span className="iron">{spot.iron}</span>
              <span className="essentials">{spot.essentials}</span>
              <span className="heating">{spot.heating}</span>
              <span className="air">{spot.airConditioning}</span>
              <span className="water">{spot.hotWater}</span>
            </section>
            <section className="facilities-amenities">
              <h3>Facilities</h3>
              <span className="parking">{spot.parking}</span>
              <span className="tub">{spot.hotTub}</span>
            </section>
            <section className="dining-amenities">
              <h3>Dining</h3>
              <span className="kitchen">{spot.kitchen}</span>
            </section>
            <section className="guest-access-amenities">
              <h3>Guest Access</h3>
              <span className="lockbox">{spot.lockbox}</span>
            </section>
            <section className="bed-bath-amenities">
              <h3>Bed and Bath</h3>
              <span className="hangers">{spot.hangers}</span>
              <span className="hair-dryer">{spot.hairDryer}</span>
              <span className="shampoo">{spot.shampoo}</span>
            </section>
            <section className="safety-amenities">
              <h3>Safety</h3>
              <span className="fire-extinguisher">{spot.fireExtinguisher}</span>
              <span className="carbon">{spot.carbonMonoxideDetector}</span>
              <span className="smoke-detector">{spot.smokeDetector}</span>
              <span className="first-aid">{spot.firstAidKit}</span>
            </section>
            <section className="not-included">
              <h3>Not Included</h3>
              <span className="washer">{spot.washer}</span>
              <span className="private-entrance">{spot.privateEntrance}</span>
            </section>
          </section>
        </section>
        <h3 className="section-title">Sleeping arrangements</h3>
        <section className="sleeping">
          <span className="icon fa-2x"><FontAwesomeIcon icon={["fas", "bed"]} /></span>
          <span className="sleeping-description">{spot.sleepingArrangements}</span>
        </section>
        <section className="rules">
          <h3 className="section-title">House Rules</h3>
          <p className="house-rules">{spot.houseRules}</p>
        </section>
        <section className="cancellation">
          <h3 className="section-title">Cancellations</h3>
          <p className="policy">{spot.cancellationPolicy}</p>
        </section>
        <section className="reviews">
          <h2>{spot.numReviews} Reviews</h2>
          <span>
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
            <FontAwesomeIcon icon={["fas", "star"]} />
          </span>
        </section>
        <section className="map-area">
          <h4 className="section-title">Getting around</h4>
          <p className="getting-around">{spot.gettingAround}</p>
          <section id="map"></section>
        </section>
      </div>
      </React.Fragment>
    );
  }
}
export default SpotShow;
