import React, {Component} from "react";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.css";

export class MyCarousel extends Component {
    constructor(props) {
      super(props);
  
      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }
    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
    render() {
      return (
        <div>
            <Carousel showArrows={true} showStatus={false} infiniteLoop={true} showThumbs={false} centerMode={true}  autoplay={true} >
            <div>
              <img src='http://127.0.0.1:8887/akira3.jpg'  />
              
            </div>
            <div>
              <img src='http://127.0.0.1:8887/akira2.jpg' />
            </div>
             </Carousel>
        </div>
      );
    }
  }