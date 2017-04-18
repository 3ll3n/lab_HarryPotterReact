import React from 'react';
import HouseSelector from '../components/HouseSelector';
import HouseDetail from '../components/HouseDetail';

class HouseContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      houses: []
    }
  }
 
componentDidMount(){
  const url = "http://hp-api.herokuapp.com/api/characters/house/" + houseName;
  const request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload =() => {

    var houses = JSON.parse(request.responseText)
    console.log(houses);
    this.setState({
      houses: houses
    })
  }
}

 render(){
   return (
     <div>
       <h2> House Container</h2>
       <HouseSelector />
       <HouseDetail/>
     </div>
   );
 }
}




export default HouseContainer;