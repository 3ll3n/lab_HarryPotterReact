import React from 'react';

class CharacterDetail extends React.Component {
  render(){
    if(!this.props.character){
      return null;
    }

    return (

    <div>
      <h2>{this.props.character.name}</h2>
      <ul>
        <li>Ancestry: {this.props.character.ancestry}</li>
        <li>Wand Wood: {this.props.character.wand.wood} </li>
        <li>Wand Core: {this.props.character.wand.core}</li>
        <li>Wand Length: {this.props.character.wand.length} inches</li>
        <li>Patronus: {this.props.character.patronus}</li>
      </ul>
      <img src={this.props.character.image}/>
    </div>
    );
  }
}

export default CharacterDetail;
