import React, { useEffect } from 'react';
import $ from 'jquery'
import M from 'materialize-css'

export const PhotoGrid = () => {
  
  useEffect(() => {
    /**
     * Floating Action Menu
     */
     var elems = document.querySelectorAll('.photoGrid img');
     var instances = M.Materialbox.init(elems, {});

  }, []);
  
  return (
    <div className="photoGrid panel black">

      <a className="anchor" name="Our-Work" />

      <div className="row">
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_2bbd26810b0c4c849a5cfbd3faf930b1mv2_005.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_54b5e583b9f44b49ae2068e92b9287b2mv2_004.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_a5f07552f2194271bf14f93be9145dcamv2_004.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_a35bd5f406ff42ef9871ad0c1f203bffmv2_003.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_5ac1de565df3430b8bcc38cc01525860mv2_005.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_3ce04b4d58da45d1b315a2d0d6098aa1mv2_004.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_50c49a3f64d94588aabb0ee16f6170d8mv2.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_0c47e90e9565495d843fc003b000a3d7mv2_004.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_a93bec6eb2a6409e897316730ba06f79mv2_003.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_172c66fbdcbd43d6ac5c13e8705b51e4mv2_004.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_dc1b4bb089e24e7e95adfbfe55475ed4mv2_003.jpg" />
        </div>
        <div className="col s4">
          <img className="responsive-img" src="images/9fec1c_be18d96350b1488faca13f4508ed447bmv2_005.jpg" />
        </div>
      </div>
      

  </div>

  )
}

export default PhotoGrid
