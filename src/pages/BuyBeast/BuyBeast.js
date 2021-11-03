import "../BuyBeast/BuyBeast.css";
import authHoc from "../../hocs/authHoc";
import { Link } from "react-router-dom";
function BuyBeast() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">
          <button
            type="button"
            className="btn btn-warning"
            style={{ marginTop: 100, color: "#000" }}
          >
            ĐẶT HÀNG THỦ CÔNG
          </button>
          <h1 style={{ fontSize: 36, paddingTop: 20 }}>Buy Beat License</h1>
          <h4 style={{ padding: "30px 30px" }}>
            Nếu bạn không thể tìm thấy hoặc không thể mua beat trực tiếp từ cửa
            hàng trực tuyến. Vui lòng điền vào mẫu dưới đây để đặt hàng thủ
            công.
          </h4>
        </div>
        <div className="body-BuyBeast">
          <div className="sub-body-BuyBeast">
            <div className="row">
              <div style={{ padding: "30px 30px" }}> Bước 1</div>
              <div className="progress-left">
                <span className="sub-progress" style={{ paddingLeft: "500px" }}>
                  50%
                </span>
              </div>
              <div className="progress-right"></div>
              <div style={{ padding: "30px 30px" }}>
                <h2>Which beat do you want to purchase?</h2>
                <h6>You can only purchase one beat a time..</h6>
              </div>
              <hr />
              <div>
                <div>How many beats do you want to purchase?</div>
                <div className="check-box">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      1 Beast
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      2 Beats
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      3 Beats (Save 10%)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      4 Beats (Save 15%)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      5 Beats (Save 20%)
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      defaultValue
                      id="defaultCheck1"
                    />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      6 Beats (Save 30%)
                    </label>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6 mb-3  mt-3 cust">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      1. Beat Title / Link
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">
                      1.1 License Type
                    </label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3  mt-3 cust">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      2. Beat Title / Link
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">
                      2.1 License Type
                    </label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3  mt-3 cust">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      3. Beat Title / Link
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">
                      3.1 License Type
                    </label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3  mt-3 cust">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      4. Beat Title / Link
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">
                      4.1 License Type
                    </label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="col-6 mb-3  mt-3 cust">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      5. Beat Title / Link
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="col-6 mb-3 mt-3 cust ">
                    <label htmlFor="exampleFormControlSelect1">
                      Purchased from
                    </label>
                    <select className="form-control">
                      <option>Streming Unlimited</option>
                      <option>Unlimited to Enterprise</option>
                      <option>Beginner to Unlimited</option>
                      <option>Standard to Unlimited</option>
                      <option>Streaming to Inclusive License</option>
                    </select>
                  </div>
                  <div className="table">
                    <table>
                      <tbody>
                        <tr>
                          <td>Mục</td>
                          <td>Gía Bán</td>
                          <td>Qty</td>
                          <td>Tổng dòng</td>
                        </tr>
                        <tr>
                          <td>
                            Stream/Plays Limitation - 50,000 Stream/Plays
                            (Price: $2)
                          </td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>
                        <tr>
                          <td>
                            Performing Rights - 1 Performing Rights (Price: $3)
                          </td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>
                        <tr>
                          <td>Sử dụng đồng bộ hóa - Non-Synchronization Use</td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>
                        <tr>
                          <td>
                            Agreement Term Duration - 1-years term (Included)
                          </td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>
                        <tr>
                          <td>
                            Song Royalty Registration (eg. ASCAP, BMI, PRS, PROs
                            etc.) - No Song Registration
                          </td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>

                        <tr>
                          <td>
                            Broadcasting Rights - 1 Broadcasting Rights (Price:
                            $3)
                          </td>
                          <td>$2.00</td>
                          <td>1</td>
                          <td>$2.00</td>
                        </tr>
                        <tr>
                          <td colSpan="3">Toàn Bộ</td>
                          <td>$13.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="sub-button">
                    <Link to="/Oder">
                      <button type="button" className="btn btn-success  mt-3">
                        KẾ TIẾP
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BuyBeast;
