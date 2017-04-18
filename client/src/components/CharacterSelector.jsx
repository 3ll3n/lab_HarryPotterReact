import React from 'react';

class CharacterSelector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: undefined
    };
  }

  handleChange(event) {
    var newIndex = event.target.value;
    this.setState({
      selectedIndex: newIndex
    });
    var selectedCharacter = this.props.characters[newIndex];
    this.props.selectCharacter(selectedCharacter);
  }

  render() {
    var options = this.props.characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    });
    // console.log(options);

    return (
      <select id="characters"
      value={this.state.selectedIndex}
      onChange={(event) => {this.handleChange(event)}}>
      {options}
      </select>
    );
  }
}

export default CharacterSelector;