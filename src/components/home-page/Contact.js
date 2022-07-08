import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  
  return (
    <div className="contact grey darken-1">
        
      <a className="anchor" name="Contact" />

      <div className="container grey lighten-3 panel">
        <div className="row">
          <h4 className="">Contact Us</h4>
          <div className="hr"></div>
        </div>
        <div className="row">
          <div className="col s12">
            <p className="">** This form is not to be used for emergencies.  If you are experiencing a medical emergency, please dial 911 or go to your local emergency room.</p>
            <p className="">** Appointments are by request, and availability is subject to change.</p>
            <p>Please contact us to book an appointment.&nbsp;</p>
          </div>
        </div>
        <div className="row center-align">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfBZ6Ot4WP0XDYyiieWitIG5E0wfXvFEv2XdGHN9dBpQ1F-ag/viewform?embedded=true" width="100%" height="950" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        </div>
        <div className="row status center-align"></div>
        
      </div>

      <div className="location panel grey darken-4 white-text">
        <div className="row">
          <div className="col s12 m6">
            <p className="font_8"><span>Galloping Greatly</span></p>
            <a
              className="btn btn-round blue lighten-3"
              title="Navigate"
              target="_blank"
              href="https://www.google.com/maps/dir//9164+E+825+S,+Upland,+IN+46989/@40.4321404,-85.5011047,17z"
            >
              <i className="material-icons">navigation</i> 
            </a>
            <p className="font_8">
              <span>9164 E 825 S,</span></p>

            <p className="font_8"><span>Upland, IN 46989</span></p>

            <p className="font_8"><span><a data-auto-recognition="true" href="mailto:gallopinggreatly@gmail.com">gallopinggreatly@gmail.com</a></span></p>

            <a
              className="btn btn-round green"
              title="Call"
              target="_blank"
              href="tel: 7655066462"
            >
              <i className="material-icons">call</i> 
            </a>

            <p className="font_8">(765) 506-6462
            <span><a href="tel: 7655066462" target="_blank" rel="noreferrer noopener"></a></span></p>

            <p className="font_8">&nbsp;</p>
          </div>
          <div className="col s12 m6">
            <h5 className="font_8"><span>OPERATING HOURS:</span></h5>

            <p className="font_8"><span>Mon - Fri: By appointment only</span></p>

            <p className="font_8"><span>​​Saturday: closed</span></p>

            <p className="font_8"><span>​Sunday: closed</span></p>

            <p className="font_8"><span><span className="wixGuard">​</span></span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
