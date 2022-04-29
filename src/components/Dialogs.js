import './dialogs.css';
import $ from 'jquery';

const Dialogs = () => {
  return (
    <div className='dialogs' id="dialogs">

      <div id="shareDialog" className="dialog">
        <a title="Go Back" className="btn btn-large grey darken-4 btn-close-dialog left"><i className="fa fa-arrow-alt-circle-left"></i></a>
        <div className="container">
          <div className="row">
            <h5>
              Share
            </h5>
          </div>
          <div className="row">
            <hr></hr>
          </div>
        </div>
      </div>


    </div>
  )
}
/**
 * Initialize page components
 */
 document.addEventListener('DOMContentLoaded', function() 
 {
   $('.dialog .btn-close-dialog').on('click', function() {
    $(this).closest('.dialog').hide();
    $('#dialogs').hide();
    return false;
   });
 });
export default Dialogs
