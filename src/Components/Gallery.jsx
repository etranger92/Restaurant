import React from "react";
import { Component } from "react";
import { IoMdClose } from "react-icons/io";
import meal1 from "../images/Plats/meal1.jpg";
import meal2 from "../images/Plats/meal2.jpg";
import meal3 from "../images/Plats/meal3.jpg";
import meal4 from "../images/Plats/meal4.jpg";
import meal5 from "../images/Plats/meal5.jpg";
import meal6 from "../images/Plats/meal6.jpg";
import { icons } from "react-icons/lib/cjs";
import { IconContext } from "react-icons";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      meals: [
        {
          src: meal1,
          id: "meal1",
          alt: "Burger",
          name: "Name1",
          description: [
            "Thick slices of French",
            "bread stuffed with cream cheese",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links"
          ]
        },
        {
          src: meal2,
          id: "meal2",
          alt: "Sandtwitch",
          name: "Name2",
          description: [
            "Cheddar and Monterey Jack cheesesslices of French",
            "on grilled toast",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links",
            "warm tomato soup or Gazpacho"
          ]
        },
        {
          src: meal3,
          id: "meal3",
          alt: "Sandtwitch",
          name: "Name3",
          description: [
            "Cheddar and Monterey Jack cheesesslices of French",
            "on grilled toast",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links",
            "warm tomato soup or Gazpacho"
          ]
        },
        {
          src: meal4,
          id: "meal4",
          name: "Name4",
          alt: "Sandtwitch",
          description: [
            "Cheddar and Monterey Jack cheesesslices of French",
            "on grilled toast",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links",
            "warm tomato soup or Gazpacho"
          ]
        },
        {
          src: meal5,
          id: "meal5",
          alt: "Sandtwitch",
          name: "Name5",
          description: [
            "Cheddar and Monterey Jack cheesesslices of French",
            "on grilled toast",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links",
            "warm tomato soup or Gazpacho"
          ]
        },
        {
          src: meal6,
          id: "meal6",
          alt: "Sandtwitch",
          name: "Name6",
          description: [
            "Cheddar and Monterey Jack cheesesslices of French",
            "on grilled toast",
            " fried in egg",
            "Accompanied by Maine maple syrup",
            "sausage links",
            "warm tomato soup or Gazpacho"
          ]
        }
      ],
      onHover: false,
      elementID: "",
      classIndice: false,
      onClick: false
    };
  }

  handleScroll = () => {
    var pic = document.getElementById("meal1");
    var positionPic = pic ? pic.getBoundingClientRect().top : false;
    var screenPosition = window.innerHeight / 1.3;

    if (positionPic && positionPic < screenPosition) {
      this.setState({
        classIndice: true,
        classTitle: true
      });
    } else {
      this.setState({
        classIndice: false,
        classTitle: false
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  closePicture = () => {
    this.setState({
      onClick: !this.state.onClick
    });
  };
  effectPictures = ID => {
    this.setState({
      onClick: !this.state.onClick
    });
  };
  paragraphAppear = ID => {
    this.setState({
      onHover: !this.state.onHover,
      elementID: ID
    });
  };

  render() {
    var picSelected = this.state.meals.filter(
      element => element.id == this.state.elementID
    );
    return (
      <section id="Gallery" className="gallery_section">
        <h1 className className={this.state.classTitle ? "appear_title" : ""}>
          {" "}
          Some pics
        </h1>
        <div className={"meal_container"}>
          {this.state.meals.map((element, index) => (
            <figure
              className={this.state.classIndice ? "meal_pic_effect" : ""}
              id={element.id}
              key={element.id}
              onMouseOver={() => this.paragraphAppear(element.id)}
              onMouseOut={() => this.paragraphAppear(element.id)}
            >
              <img
                className={"menu_hover"}
                src={element.src}
                onClick={() => this.effectPictures(element.id)}
              />
              <div
                id={element.id}
                style={
                  this.state.onHover && this.state.elementID == element.id
                    ? { display: "block" }
                    : { display: "none" }
                }
              >
                <p>{element.name}</p>
              </div>
            </figure>
          ))}
          <div
            className={"picture_big"}
            style={
              this.state.onClick ? { display: "block" } : { display: "none" }
            }
          >
            <div className={"content_pic"}>
              <span onClick={this.closePicture}>
                <IoMdClose style={{ width: "3rem", fontSize: "1.8rem" }} />
              </span>
              <img src={picSelected == false ? [] : picSelected[0].src} />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Gallery;
