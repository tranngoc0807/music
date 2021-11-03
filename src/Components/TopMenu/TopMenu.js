import React from "react";
import "../TopMenu/TopMenu.css";
import { Link } from "react-router-dom";
import Logo from "../../asset/img/logo.JPG";
import { showcarts, showPersonLogin } from "../../utils/common";
import { useGlobalContext } from "../../App";
import { withRouter } from "react-router-dom";
import { Collapse } from "antd";

function TopMenu(props) {
  const { cart } = useGlobalContext();
  const {location} = props;
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
  const handleDeleteToken = () => {
    window.localStorage.removeItem("token");
    props.history.push("/");
  };
  const { Panel } = Collapse;
  const renderLogin = () => {
    return (
      <div style={{ color: "white", display: "flex" }}>
        <div className="buton-person-user">
          <div style={{ paddingLeft: "27px", color: "#ffc069" }}>
            {showPersonLogin()}
          </div>
        </div>

        <div className="color-signout" style={{ paddingLeft: "8px" }}>
          {localStorage.getItem("username")}
        </div>
      </div>
    );
    // }
  };

  const hasToken = localStorage.getItem('token');

  return hasToken ? (
    <React.Fragment>
      <div className="header">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <div id="logo-home">
                <Link to="/">
                  <div onClick={handleloading}>
                    <img alt="" src={Logo} />
                  </div>
                </Link>
              </div>
            </a>
            <button
              className="navbar-toggler color-responsive"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="left-top-navbar">
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul
                  className="navbar-nav me-auto mb-2 mb-lg-0"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-around",
                  }}
                >
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      <Link to="/" className="nav-link">
                        <div onClick={handleloading} className="reload">
                          <b className="text-size">Buy Beats</b>
                        </div>
                      </Link>
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    aria-expanded="false"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                  >
                    <Link to="/Footer" className="nav-link">
                      <b className="text-size">Valuation</b>
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle "
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <b className="text-size">Service</b>
                    </a>
                    <ul
                      className="dropdown-menu custom-dropdown color-dropdown-menu"
                      aria-labelledby="navbarDropdown"
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
                        <li aria-expanded="false">
                          <a className="dropdown-item text-size" href="/">
                            Complain
                          </a>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li>
                    <Link to="/Contact" className="nav-link">
                      <b
                        className="text-size"
                        aria-expanded="false"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                      >
                        {" "}
                        Contact
                      </b>
                    </Link>
                  </li>
                  <li>
                    <button
                      variant="contained"
                      color="primary"
                      className="btn  count-cart"
                      aria-expanded="false"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarSupportedContent"
                      style={{ background: "black" }}
                      onClick={handleCheckCart}
                    >
                      <div className="cust-count">
                        <div>{showcarts()} </div>
                        <div className="count">
                          <div>{cart.length}</div>
                        </div>
                      </div>
                    </button>
                  </li>
                  {localStorage.getItem("token") ? (
                    <li className="solid-topmenu">
                      <div className="checkout-topmenu">
                        <div className="sub-dropdown-out">
                          <Collapse accordion>
                            <Panel header={renderLogin()} key="1">
                              <Link to="/" style={{ color: "black" }}>
                                <div className="cus-dropdown-checkout">
                                  <div className="cus-dropdown-checkout-item">
                                    <div className="left">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        class="bi bi-house-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                                        />
                                        <path
                                          fill-rule="evenodd"
                                          d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                                        />
                                      </svg>
                                    </div>
                                    <div className="right">Trang chủ</div>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/login" style={{ color: "black" }}>
                                <div className="cus-dropdown-checkout ">
                                  <div
                                    className="cus-dropdown-checkout-item"
                                    onClick={handleDeleteToken}
                                  >
                                    <div className="left">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="25"
                                        height="25"
                                        fill="currentColor"
                                        class="bi bi-box-arrow-right"
                                        viewBox="0 0 16 16"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                                        />
                                        <path
                                          fill-rule="evenodd"
                                          d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                                        />
                                      </svg>
                                    </div>

                                    <div className="right">Đăng Xuất</div>
                                  </div>
                                </div>
                              </Link>
                              <Link to="/" style={{ color: "black" }}>
                                <div className="cus-dropdown-checkout">
                                  <div className="cus-dropdown-checkout-item">
                                    <div className="left">
                                      {showPersonLogin()}
                                    </div>
                                    <div className="right">Đổi Tài Khoản</div>
                                  </div>
                                </div>
                              </Link>
                            </Panel>
                          </Collapse>
                          ,
                        </div>
                      </div>
                    </li>
                  ) : null}
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </React.Fragment>
  ) : '';
}
export default withRouter(TopMenu);
