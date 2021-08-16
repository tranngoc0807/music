import { Component } from "react";
import "../Complain/Complain.css";
class Complain extends Component {
  render() {
    return (
         <div className="wrapper">
              <div className="container">
                  <div className="title">
                         <button type="button" className="btn btn-warning" style={{marginTop:100}}>Tranh Chấp Bản Quyền</button>
                         <h1 style={{fontSize:36,paddingTop:20}}>Tranh chấp khiếu nại về bản quyền.</h1>
                         <h4 style={{padding:'30px 30px'}}>Nếu bạn đã mua đúng giấy phép beat và bạn nhận được khiếu nại về bản quyền trong video của mình.
Vui lòng sử dụng mẫu dưới đây để thông báo cho chúng tôi.</h4>
                  </div>
                  <div className="body-contact">
                      <div className="sub-body-contact">
                      <div className="col-xs-12col-sm-12col-md-12 col-lg-12 mt-3">
                     <div className="row">
                        <div className="col-6 mb-3  mt-3  ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="email" className="form-control"  placeholder="First Name" />
                            </div>    
                            <div className="col-6 mb-3 mt-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="email" className="form-control"  placeholder="Last Name" />
                            </div> 
                            <div className="col-6 mb-3  mt-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Nghệ Sĩ</label>
                                <input type="email" className="form-control" />
                            </div>   
                            <div className="col-6 mb-3  mt-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control"  placeholder="Email" />
                            </div>   
                        <div className="col-12 mb-3  mt-3 ">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Liên kết của video có bản quyền của bạn</label>
                                <input type="email" className="form-control"  placeholder="example:" />
                            </div>
                            <div className="col-6 mb-3 mt-3 cust ">
                                <label htmlFor="exampleFormControlSelect1">Purchased from</label>
                                <select className="custom-select cust" id="inputGroupSelect02">
                                    <option selected>Lựa chọn...</option>
                                    <option value={1}>Thaibeast</option>
                                    <option value={2}>maxrgh</option>
                                    <option value={3}>fintrax</option>
                                    </select>

                            </div>
                            <div className="col-6 mb-3 mt-3 cust ">
                                <label htmlFor="exampleFormControlSelect1 ">Giấy phép của bạn</label>
                                    <select className="custom-select" id="inputGroupSelect02">
                                        <option selected>Lựa chọn...</option>
                                        <option value={1}>Giấy phép cơ bản</option>
                                        <option value={2}>giấy phép độc quyền</option>
                                        <option value={3}>giấy phép không giới hạn</option>
                                        </select>

                            </div>
                            <div className="col-6 mb-3 mt-3  ">
                                <label htmlFor="exampleFormControlSelect1">Bằng chứng về Giấy phép</label>
                                <select className="custom-select" id="inputGroupSelect02">
                                    <option selected>Lựa chọn...</option>
                                    <option value={1}>tải lên bằng chứng cấp phép</option>
                                    <option value={2}>tải lên thỏa thuận cấp phép</option>
                                    <option value={3}>tôi có giao dịch thanh toán</option>
                                    </select>

                            </div>
                            
                     </div>
                     <div style={{textAlign:'center',padding:'30px 0'}}>
                             <button type="button" className="btn btn-success  mt-3" style={{ width:'300px',height:'70px'}}>GỬI BIỂU MẪU</button>
                     </div>
                        </div>   
                      </div>
                  </div>
              </div>
              
         </div>
    );
  }
}
export default Complain;
