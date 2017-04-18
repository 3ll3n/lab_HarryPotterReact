import React from 'react';
import ReactDOM from 'react-dom';
import CharacterContainer from './containers/CharacterContainer.jsx';
import HouseContainer from './containers/HouseContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <CharacterContainer />,
    document.getElementById('app'),
  );
  ReactDOM.render( <HouseContainer />,
    document.getElementById('appHouse')
    ); 
};
