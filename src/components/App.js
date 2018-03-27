import React, { Component } from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory/Inventory';
import sampleFishes from '../sample-fishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fishes: {},
      order: {}
    };
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
  }

  addFish(fish) {
    const fishes = {...this.state.fishes};
    const timeStamp = Date.now();
    fishes[`fish-${timeStamp}`]=fish;
    this.setState({fishes});
  }

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    });
  }

  render() {
    return(
      <div className="catch-of-the-day"> 
          <div className="menu">
              <Header tagline="Fresh Seafood Market" />
          </div>
          <Order />
          <Inventory  addFish={this.addFish} loadSamples={this.loadSamples} />
      </div>
    )
  }
  }

export default App;