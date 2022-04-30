const Counseling = () => {
  return (
    <div className="counseling">
        
      <a className="anchor" name="Counseling-Sessions" />

      <div className="container center-align">
        <div className="row">
          <h5>60 MINUTE COUNSELING SESSIONS</h5>
          <div className="hr white"></div>
        </div>
        <div className="row">
          <div className="col m2 hide-on-small"></div>
          <div className="col s3 m2">
            <div className="card">
              <div className="card-image">
                <img src="images/svgexport-2.png" />
              </div>
              <div className="card-content">
                <p>Group</p>
              </div>
            </div>
          </div>
          <div className="col s1"></div>
          <div className="col s3 m2">
            <div className="card">
              <div className="card-image">
                <img src="images/svgexport-3.png" />
              </div>
              <div className="card-content">
                <p>Family</p>
              </div>
            </div>
          </div>
          <div className="col s1"></div>
          <div className="col s3 m2">
            <div className="card">
              <div className="card-image">
                <img src="images/svgexport-4.png" />
              </div>
              <div className="card-content">
                <p>Individual</p>
              </div>
            </div>
          </div>
          <div className="col m2  hide-on-small"></div>
        </div>
        <div className="row center-align">
          <p><a href="#Contact" className="waves-effect waves-light btn black">Request Pricing</a></p>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
