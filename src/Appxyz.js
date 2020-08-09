import React from 'react';
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import NavBar from "./Components/NavBar/NavBar.js";
import UsrRank from "./Components/UsrRank/UsrRank.js";
import SrcBar from "./Components/SrcBar/SrcBar.js";
import ImgAi from "./Components/ImgAi/ImgAi.js";
// import './App.css';

const particleInfo = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    },
    line_linked: {
      shadow: {
        enable: true,
        color: "#3CA9D1",
        blur: 5
      }
    }
  }
};

const app = new Clarifai.App({
  apiKey: "0bdbf80daa414589a99e3bea75ae5243"
});

// Class

class Appxyz extends React.Component {

  constructor() {
    super()
    this.state = {
      searchItem: " ",
      image: "",
    };

  }

  onSearchInput = (event) => {

    console.log(event);
    console.log(event.target);
    console.log(event.target.value);
    this.setState({ searchItem: event.target.value });
    // One letter missing in the state search item.
    // Its a advanced topic apdate takes time.
    console.log(this.state.searchItem);


  }

  onScearchButton = () => {
    console.log("yogesh chicked it ");

    // Setting State - image
    this.setState({ image: this.state.searchItem });

    // Image 
    const image = this.state.searchItem;

    // predict API from clarifai
    app.models.predict("a403429f2ddf4b49b307e318f00e528b", image).then(
      function (response) {

        const faceRecongnised = response.outputs[0].data.regions;
        console.log(response);
        console.log("Face :", faceRecongnised)
        const boundingBox = faceRecongnised.map((op, i) => op.region_info.bounding_box);
        console.log("Bounding Box", boundingBox);

      },
      function (err) {
        console.log("Really sorry count retrive the image");
      }
    );
  }

  render() {
    return (
      <div >
        <Particles params={particleInfo} className="app-particles" />
        <h1>yogesh</h1>
        <NavBar />
        <UsrRank />
        <SrcBar onSearchInput={this.onSearchInput} onSearchButton={this.onScearchButton} />
        <ImgAi displayImage={this.state.image} />
      </div>
    );
  }
}

export default Appxyz;
