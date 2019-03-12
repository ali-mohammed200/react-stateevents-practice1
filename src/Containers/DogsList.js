import React, { Component } from "react";
import DogCard from "../Components/DogCard"
import Dog from "../dogs"

class DogList extends Component {
  render() {
    let dogArr = Dog.map((dog) => <DogCard key={dog.id} dogObj={dog}/>);
    return (
      <div className="dogContainer">
        {dogArr}
      </div>
    );
  }
}

export default DogList;
