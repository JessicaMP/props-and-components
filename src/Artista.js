import React, { Component } from 'react';
// import Evant from 'evant.jpg';
import PropTypes from 'prop-types';
import './Artista.css';

class Artista extends Component {
  static propType = {
    items: PropTypes.array.isRequired
  };

  render() {
    //Destructuring
    const {items} = this.props;
    //Convencional que soliamos hacer 
    // const name = this.props.name;
    // const img = this.props.img;
    // const bio = this.props.bio;
    // const songs = this.props.songs.map((songsItem, i) => {
    //   return <li key={i}>{songsItem}</li>
    // });

    return (
      items && items.map((item, key) => <div className="music-card">
        <div className="music-card-image">
          <img src={item.img} alt={item.name}/>
        </div>
        <div className="music-card-content">
          <h3>{item.name}</h3>
          <p>Biografía</p>
           <ul>{item.songs.map((song, i) =><li key={i}>{song}</li>)}</ul>
          <p>{item.bio}</p>
        </div>
      </div>
    )
    );
  }
}

export default Artista;

// Artista.defaultProps = {
//   name: 'Jessica',
//   bio: 'soy yo',
//   img: 'evant.jpg'
// };
// Artista.propTypes = {
//   name: PropTypes.string,
//   img : PropTypes.string,
//   bio: PropTypes.string
// };