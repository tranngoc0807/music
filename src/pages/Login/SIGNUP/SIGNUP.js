import { Component } from "react";
import "../SIGNUP/SIGNUP.css";
import { Link } from "react-router-dom";
class SIGNUP extends Component {
  render() {
    return (
      <div className="Login">
        <div className="container" style={{display:"flex",justifyContent:'center'}}>
                <div className="login-wapper">
                          <div className="body-signup">
                            <div className="sub-signup">
                            <h2 style={{textAlign:'center'}}>SIGN UP</h2>
                            <Link to="/Login">
                               <h5  style={{float:'right'}}> SIGN IN </h5>
                            </Link>
                           
                            <form>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">USERNAME</label>
                                <input type="email" className="form-control cust-login"  />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" className="form-control cust-login" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputPassword1">REPEAT Password</label>
                                <input type="password" className="form-control cust-login" />
                              </div>
                              <div className="form-group">
                                <label htmlFor="exampleInputEmail1">EMAIL ADDRESS</label>
                                <input type="email" className="form-control cust-login"  />
                              </div>
                              <button type="submit" className="btn btn-primary cust-submit-login">Submit</button>
                            </form>
                                <hr/>
                                <div className="footer-signup">
                                      <span>forget password</span>
                                </div>
                            </div>
                               
                          </div>
                </div>
        </div>
      </div>
    );
  }
}
export default SIGNUP;
