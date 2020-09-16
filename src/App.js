import React, { Component }from 'react';
import axios from 'axios'
import {Carousel} from 'react-responsive-carousel'
import {Table} from 'reactstrap';

class App extends Component{


  state = {
    photos: []
  }
  componentWillMount(){
    axios.get('http://localhost:8080/photos/all').then((response) =>{
      this.setState({
        photos: response.data
      })
    });
  }
  render(){
    let photos = this.state.photos.map((photo) =>{
      return(
        <tr key={photo.photoid}>
          <td>{photo.photoid}</td>
          <td>{photo.title}</td>
          <td>{photo.description}</td>
          <td>
          <img src={`http://127.0.0.1:8887/${photo.filename} `}/>
          </td>
      </tr>
      )
    });
    return (
      <div className="App container">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
         {photos}
        </tbody>

      </Table>
      </div>
    );
  }
}

export default App;
