import React, { Component } from 'react';
import './MusicApp.css';
import Artista from './Artista';

//DATA
import items from './data/info'

class MusicApp extends Component {
  render() {
    return (
      <div className="App">
        <Artista items={items}   
          // name = "Evant Craft"
          // bio = "Evan Craft nació en 18 de abril de 1991, en Conejo Valley, California. Se dio a conocer cuando apareció en las listas de Billboard en octubre de 2012, con su álbum Yo soy segundo, el cual debutó en Billboard como el álbum Cristiano latino #1 en EUA y también entró en la lista pop latino (#10) y en la lista general latina (#30)."
          // img = "evant.jpg"
          // songs ={['Oceanos', 'Principio y Fin', '10 000 Razones', 'Impulso', '']}
          />
      </div>
    );
  }
}

export default MusicApp;
