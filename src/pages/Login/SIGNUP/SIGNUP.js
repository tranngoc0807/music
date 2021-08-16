import "../SIGNUP/SIGNUP.css";
import { withRouter, Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();
function SIGNUP(props) {
  const [error, setError] = useState({});
  const [signup, setSignup] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const onchangeOrder = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signup, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const isError = {};
    if (signup.userName === "") {
      isError["userName"] = "loi";
    }
    if (signup.password === "") {
      isError["password"] = "loi";
    }
    if (signup.email === "") {
      isError["email"] = "loi";
    } else {
      const register = await axios.post(
        "https://sale-beat.herokuapp.com/sign-up",
        signup
      );
      if (register.data==="Email already existed!") {
        toast.error(" Tài khoản đã tồn tại!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        props.history.push("/Login");
      }
    }
    setError(isError);
  };
  return (
    <div className="Login">
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div className="login-wapper">
          <div className="body-signup">
            <div className="sub-signup">
              <h2 style={{ textAlign: "center" }}>SIGN UP</h2>
              <Link to="/Login">
                <h5 style={{ float: "right" }}> SIGN IN </h5>
              </Link>

              <form>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ paddingBottom: "20px" }}
                  >
                    UseName
                  </label>
                  <br />
                  {error.userName ? (
                    <b style={{ color: "#cf1322" }}>
                      {" "}
                      * điền thông tin địa chỉ giao hàng vào ô trống
                    </b>
                  ) : null}
                  <input
                    type="email"
                    className="form-control cust-login"
                    name="userName"
                    value={signup.userName}
                    onChange={onchangeOrder}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputPassword1"
                    style={{ paddingBottom: "20px" }}
                  >
                    Password
                  </label>
                  <br />
                  {error.password ? (
                    <b style={{ color: "#cf1322" }}>
                      {" "}
                      * điền thông tin địa chỉ giao hàng vào ô trống
                    </b>
                  ) : null}
                  <input
                    type="password"
                    className="form-control cust-login"
                    name="password"
                    value={signup.password}
                    onChange={onchangeOrder}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="exampleInputEmail1"
                    style={{ paddingBottom: "20px" }}
                  >
                    Email Adress
                  </label>
                  <br />
                  {error.email ? (
                    <b style={{ color: "#cf1322" }}>
                      {" "}
                      * điền thông tin địa chỉ giao hàng vào ô trống
                    </b>
                  ) : null}
                  <input
                    type="email"
                    className="form-control cust-login"
                    name="email"
                    value={signup.email}
                    onChange={onchangeOrder}
                  />
                </div>
                <div style={{ paddingTop: "20px" }}>
                  <button
                    type="submit"
                    className="btn btn-primary cust-submit-login"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>
              </form>
              <hr />
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
export default withRouter(SIGNUP);
