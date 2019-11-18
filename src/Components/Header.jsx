import React from "react";
import { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "../Sass/App.scss";
import Navigator from "./Navigator";
import picture1 from "../images/Headers/picture1.jpeg";
import picture2 from "../images/Headers/picture2.jpg";
import picture3 from "../images/Headers/picture3.jpeg";
import picture7 from "../images/Headers/picture7.jpeg";
import { IoIosInfinite } from "react-icons/io";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      indiceOpacity: false,
      presentations: [
        {
          img: picture7,
          text: "Welcome to your favorite place to eat food",
          alt: "Restaurant",
          id: "0"
        },
        {
          img: picture1,
          text: "Bienvenu à toi",
          alt: "Restaurant",
          id: "1"
        },
        {
          img: picture2,
          text: "C'est la vie",
          alt: "Restaurant",
          id: "2"
        },
        {
          img: picture3,
          text: "Un jour on y arrivera",
          alt: "Restaurant",
          id: "3"
        }
      ]
    };
  }

  changeIndice = () => {
    let { indice, presentations } = this.state;
    let pictureLength = presentations.length - 1;
    let updateIndice = indice < pictureLength ? indice++ : (indice = 0);
    this.setState({
      indice: indice
    });
  };

  selectPicture = id => {
    clearInterval(this.state.interval);
    this.setState({
      indice: id,
      indiceOpacity: true
    });
  };
  changeIcones = () => {};

  componentDidMount() {
    var interVal = setInterval(this.changeIndice, 5000);
    this.setState({
      interval: interVal
    });
  }
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    let { indice } = this.state;

    return (
      <header>
        <div className="headerSlider">
          <img
            className={
              "pic_effect_one" +
              " " +
              (this.state.indiceOpacity ? "pic_effect_two" : "")
            }
            src={this.state.presentations[indice].img}
            alt={this.state.presentations[indice].alt}
          />
          <div>
            <h5> {this.state.presentations[indice].text}</h5>
            <ul className={"iconeSliderHeader"}>
              {this.state.presentations.map(item => (
                <li
                  key={item.id}
                  style={
                    item.id == indice
                      ? { color: "rgb(82, 58, 58)" }
                      : { color: "white" }
                  }
                  onClick={() => this.selectPicture(item.id)}
                >
                  <IoIosInfinite />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
// Qui te permet de recuperer tes données
const mapStateToProps = state => {
  return {
    images: state.imageHeader
  };
};
//La connection qui te permet d'avoir acces a ton store
export default connect(mapStateToProps)(Header);
