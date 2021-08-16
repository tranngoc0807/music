import React from "react";
import "../TopMenu/TopMenu.css";
import { Link } from "react-router-dom";
import Logo from "../../asset/img/logo.JPG";
import { showcarts, showLogin, showPersonLogin } from "../../utils/common";
import { useGlobalContext } from "../../App";
import { withRouter } from "react-router-dom";
function TopMenu(props) {
  const { cart } = useGlobalContext();
  const handleCheckCart = () => {
    if (cart.length !== 0) {
      props.history.push("/Cart");
    }
  };
  const handleloading = () => {
    if (window.location.pathname !== "/") {
      props.history.push("/");
    } else {
      return window.location.reload();
    }
  };
  const handleDeleteToken =()=>{
    window.localStorage.removeItem("token")
    props.history.push("/");
  }
  const renderLogin = () => {
    if (localStorage.getItem("token") === null) {
      return (
        <Link to="/Login" className="nav-link">
          <div style={{ display: "flex" }}>
            <div>{showLogin()}</div>
            <div>
              <b className="text-size" style={{ paddingLeft: "5px" }}>
                Log In
              </b>
            </div>
          </div>
        </Link>
      );
    } else {
      return (
        <div style={{ color: "white", display: "flex" }}>
          <div className="buton-person-user">
            <div style={{ paddingLeft: "27px", color: "#ffc069" }}>
              {showPersonLogin()}
            </div>
            <div className="dropdown-out" style={{ paddingTop: "10px" }}>
              <button type="button" className="btn btn-secondary"
                 onClick={handleDeleteToken}
              >
                Đăng xuất
              </button>
            </div>
          </div>

          <div style={{ paddingLeft: "8px" }}>{localStorage.getItem('username')}</div>
        </div>
      );
    }
  };
  return (
    <React.Fragment>
      <div className="header">
        <div className="body-topmenu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div id="logo-home">
              <Link to="/">
                <div onClick={handleloading}>
                  <img alt="" src={Logo} />
                </div>
              </Link>
            </div>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="menu-item">
                <li>
                  <Link to="/" className="nav-link">
                    <div onClick={handleloading} className="reload">
                      <b className="text-size">Buy Beats</b>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/Footer" className="nav-link">
                    <b className="text-size">Valuation</b>
                  </Link>
                </li>
                <li>
                  <Link to="/License" className="nav-link">
                    <b className="text-size"> License</b>
                  </Link>
                </li>
                <li>
                  <div className="dropdown">
                    <button
                      className="btn "
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <b className="text-size" style={{ color: "#fff" }}>
                        Service
                      </b>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <Link to="/Customize" className="nav-link">
                        <li>
                          <a className="dropdown-item text-size" href="/">
                            Customize
                          </a>
                        </li>
                      </Link>
                      <Link to="/BuyBeast" className="nav-link">
                        <li>
                          <a className="dropdown-item text-size" href="/">
                            Buy Beats
                          </a>
                        </li>
                      </Link>

                      <Link to="Complain" className="nav-link">
                        <li>
                          <a className="dropdown-item text-size" href="/">
                            Complain
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link to="/Contact" className="nav-link">
                    <b className="text-size"> Contact</b>
                  </Link>
                </li>
                <li>
                  <button
                    variant="contained"
                    color="primary"
                    className="btn "
                    style={{ background: "black" }}
                    onClick={handleCheckCart}
                  >
                    <div className="cust-count">
                      <div>{showcarts()} </div>
                      <div className="count">
                        <div>{cart.length}</div>
                      </div>
                      <div style={{ paddingLeft: "5px" }}></div>
                    </div>
                  </button>
                </li>
                <li style={{ borderLeft: "1px solid white" }}>
                  {renderLogin()}
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </React.Fragment>
  );
}
export default withRouter(TopMenu);
