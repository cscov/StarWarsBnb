import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import SpotsIndexItem from './spots_index_item';
import SpotShow from './spot_show';
import LoadingIcon from './loading_icon';

class SpotsIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllSpots();
  }

  render() {
    const loading = this.props.loading;
    if (loading) {
      return <div className="loading-icon">
              <LoadingIcon />
            </div>;
    }
    const spots = this.props.spots.map( (spot, idx) => {
      return (
              <SpotsIndexItem key={idx} spot={spot}/>
              );
    });
    return (
      <div className="index">
        <Route path='/rooms/:roomId' component={SpotShow} />
        <h2>Explore StarWarsBnb homes across the galaxy</h2>
        <ul className="index-list">
          {spots}
        </ul>
      </div>
    );
  }
}

export default withRouter(SpotsIndex);
