import "../Use/Use.css";
import { useState } from "react";
import { withRouter } from "react-router-dom";
import { useGlobalContext } from "../../App";
function Use(props) {
  const {setCart } = useGlobalContext();
  // console.log(cart);
  const [error, setError] = useState({});
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    address: "",
  });

  //lấy thông tin từ ô input
  const onchangeOrder = (e) => {
    const { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };
  // console.log(order);
  const handlePay = (e) => {
    e.preventDefault();
    const isError = {};
    if (order.name === "") {
      isError["name"] = "loi";
    }
    if (order.phone === "") {
      isError["phone"] = "loi";
    }
    if (order.address === "") {
      isError["address"] = "loi";
    } else {
      props.history.push("/");
    }
    setError(isError);
  
    setCart([]);
  };
  return (
    <div className="wrapper">
      <div className="container">
        <div className="information-use">
          <div className="sub-information-use">
            <div className="top-use-information">
              <div>Nhập thông tin</div>
            </div>
            <div className="body-use-information">
              <div className="sub-body-use-information">
                <div className="top-sub-body-use-information">
                  <div className="name-sub-body-use-information">
                    <div className="mb-3 ">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Họ và Tên:
                      </label>
                      <br />
                      {error.name ? (
                        <b style={{ color: "#cf1322" }}>
                          *Điền đầy đủ họ và tên
                        </b>
                      ) : null}
                      <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="họ và tên"
                        name="name"
                        value={order.name}
                        onChange={onchangeOrder}
                      />
                    </div>
                  </div>
                  <div className="phone-sub-body-use-information">
                    <div className="mb-3 ">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Số Điện Thoại :
                      </label>
                      <br />
                      {error.phone ? (
                        <b style={{ color: "#cf1322" }}>
                          {" "}
                          *Điền số điện thoại người nhận
                        </b>
                      ) : null}
                      <input
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="phone"
                        name="phone"
                        value={order.phone}
                        onChange={onchangeOrder}
                      />
                    </div>
                  </div>
                </div>
                <div className="body-sub-body-use-information">
                  <div className="mb-3 ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Địa chỉ giao hàng
                    </label>
                    <br />
                    {error.address ? (
                      <b style={{ color: "#cf1322" }}>
                        {" "}
                        * điền thông tin địa chỉ giao hàng vào ô trống
                      </b>
                    ) : null}
                    <input
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Địa chỉ giao hàng"
                      name="address"
                      value={order.address}
                      onChange={onchangeOrder}
                    />
                  </div>
                </div>
                <div className="footer-sub-body-use-information">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlTextarea1"
                      className="form-label"
                    >
                      Phản Hồi về dịch vụ
                    </label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: "30px 0px" }}>
                  <button
                    type="submit"
                    className="btn btn-danger"
                    onClick={(e) => handlePay(e)}
                  >
                    Hoàn Thành
                  </button>
                </div>
              </div>
            </div>
            <div className="footer-use">
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Use);
