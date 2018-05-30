import React, {Component} from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import "slick-carousel/slick/slick-theme.css";

class Carousel extends Component {

  render() { 
    var settings = {
      dots: true,
      rtl: true,
      autoplay: true,
      autoplaySpeed: 2000,
    }
    return ( 
      <div style={{ width: '700px', position: 'relative', left: '500px', top: '150px'}}>
          <Slider {...settings} >
            <div>
              <h5 className="sliderText" >"Encontre lo que buscaba al mejor precio"</h5>
              <p className="sliderSubtitle">German Guitierrez, Texcoco</p>
            </div>
            <div>
              <h5 className="sliderText" >"¡Me encanta!, la uso cada que compro en linea"</h5>
              <p className="sliderSubtitle" >Alina Rodriguez, Querétaro</p>
            </div>
            <div>
              <h5 className="sliderText" >"La mejor forma de comparar y comprar"</h5>
              <p className="sliderSubtitle" >Harland Lohora, Ironhack</p>
            </div>
          </Slider>
          </div>
    )
  }
}
export default Carousel;