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

        </ul>
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
      </React.Fragment>
    );
  }
}
export default SpotShow;
