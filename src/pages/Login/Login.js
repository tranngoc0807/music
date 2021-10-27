import { withRouter, Link } from "react-router-dom";
import { useState } from "react";
import "../Login/Login.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Spin } from "antd";
import axios from "axios";
toast.configure();
function Login(props) {
  const [error, setError] = useState({});
  const [isLoading, setIsloading] = useState(false);
  const [signin, setSignIn] = useState({
    username: "",
    password: "",
  });
  const onchangeSignIn = (e) => {
    const { name, value } = e.target;
    setSignIn({ ...signin, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const isError = {};
    if (signin.username === "") {
      isError["username"] = "loi";
    }
    if (signin.password === "") {
      isError["password"] = "loi";
    } else {
      const checksignin = await axios.post(
        "https://sale-beat.herokuapp.com/sign-in",
        signin
      );
      console.log(checksignin);
      if (checksignin.data.token !== undefined) {
        localStorage.setItem("token", checksignin.data.token);
        localStorage.setItem("username", checksignin.data.username);
        if (checksignin.data.token) {
          setIsloading(true);
        }
        props.history.push("/");
        toast.info("🦄 Well Come!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error(" Tài khoản không tồn tại!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
          <div className="body-login">
            {isLoading ? (
              <div className="loading" style={{background:"black"}}>
                <Spin />
              </div>
            ) : (
              <div className="sub-login">
                <h2 style={{ textAlign: "center" }}>SIGN IN</h2>
                <Link to="/SIGNUP">
                  <h5 style={{ float: "right" }}>SIGN UP</h5>
                </Link>

                <form style={{ padding: "30px 10px" }}>
                  <div className="form-group">
                    <label
                      htmlFor="exampleInputEmail1"
                      style={{ paddingBottom: "20px" }}
                    >
                      Username
                    </label>
                    <br />
                    {error.username ? (
                      <b style={{ color: "#cf1322" }}>
                        {" "}
                        * điền thông tin địa chỉ giao hàng vào ô trống
                      </b>
                    ) : null}
                    <input
                      type="name"
                      className="form-control cust-login"
                      value={signin.username}
                      name="username"
                      onChange={onchangeSignIn}
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
                      name="password"
                      className="form-control cust-login"
                      value={signin.password}
                      onChange={onchangeSignIn}
                    />
                  </div>
                  <div className="form-check" style={{ paddingTop: "20px" }}>
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck1"
                    />
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Check me out
                    </label>
                  </div>
                  <div style={{ paddingTop: "20px" }}>
                    <button
                      type="submit"
                      className="btn btn-primary cust-submit-login"
                      onClick={(e) => handleSubmit(e)}
                    >
                      SIGN IN
                    </button>
                  </div>
                </form>
                <hr />
                <div className="footer-login">
                  <span>Forgot password</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
