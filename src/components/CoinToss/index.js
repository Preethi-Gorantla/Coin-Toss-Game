import {Component} from 'react'
import './index.css'
class CoinToss extends Component {
  state = {
    button: "https://assets.ccbp.in/frontend/react-js/heads-img.png",
    heads: 0,
    tails: 0,
  };

  onChangeImage = () => {
    const { button, heads, tails } = this.state;
    const toss = Math.floor(Math.random() * 2);
    let latestHeadsCount = heads;
    let latestTailsCount = tails;
    let image = "";
    if (toss === 0) {
      console.log("heads");
      image = "https://assets.ccbp.in/frontend/react-js/heads-img.png";
      latestHeadsCount += 1;
    } else {
      image = "https://assets.ccbp.in/frontend/react-js/tails-img.png";
      latestTailsCount += 1;
    }
    this.setState((prevState) => ({
      button: image,
      heads:  latestHeadsCount,
      tails: latestTailsCount,
    }));
  }

  render() {
    const { button, heads, tails } = this.state;
    const total = heads + tails
    console.log(this.state);
    return (
      <div className="app-container">
        <div className="coin-Toss">
          <div className="headings">
            <h1 className="game-head">Coin Toss Game</h1>
            <p className="game-descp">Heads (or) Tails</p>
            <img className="logo" src={button} alt="" />

            <button
              type="button"
              className="button"
              onClick={this.onChangeImage}
            >
              Toss Coin
            </button>
          </div>
          <div className="amount">
            <p>Total : {total}</p>
            <p>Heads : {heads}</p>
            <p>Tails : {tails}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CoinToss