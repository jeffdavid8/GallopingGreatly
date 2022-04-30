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
            <p className="">**Appointments are by request, and availability is subject to change.</p>
            <p>Please contact us to book an appointment.&nbsp;</p>
        </div>
        <div className="row center-align">
          <form id="ContactForm" name="ContactForm" className="left-align" style={{width: "55%", margin: "0 auto"}}>
            <div id="comp-jsivube4" className="input-field _2nVk2 _3TyBu">
              <input type="text" name="first-name" id="input_comp-jsivube4" className="_1SOvY has-custom-focus" placeholder="" maxLength="100" />
              <label htmlFor="input_comp-jsivube4" className="aHD7c">First Name</label>
            </div>
            <div className="input-field _2nVk2">
              <input type="text" name="last-name" id="input_comp-kgkm1huc" className="_1SOvY has-custom-focus" placeholder="" maxLength="100" />
              <label htmlFor="input_comp-kgkm1huc" className="aHD7c">Last Name</label>
            </div>
            <div className="input-field _2nVk2 _65cjg">
              <input type="email" name="email" id="input_comp-jsivube7" className="_1SOvY has-custom-focus" placeholder="" required="" maxLength="250" />
              <label htmlFor="input_comp-jsivube7" className="aHD7c">Email</label>
            </div>
            <div className="input-field _2nVk2">
              <input type="text" name="subject" id="input_comp-jsivzldo" className="_1SOvY has-custom-focus" placeholder="" />
              <label htmlFor="input_comp-jsivzldo" className="aHD7c">Subject</label>
            </div>
            <div className="_1mQNr">
              <label htmlFor="textarea_comp-jsivubec" className="_20uhs">Message</label>
              <textarea id="textarea_comp-jsivubec" className="_1VWbH has-custom-focus" placeholder=""></textarea>
            </div>
            <div className="row">&nbsp;</div>
            <div aria-disabled="false" className="_2UgQw">
              
              <button className="btn waves-effect waves-light" type="submit" name="action">Submit
                <i className="material-icons right">send</i>
              </button>
        
            </div>
          </form>

        </div>
        <div className="row status center-align"></div>
        
      </div>

      <div className="location panel grey darken-4 white-text">
        <div className="row">
          <div className="col s12 m6">
            <p className="font_8"><span>Galloping Greatly</span></p>
            <p className="font_8"><span>9164 E 825 S,</span></p>

            <p className="font_8"><span>Upland, IN 46989</span></p>

            <p className="font_8"><span><a data-auto-recognition="true" href="mailto:gallopinggreatly@gmail.com">gallopinggreatly@gmail.com</a></span></p>

            <p className="font_8">
            <span><span><a href="https://www.google.com/search?client=safari&amp;rls=en&amp;q=rope+this+ranch+upland&amp;ie=UTF-8&amp;oe=UTF-8#" target="_blank" rel="noreferrer noopener">(765) 506-6462</a></span></span></p>

            <p className="font_8">&nbsp;</p>
          </div>
          <div className="col s12 m6">
            <h5 className="font_8"><span>OPERATING HOURS:</span></h5>

            <p className="font_8"><span>Mon - Fri: 8am - 4pm</span></p>

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
