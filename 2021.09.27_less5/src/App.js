import {Component} from "react";
import Card from "./components/Card";
import images from "./game";

import './App.css';

class App extends Component {
  render() {
    return <div className="desk">
      {images.map((img, index) => <Card pic={img} ttl={img.split(".")[0].split("_")[4]} key={index}/>)}
    </div>
  }
}

export default App;
