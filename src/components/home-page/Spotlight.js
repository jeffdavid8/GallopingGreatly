import $ from 'jquery'
import M from 'materialize-css'

const Spotlight = () => {
  return (
    <div className="spotlight valign-wrapper grey darken-3"  
    style={{ 
      backgroundImage: `url(${process.env.PUBLIC_URL + '/images/spotlight.jpg'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'fixed',
      minWidth: '100%',
    }}>
        
        <div className="container">

          <a className="anchor" name="Home" />

          <div className="row center-align hide-on-med-and-down">
            <img className="logo" width="250" src="images/logo.png" alt="" />
          </div>
          <div className="row center-align title">
              <h3 className="white-text">Galloping Greatly</h3>
              <h5><span className="grey lighten-1" >Equine Therapy</span></h5>
          </div>
          
        </div>

    </div>
  );
}


export default Spotlight;
