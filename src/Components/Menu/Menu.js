import { Component } from "react";
import "../Menu/Menu.css";
class Menu extends Component {
  render() {
    return (
      <div className="top-menu">
        <div className="inner-header">
          <div className="custom-search">
            <nav className="navbar navbar-ligh">
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    style={{ width: "600px", height: "70px" }}
                  />
                  <div className="input-group-append">
                    <button class="btn btn-danger" type="button">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
        <div className="product">
          <div className="container">
            <div className="detail">
                
            </div>
            <div className="list-product">
              <table style={{border:'0px'}}>
                <tr>
                  <td>TITLE</td>
                  <td>TIME</td>
                  <td>BPM</td>
                  <td>TAGS</td>
                  <td>PRICE</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;
