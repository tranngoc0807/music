import React, { Component } from "react";
import "../TopMenu/TopMenu.css";
import { Link } from "react-router-dom";
import Logo from "../../asset/img/logo.JPG";
class TopMenu extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div id="logo-home">
            <Link to="/" >
                   <img src={Logo}/>
            </Link>
            </div>
            
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="menu-item">
                <li>
                  <Link to="/" className="nav-link">
                    <b>BUY BEATS</b>
                  </Link>
                </li>
                <li>
                  <Link to="/Footer" className="nav-link">
                    <b>ĐỊNH GIÁ</b>
                  </Link>
                </li>
                <li >
                  <Link to="/License" className="nav-link">
                    <b style={{color:'#F4C82A'}}> NÂNG CẤP GIẤY PHÉP</b> 
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                  <div className="dropdown">
                    <button className="btn  dropdown-toggle" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                     <b style={{color:'white',fontSize:'12px'}}>DỊCH VỤ</b> 
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <Link to="/Customize" className="nav-link">
                         <li><a className="dropdown-item" href="#">Customize</a></li>
                      </Link>
                      <Link to="/BuyBeast" className="nav-link">
                         <li><a className="dropdown-item" href="#">Buy Beats</a></li>
                      </Link>
                      
                      <Link to="Complain" className="nav-link">
                          <li><a className="dropdown-item" href="#">Khiếu Nại Bản Quyền</a></li>
                      </Link>
                      
                    </ul>
                  </div>
                  </Link>
                </li>
                <li >
                  <Link to="/Contact" className="nav-link">
                    <b> LIÊN HỆ CHÚNG TÔI</b>
                  </Link>
                </li>
                <li className="">
                  <Link to="/Login" className="nav-link">
                    <b>LOGIN</b>
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </React.Fragment>
    );
  }
}
export default TopMenu;
