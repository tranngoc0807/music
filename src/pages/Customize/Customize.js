import { Component } from "react";
import "../Customize/Customize.css";
class Customize extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="title">
            <button
              type="button"
              className="btn btn-warning"
              style={{ width: 100, marginTop: 100, color: "#000" }}
            >
              Mới
            </button>
            <h1 style={{ fontSize: 36, paddingTop: 20 }}>
              Customize your license and price.
            </h1>
            <h4 style={{ padding: "20px 0px", fontSize: "1.2rem" }}>
              Customize your license and only pay for what you need!
            </h4>
          </div>
          <div className="body-contact">
            <div className="sub-body-contact">
              <div className="col-xs-12col-sm-12col-md-12 col-lg-12 mt-3">
                <div className="row">
                  <div className="col-12 mb-3  mt-3 custom">
                    <h2>Let's get started</h2>
                    <h6>You can only purchase one beat a time.</h6>
                    <hr />
                  </div>

                  <div className="col-12 mb-3  mt-3 custom">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Beat Title
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Example:Rosy Lips"
                    />
                  </div>

                  <div className="col-12 mb-3  mt-5 custom">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Link to the beat (If applicable)
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Example:https://www.youtube.com/channel/UC0UgHl6U5wSCszY2-uB8syQ"
                    />
                  </div>
                  <div className="col-12 mb-3 mt-5  mt-3 custom">
                    <h2>Choose your license options:</h2>
                    <h6>
                      Choose options that are right for you. We have different
                      pricing options to suit the stage you’re at in your music
                      career.
                    </h6>
                    <hr />
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
                </div>
                <div className="sub-button">
                  <button type="button" className="btn btn-success  mt-3">
                    KẾ TIẾP
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
export default Customize;
