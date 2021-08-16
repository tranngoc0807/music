import React from "react";
import "../youtube/Youtube.css";
import Logo3 from "../../asset/img/logoproduct/logo3.png";
import { showEye, showCamera, showYoutube } from "../../utils/common";
function Youtube(props) {
  return (
    <div className="body-youtube">
      <div className="sub-body-youtube">
        <div className="sub-home-body-youtybe">
          <div className="sub-home-body-youtybe-left">
            <div className="sub-home-body-youtybe-left-chil">
              <div className="image-body-youtube">
                <img src={Logo3} style={{ width: "100%" }} alt="/" />
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <span>Trần Ngọc</span>
                <br />
                <span>847,000 subscribers</span>
              </div>
            </div>
            <div className="sub-home-body-youtybe-left-chil">
              <div className="image-body-youtube">
                <div className="image-body-youtube-eye">{showEye()}</div>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <span>Total views</span>
                <br />
                <span>208,513,300</span>
              </div>
            </div>
            <div className="sub-home-body-youtybe-left-chil">
              <div className="image-body-youtube">
                <div className="image-body-youtube-eye">{showCamera()}</div>
              </div>
              <div style={{ paddingLeft: "20px" }}>
                <span>Video</span>
                <br />
                <span>1,400</span>
              </div>
            </div>
            <div className="sub-home-body-youtybe-left-chil" style={{paddingLeft:'20px',paddingTop:'20px'}}>
              <a href="https://www.youtube.com/channel/UC0UgHl6U5wSCszY2-uB8syQ">
                <button type="button" className="btn btn-danger " style={{background:'#e1192b'}}>
                  {showYoutube()} Subscibe
                </button>
              </a>
            </div>
          </div>
          <div className="sub-home-body-youtybe-right">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/3gous8qqMlU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Youtube;
