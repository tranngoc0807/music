import { Component } from "react";
import "../Support/Support.css";
class Support extends Component {
  render() {
    return (
      <div className="support">
        {/* <div className="collapse" id="collapseExample">
             <div className="mess">
             <div className="title-mess">
                 <h1>
                   Hi there
                 </h1>
                 <span>Welcome to our website.<br/> If you got any questions,<br/> feel free to leave us a message.<br/></span>
                  <span style={{paddingTop:'50px'}}>We reply immediately</span>
               </div>
               <div className="sub-title-mess">
               <div className="mb-3 row">
              <div className="col-sm-12">
                    <input type="password" className="form-control" placeholder="Enter you message" style={{ border:'0px', height:'60px'}}/>
                  </div>
                </div>
                <div style={{paddingLeft:'75%'}}>
                <button type="button" className="btn btn-light"  >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-square" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm4.5 5.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                    </svg>
               </button>
                </div>
               </div>
             </div>
               
           </div> */}
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ width: 150, height: 50, borderRadius: 20 }}
        >
          Live Support
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-chat cust-support"
            viewBox="0 0 16 16"
          >
            <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z" />
          </svg>
        </button>
      </div>
    );
  }
}
export default Support;
