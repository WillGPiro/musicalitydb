import React, {useState, useEffect} from 'react';
import axios from 'axios';

const REQ_URL = "http://http://localhost:3004/artists"

const Artist = (props) => {

  const [artist, setArtist ] = useState('');

  useEffect(()=>{
    axios.get(`${REQ_URL}/$props.match.params/aritstId}`)
    .then( response => {
      setArtist(response.data)
    }).catch( error =>{
      props.history.push('/home');
    })
  },[props.history])

  return (
    <>
      <div className="artist_bio">
        <div className="avatar">
          <span style={{background:`url('/images/covers/${artist.cover}.jpg')`}}></span>
        </div>
      </div>
    </>
  )
}

export default Artist;