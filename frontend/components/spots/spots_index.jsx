import React from 'react';
import { withRouter } from 'react-router-dom';
import SpotsIndexItem from './spots_index_item';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const spots = this.props.spots.map( (spot, idx) => {
      return (
                <SpotsIndexItem key={idx} spot={spot} />
              );
    });
    return (
      <div className="index">
        <h2>Homes across the galaxy</h2>
        <ul className="index-list">
          {spots}
        </ul>
      </div>
    );
  }
}

export default withRouter(SpotsIndex);
