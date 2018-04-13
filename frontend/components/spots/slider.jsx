import React from "react";
import Slider from "react-slick";

class SimpleSlider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    ""(`this.props is: ${this.props}`);
    const photoUrls = this.props;
    let images = photoUrls.map (url => {
      return ( <img src={`${url}`} /> );
    });
    return (
      <Slider {...settings}>
        <div>
          {images[0]}
        </div>
        <div>
          {images[1]}
        </div>
        <div>
          {images[2]}
        </div>
      </Slider>
    );
  }
}

export default SimpleSlider;
