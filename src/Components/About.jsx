import React from "react";
import { Component } from "react";
import mandecorating from "../images/Presentation/mandecorating.jpg";
import restaurant1 from "../images/Presentation/restaurant1.jpg";
import restaurant2 from "../images/Presentation/restaurant2.jpg";
import restaurant3 from "../images/Presentation/restaurant3.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indice: 0,
      restaurant: [
        {
          img: restaurant1,
          alt: "table",
          id: "0"
        },
        {
          img: restaurant2,
          alt: "table",
          id: "1"
        },
        {
          img: restaurant3,
          alt: "table",
          id: "3"
        }
      ],
      classIndice: false
    };
  }

  handleScroll = () => {
    var titleTable = document.getElementById("table-title");
    var positionTitle = titleTable
      ? titleTable.getBoundingClientRect().top
      : false;

    var screenPosition = window.innerHeight / 1.2;

    if (positionTitle && positionTitle < screenPosition) {
      this.setState({
        classIndice: true
      });
    } else {
      this.setState({
        classIndice: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  pictureBack = () => {
    var restaurantLength = this.state.restaurant.length;

    if (this.state.indice > 0) {
      this.setState({
        indice: this.state.indice - 1
      });
    } else {
      this.setState({
        indice: restaurantLength - 1
      });
    }
  };
  pictureNext = () => {
    let numberOfPics = this.state.restaurant.length;
    if (this.state.indice < numberOfPics - 1) {
      this.setState({
        indice: this.state.indice + 1
      });
    } else {
      this.setState({
        indice: 0
      });
    }
  };

  render() {
    return (
      <section id={"About"} className={"about_section"}>
        <div className={"about"}>
          <img src={mandecorating} alt="man-decorating" />
          <p>
            {" "}
            <blockquote>
              {" "}
              At Bleu nuit, our celebrated chef Nabil Sba, who holds three
              Michelin stars, has created a temple of gastronomy that is
              absolutely French. His macaroni stuffed with black truffle,
              artichoke and duck foie gras, gratinée with aged Parmesan is an
              unforgettable dish that people travel to Paris to experience. Bleu
              nuit restaurant can be enjoyed every day of the year, with tables
              laid in an exquisite garden setting throughout the summer. Bleu
              nuit has been awarded by the TripAdvisor Traveller’s Choice Awards
              N°2 Worldwide, N°1 in Europe and N°1 in France.
            </blockquote>
          </p>
        </div>
        <div className={"our_restaurant"}>
          <h1
            id="table-title"
            className={this.state.classIndice ? "appear_title" : ""}
          >
            {" "}
            Our tables
          </h1>
          <span
            onClick={this.pictureBack}
            className={this.state.classIndice ? "appear_effect" : ""}
          >
            {" "}
            <IoIosArrowBack />{" "}
          </span>
          <img
            className={this.state.classIndice ? "appear_pics" : ""}
            src={this.state.restaurant[this.state.indice].img}
            alt={this.state.restaurant[this.state.indice].alt}
          />
          <span
            onClick={this.pictureNext}
            className={this.state.classIndice ? "appear_effect" : ""}
          >
            {" "}
            <IoIosArrowForward />{" "}
          </span>
        </div>
      </section>
    );
  }
}

export default About;
