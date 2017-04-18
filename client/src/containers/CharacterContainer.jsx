import React from 'react';
import CharacterSelector from '../components/CharacterSelector';
import CharacterDetail from '../components/CharacterDetail';

class CharacterContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      sortingHat: null
    };
  }

 componentDidMount(){
   const url = "http://hp-api.herokuapp.com/api/characters";
   const request = new XMLHttpRequest();
   request.open("GET", url);
   request.onload = () => {

    var characters = JSON.parse(request.responseText)
    this.setState({
      characters: characters,
      sortingHat: characters[0]
    });
   };
   request.send();
 }

 setSortingHat(character){
  this.setState ({
    sortingHat: character
  });
 }

  render(){
    return (
      <div>
        <h2>Character Container</h2>
        <CharacterSelector
        characters={this.state.characters}
        selectCharacter={this.setSortingHat.bind(this)} />
        <CharacterDetail character={this.state.sortingHat} />
      </div>
    );
  }
}

export default CharacterContainer;