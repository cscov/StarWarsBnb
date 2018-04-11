import React from 'react';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spot;
  }

  componentDidMount() {
    console.log("component mounted");
    console.log(this.props.fetchSpot);
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
    return (
      <React.Fragment>
        <ul className="photo-carousel">
          {spot.spotPhotoUrls}
        </ul>
        <section className="book">
          <span id="from">From</span>
          <span className="daily-rate">{spot.dailyRate}</span>
          <span id="per-night">per night</span>
          <span id="small-reviews">{spot.numReviews}</span>
          <form className="booking-form">
          </form>
        </section>
        <span className="show-rental-type">
          {spot.rentalType}
        </span>
        <span className="show-planet">
          {spot.planet}
        </span>
        <span className="show-title">
          {spot.title}
        </span>
        <span className="num-guests">
          {spot.numGuests}
        </span>
        <span className="num-bedrooms">
          {spot.numBedrooms}
        </span>
        <span className="num-beds">
          {spot.numBeds}
        </span>
        <span className="num-baths">
          {spot.numBaths}
        </span>
        <span className="hosted-by">
          {spot.firstName}
          <img src={spot.avatar} />
        </span>
        <p className="description">{spot.description}</p>
        <section className="amenities">
          <h3>Amenities</h3>
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
        <section className="sleeping">
          <h3>Sleeping arrangements</h3>
          <span>{spot.sleepingArrangements}</span>
        </section>
        <section className="rules">
          <h3>House Rules</h3>
          <p className="house-rules">{spot.houseRules}</p>
        </section>
        <section className="cancellation">
          <h3>Cancellations</h3>
          <p className="policy">{spot.cancellationPolicy}</p>
        </section>
        <section className="reviews">
          <h2>{spot.numReviews} Reviews</h2>
        </section>
        <section className="map-area">
          <p className="getting-around">{spot.gettingAround}</p>
          <section id="map"></section>
        </section>
      </React.Fragment>
    );
  }
}
export default SpotShow;
