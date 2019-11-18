import React from "react";
import { Component } from "react";

class Menus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classIndice: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var divMenus = document.getElementById("Menus");
    var positionTitle = divMenus ? divMenus.getBoundingClientRect().top : false;
    var screenPosition = window.innerHeight;
    console.log(this.state.classIndice);
    if (positionTitle && positionTitle < screenPosition) {
      this.setState({
        classIndice: true
      });
    }
  };

  render() {
    return (
      <section id="Menus">
        <div
          className={
            "cart" + " " + this.state.classIndice ? "opacity_container" : ""
          }
        >
          <div className="container">
            <h1> APPERTIZERS </h1>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
          </div>
          <div className="container">
            <h1> MAIN COURSE </h1>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
          </div>
          <div className="container">
            <h1> COFFEES </h1>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
          </div>
          <div className="container">
            <h1> COFFEES </h1>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
            <div className="menus">
              <div>
                {" "}
                <h3>
                  {" "}
                  SMALL SALAD <span> $ 8.25</span>{" "}
                </h3>
                <p> Lettuce mix, grilled corn and edamame</p>
              </div>

              <div>
                {" "}
                <h3>
                  {" "}
                  FRIED CHICKEN AND HONEY <span> $ 11.25</span>{" "}
                </h3>
                <p> Buttermilk chicken, thyme honey glaze, chipotle mayo</p>{" "}
              </div>

              <div>
                <h3>
                  {" "}
                  CLASSIC BEEF <span> $ 12.59 </span>{" "}
                </h3>
                <p> Capers, shallot, fresh herbs</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Menus;
