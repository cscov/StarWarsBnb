import React from 'react';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.spots;
  }

  componentDidMount() {
    console.log(this.props.fetchAllSpots());
  }

  render() {
    const spots = this.props.spots.map( (spot, idx) => {
      return (<li key={idx}>{spot}</li>);
    });
    return (
      <div>
        <h1>Explore StarWarsBnb</h1>
        <ul>
          {spots}
        </ul>
      </div>
    );
  }
}

export default SpotsIndex;
