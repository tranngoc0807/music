import { Component } from "react";
import "../Oder/Oder.css";
import { Link } from "react-router-dom";
class Oder extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="container">
          <div className="title">
            <button
              type="button"
              class="btn btn-warning"
              style={{ marginTop: 100, color: "#000" }}
            >
              ĐẶT HÀNG THÀNH CÔNG
            </button>
            <h1 style={{ fontSize: 36, paddingTop: 20 }}>Buy Beat License</h1>
            <h4 style={{ padding: "30px 30px" }}>
              Nếu bạn không thể tìm thấy hoặc không thể mua beat trực tiếp từ
              cửa hàng trực tuyến. Vui lòng điền vào mẫu dưới đây để đặt hàng
              thủ công.
            </h4>
          </div>
          <div className="body-Oder">
            <div className="sub-body-Oder">
              <div className="row">
                <div style={{ padding: "30px 50px" }}> Bước 2</div>
                <div className="progress" ></div>
                <div>   
                  <div className="row">
                    <div className="col-6 mb-3  mt-3 cust">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 mb-3  mt-3 cust">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 mb-3  mt-3 cust">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="col-6 mb-3 mt-3 cust ">
                      <label for="exampleFormControlSelect1">
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
                    <div className="col-6 mb-3 mt-3 cust ">
                      <label for="exampleFormControlSelect1">
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
                    <div className="col-6 mb-3  mt-3 cust">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        First Name
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="form-check" style={{padding:'30px 50px'}}>
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">
                           I consent to having this website store my submitted information so they can respond to my inquiry
                        </label>
                        </div>
                        <div className="oder-button">
                        <button type="button" class="btn btn-success  mt-3 " style={{width:'300px',height:'100px'}}>
                         Thủ tục thanh toán <br/>
                            $264.00
                        </button>
                        </div>
                   
                    <div>
                      <Link to="/BuyBeast">
                        <button type="button" class="btn btn-secondary  mt-3">
                          Quay Lại
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-oder">
              <div className="container">
                  <div className="sub-footer-oder">
                  Sau khi bạn hoàn tất quy trình ở trên, liên kết tải xuống và Thỏa thuận cấp phép sẽ được gửi theo cách thủ công đến địa chỉ email của bạn trong vòng 12 giờ sau khi thanh toán được thực hiện. Vui lòng kiểm tra thư mục Spam / Junk của bạn.
Bằng cách mua bản quyền không độc quyền, nhà sản xuất vẫn giữ toàn quyền của beat. Các tập tin âm thanh và hợp đồng được gửi khi hoàn thành thanh toán. Tất cả doanh số bán hàng là cuối cùng và không được hoàn lại. Bằng cách mua, bạn đồng ý với các điều khoản này. Cần nâng cấp hoặc gia hạn cho giấy phép của bạn?
                  </div>
                  <Link to ="/License">
                  <div className="oder-button-sub">
                        <button type="button" class="btn btn-light  mt-3 " >
                            Cần nâng cấp hoặc gia hạn cho giấy phép của bạn
                        </button>
                        </div>
                  </Link>
                 
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Oder;
