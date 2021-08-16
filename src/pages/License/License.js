import { Component } from "react";
import "../License/License.css";
class License extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="title">
            <h1 style={{ fontSize: 36, paddingTop: 100 }}>
              Dễ dàng nâng cấp giấy phép của bạn lên một cấp mới
            </h1>
            <div className="sub-title">
              Nếu bạn đã mua một giấy phép không độc quyền, bạn có thể sử dụng
              biểu mẫu bên dưới để nâng cấp giấy phép của mình lên một giấy phép
              cao hơn. Bạn sẽ chỉ phải trả phần chênh lệch giữa giấy phép hiện
              tại của mình và giấy phép bạn muốn nâng cấp lên.
            </div>
          </div>
          <div className="body-License">
            <div className="sub-body-License">
              <div className="col-xs-12col-sm-12col-md-12 col-lg-12 mt-3">
                <div className="row">
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Beat Title
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="ví dụ:loveless"
                    />
                  </div>

                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">Upgrade Type</label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div>
                    <div className=" mb-3 mt-3 cust cust-select ">
                      <label htmlFor="exampleFormControlSelect1">
                        Bằng chứng về Giấy phép
                      </label>
                      <select className="form-control">
                        <option>Streming Unlimited</option>
                        <option>Unlimited to Enterprise</option>
                        <option>Beginner to Unlimited</option>
                        <option>Standard to Unlimited</option>
                        <option>Streaming to Inclusive License</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Full Name
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Jone doe "
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>

                  <div className="col-6 mb-3 mt-3 cust  ">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Tên nghệ sĩ / Tên công ty
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Lil Nas X"
                    />
                  </div>

                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">Quốc Gia</label>
                    <select className="form-control bg-Dark">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="table">
                    <table>
                      <tr>
                        <td>Mục</td>
                        <td>Gía Bán</td>
                        <td>Qty</td>
                        <td>Tổng dòng</td>
                      </tr>
                      <tr>
                        <td>
                          Upgrade Type - Non-profit to Monetization License
                        </td>
                        <td>$35.00</td>
                        <td>1</td>
                        <td>$35.00</td>
                      </tr>
                      <tr>
                        <td colSpan="3">Toàn bộ</td>
                        <td>$35.00</td>
                      </tr>
                    </table>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label">
                      tôi đã đọc và đồng ý với{" "}
                      <a style={{ color: "#F4C82A" }} href="/">
                        {" "}
                        Các điều khoản và điều kiện
                      </a>{" "}
                      Các điều khoản và{" "}
                      <a style={{ color: "#F4C82A" }} href="/">
                        điều kiện và Chính sách bảo mật
                      </a>
                    </label>
                  </div>
                </div>
                <div style={{ textAlign: "center", padding: "30px 0px" }}>
                  <button
                    type="button"
                    className="btn btn-warning  mt-3"
                    style={{ width: "300px", height: "70px", fontSize: 20 }}
                  >
                    Make a Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default License;
