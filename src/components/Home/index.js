import React, { Component} from 'react';
import axios from 'axios';
import Routes from '../../routes';
import Banner from '../Home/banner';
import ArtistsList from'./artistsList';

const URL_ARTISTS = 'http://localhost:3004/artists'

class Home extends Component {

  state = {
    artists:[]
  }

  //axios requests are equal to the response from the api which will require response.data
  componentDidMount(){
    axios.get(URL_ARTISTS)
    .then( response => {
      this.setState({artists: response.data })
    })
  }
  render(){
    console.log(this.state)
    return (
      <>
        <Banner/>
        <ArtistsList allArtists={this.state.artists}/>
      </>
    )
  }
}

export default Home;

