import React, { Component }from 'react';
import axios from 'axios'
import { Admin, Resource, EditGuesser } from "react-admin";
import jsonServerProvider from 'ra-data-json-server' 
import {Navigation} from './Navigation';
import {MyCarousel} from './Carousel';
import {PhotoList} from './photos'

class App extends Component{

  state = {
    images: []
  }

  componentDidMount(){
    axios.get('http://localhost:8080/photos').then((response) =>{
      this.setState({
        images: response.data
      })
    });
  }

  render(){
    return(
      <div className='app'>
        <Admin dataProvider={jsonServerProvider('http://localhost:8080')}>
          <Resource 
          name="photos" 
          list={PhotoList}
          edit={EditGuesser}
          />
        </Admin>
        <Navigation/>
        <MyCarousel />
        
      </div>
    );
  }
}

export default App;
