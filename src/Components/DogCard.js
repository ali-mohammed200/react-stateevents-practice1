import React from "react";

class DogCard extends React.Component {

  state = {
    bark: false
  }

  barkHandler = () => {
    this.setState({bark: !this.state.bark})
    console.log("Bark");
    console.log(this.state.bark);
  }


  render() {
    let dog = {
      name: this.props.dogObj.name,
      img: this.props.dogObj.img
    }

    return (
      <div>
        <h2>{dog.name}</h2>
        <img alt="" src={dog.img} />
        <button onClick={this.barkHandler}>Bark</button>
        {this.state.bark? <div className="bark"><h1>BARK</h1></div>: undefined}
      </div>
    );
  }
}

export default DogCard;
