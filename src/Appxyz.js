import React from 'react';
import Particles from "react-particles-js";
import Clarifai from "clarifai";
import NavBar from "./Components/NavBar/NavBar.js";
import UsrRank from "./Components/UsrRank/UsrRank.js";
import SrcBar from "./Components/SrcBar/SrcBar.js";
import ImgAi from "./Components/ImgAi/ImgAi.js";
import SignIN from "./Components/SignIn/SignIn.js";
import Register from "./Components/Register/Register.js";
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

  // Life cycle related function - Constructor
  constructor() {
    super()
    this.state = {
      searchItem: " ",
      image: "",
      coOrdinates: {},
      route: "signIn",
      isSignedIn: false
    };

  }

  // Fuction - Support Function for internal call back function

  // *** Function to retrive the data of detected face ***

  faceDetails = (imgData) => {

    const faceRecongnised = imgData.outputs[0].data.regions;
    console.log(imgData);
    console.log("Face :", faceRecongnised)
    const boundingBox = faceRecongnised.map((op, i) => op.region_info.bounding_box);
    console.log("Bounding Box", boundingBox);
    const face1 = boundingBox[0];
    console.log(face1);
    return face1;

  }

  // *** Function to set the route on call back , or after a perticulat event

  onRouteChange = (route) => {
    if (route === "signIn") {
      this.setState({ isSignedIn: false })
    } else if (route === "home") {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route: route });

  }

  // *** function to set the box in image ***

  setBoundingBox = (coOrdinates) => {

    const imgElement = document.querySelector("#app-imgai-js-img-details");
    console.log(imgElement);
    console.log(imgElement.width);
    console.log(imgElement.height);
    const width = Number(imgElement.width);
    const height = Number(imgElement.height);

    const top = coOrdinates.top_row * height;
    const right = width - (coOrdinates.right_col * width);
    const bottom = height - (coOrdinates.bottom_row * height);
    const left = coOrdinates.left_col * width;

    console.log(top, right, bottom, left);

    const objCoordinates = {
      top: top,
      right: right,
      bottom: bottom,
      left: left
    }

    return (objCoordinates);

  }



  // Call back related function
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
    const img = this.state.searchItem;

    // predict API from clarifai
    // app.models
    //   .predict("a403429f2ddf4b49b307e318f00e528b", img)
    //   .then(response => {

    //     console.log(response);
    //     const face1 = this.faceDetails(response);
    //     console.log("yogesh");
    //     console.log(face1);
    //     const objCoordinates = this.setBoundingBox(face1);
    //     this.setState({ coOrdinates: objCoordinates })
    //     console.log("cordinates ", objCoordinates);
    //     console.log("this.state.coOrdinates", this.state.coOrdinates);


    //   })
    //   .catch(err => console.log("Really sorry count retrive the image"));
  }


  // Life cycle fuction -  Render
  render() {
    return (
      <div >
        <Particles params={particleInfo} className="app-particles" />
        <NavBar isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange} />
        {
          this.state.route === "home"
            ? <div>
              <UsrRank />
              <SrcBar onSearchInput={this.onSearchInput} onSearchButton={this.onScearchButton} />
              <ImgAi displayImage={this.state.image} coOrdinates={this.state.coOrdinates} />
            </div>
            : (this.state.route === "signIn"
              ? <SignIN onRouteChange={this.onRouteChange} />
              : <Register onRouteChange={this.onRouteChange} />
            )
        }
      </div>
    );
  }
}

export default Appxyz;
