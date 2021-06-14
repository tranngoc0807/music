import { Component } from "react";
import "../Login/Login.css";
import { Link } from "react-router-dom";
class Login extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container" style={{display:"flex",justifyContent:'center'}}>
                <div className="login-wapper">
                          <div className="body-login">
                            <div className="sub-login">
                            <h2 style={{textAlign:'center'}}>SIGN IN</h2>
                            <Link to="/SIGNUP">
                               <h5  style={{float:'right'}}>SIGN UP</h5>
                            </Link>
                           
                            <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Username</label>
                                <input type="email" className="form-control cust-login"  />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control cust-login"  />
                              </div>
                              <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                              </div>
                              <button type="submit" className="btn btn-primary cust-submit-login">SIGN IN</button>
                            </form>
                                <hr/>
                                <div className="footer-login">
                                      <span>Forgot password</span>
                                </div>
                            </div>
                               
                          </div>
                </div>
                
        </div>
      </div>
    );
  }
}
export default Login;
