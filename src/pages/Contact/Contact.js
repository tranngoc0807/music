import authHoc from "../../hocs/authHoc";
import "../Contact/Contact.css";
function Contact() {
  return (
    <div className="wrapper">
      <div className="container">
        <div className="title">
          <button
            type="button"
            className="btn btn-warning"
            style={{ width: 100, marginTop: 100, color: "#000" }}
          >
            CONTACT
          </button>
          <h1 style={{ fontSize: 36, paddingTop: 20 }}>
            Cần trợ giúp với trang web của chúng tôi?
          </h1>
          <h4 style={{ padding: "30px 30px" }}>
            Get answers, feedback and any questions.
            <br />
            Our team will get back to you as soon as possible!
          </h4>
        </div>
        <div className="body-contact">
          <div className="sub-body-contact">
            <div className="col-xs-12col-sm-12col-md-12 col-lg-12 mt-3">
              <div className="row">
                <div className="col-6 mb-3  mt-3 custom">
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
                <div className="col-6 mb-3 mt-3 custom">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Last Name"
                  />
                </div>
                <div className="col-12 mb-3  mt-3 custom">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Adress Email"
                  />
                </div>

                <div className="col-12 mb-3  mt-3 custom">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Subject
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="col-12 mb-3  mt-3 custom-example">
                  <label
                    htmlFor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control bg-Dark"
                    placeholder="Your Feedback"
                    rows={3}
                    defaultValue={""}
                  />
                </div>
              </div>
              <div style={{ textAlign: "center", padding: "30px 0" }}>
                <button
                  type="button"
                  className="btn btn-success  mt-3"
                  style={{ width: "60%", height: "70px" }}
                >
                  SEN TO DONE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
