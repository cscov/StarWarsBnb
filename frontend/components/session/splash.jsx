import React from 'react';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

class Splash extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {demoLogin} = this.props;
    return (
      <div>
        <div id="messaging">
          <span className="other-logo theme-pink fa-2x">
            <FontAwesomeIcon icon={["fab", "rebel"]} />
          </span>
          <span id="message">
            Explore homes across the galaxy with StarWarsBnb
          </span>
          <button id="other-demo" onClick={demoLogin}>Explore Demo</button>
        </div>
        <div className="photo">
          <img src="http://res.cloudinary.com/dvqilcc9p/image/upload/v1523253173/naboo_lake.png" />
        </div>
      </div>
    );
  }
}

export default Splash;
