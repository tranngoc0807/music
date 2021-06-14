import { Component } from "react";
import "../Contact/Contact.css";
class Contact extends Component {
  render() {
    return (
         <div className="wrapper">
              <div className="container">
                  <div className="title">
                         <button type="button" class="btn btn-warning" style={{width:100,marginTop:100,color:'#000'}}>TIẾP XÚC</button>
                         <h1 style={{fontSize:36,paddingTop:20}}>Cần trợ giúp với trang web của chúng tôi?</h1>
                         <h4 style={{padding:'30px 30px'}}>Get answers, feedback and any questions.<br/>Our team will get back to you as soon as possible!</h4>
                  </div>
                  <div className="body-contact">
                      <div className="sub-body-contact">
                      <div className="col-xs-12col-sm-12col-md-12 col-lg-12 mt-3">
                     <div className="row">
                        <div className="col-6 mb-3  mt-3 custom">
                                <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
                                <input type="email" className="form-control"  placeholder="First Name" />
                            </div>    
                            <div className="col-6 mb-3 mt-3 custom">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
                                <input type="email" className="form-control"  placeholder="Last Name" />
                            </div> 
                        <div className="col-12 mb-3  mt-3 custom">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                                <input type="email" className="form-control"  placeholder="Địa Chỉ Email" />
                            </div>
                        
                            <div className="col-12 mb-3  mt-3 custom">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Subject</label>
                                <input type="email" className="form-control"  placeholder="Subject" />
                            </div>
                            <div className="col-12 mb-3  mt-3 custom">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                                <textarea className="form-control bg-Dark"   placeholder="tin nhắn của bạn" rows={3} defaultValue={""} />
                            </div>
                            
                     </div>
                     <div style={{textAlign:'center',padding:'30px 0'}}>
                             <button type="button" class="btn btn-success  mt-3" style={{ width:'300px',height:'70px'}}>GỬI BIỂU MẪU</button>
                     </div>
                        </div>   
                      </div>
                  </div>
              </div>
              
         </div>
    );
  }
}
export default Contact;
