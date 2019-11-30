import React from "react";

import { Component } from "react";

class Menus extends Component {
  constructor(props) {
    super(props);

    this.state = {
      classIndice: false,
      classTitle: false,
      ID: ""
    };
    this.meal1 = React.createRef();
    this.meal2 = React.createRef();
    this.meal3 = React.createRef();
    this.meal4 = React.createRef();
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    var screenPosition = window.innerHeight;

    var menu1 = this.meal1.current;
    var position1 = menu1 ? menu1.getBoundingClientRect().top : "0";

    var menu2 = this.meal2.current;
    var position2 = menu2 ? menu2.getBoundingClientRect().top : "0";

    var menu3 = this.meal3.current;
    var position3 = menu3 ? menu3.getBoundingClientRect().top : "0";

    var menu4 = this.meal4.current;
    var position4 = menu4 ? menu4.getBoundingClientRect().top : "0";

    if (position1 && position1 < screenPosition) {
      this.setState({
        ID1: "menu-part1"
      });
    } else {
      this.setState({
        ID1: ""
      });
    }
    if (position2 && position2 < screenPosition) {
      this.setState({
        ID2: "menu-part2",
        classTitle: true
      });
    } else {
      this.setState({
        ID2: "",
        classTitle: false
      });
    }
    if (position3 && position3 < screenPosition) {
      this.setState({
        ID3: "menu-part3"
      });
    } else {
      this.setState({
        ID3: ""
      });
    }
    if (position4 && position4 < screenPosition) {
      this.setState({
        ID4: "menu-part4"
      });
    } else {
      this.setState({
        ID4: ""
      });
    }
  };

  //menu_effect a placter dans container
  render() {
    return (
      <section id="Menus">
        <h1
          className={
            "menu_title" +
            " " +
            (this.state.ID1 == "menu-part1" ? "appear_title" : " ")
          }
        >
          {" "}
          Our menu
        </h1>
        <div className="container_cart">
          <div className="cart">
            <div
              ref={this.meal1}
              id="menu-part1"
              className={
                "container" +
                " " +
                (this.state.ID1 == "menu-part1" ? "menu_effect" : " ")
              }
            >
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
            <div
              id="menu-part2"
              ref={this.meal2}
              className={
                "container" +
                " " +
                (this.state.ID2 == "menu-part2" ? "menu_effect" : " ")
              }
            >
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
            <div
              id="menu-part3"
              ref={this.meal3}
              className={
                "container" +
                " " +
                (this.state.ID3 == "menu-part3" ? "menu_effect" : " ")
              }
            >
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
            <div
              ref={this.meal4}
              id="menu-part4"
              className={
                "container" +
                " " +
                (this.state.ID4 == "menu-part4" ? "menu_effect" : " ")
              }
            >
              <h1> ICE CREAM</h1>
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
        </div>
      </section>
    );
  }
}

export default Menus;
