
import $ from 'jquery'
import kjvBot from '../kjvbot'
import FloatingActionMenu from './FloatingActionMenu';

const SearchForm = () => {
  var timer = {};
  return (
    <div className="SearchForm">
      <div className="container">
          <div className="row">
            <h3>
              <i className="fa fa-search"></i> Bible Search
            </h3>
          </div>
          <div className="row form-group">
            <div className="col s10">
              <div className="input-field">
                <input
                  id="kjvBot"
                  name="kjvBot"
                  className="form-control autocomplete"
                  type="text"
                  defaultValue={kjvBot.state.currentSearch}
                  placeholder="Search"
                  onKeyUp={(e) => SearchForm.updateSearch(e)}
                />
              </div>
            </div>
            <div className="col s2">
              <button
                className="btn sm-search-submit-btn"
                onClick={() => kjvBot.search($("#kjvBot").val())}
              >
                <i className="material-icons">keyboard_return</i>
              </button>
            </div>
          </div>

          <div className="row">
            <div id="count"></div>
          </div>


        <div id="results" className="row red-mark"></div>
      </div>

      <FloatingActionMenu />

    </div>
  );
}

SearchForm.updateSearch = function(e)
{
  clearTimeout(this.timer);
  if (e.key==='Enter') {
    $('body').addClass("loading");
    var term = e.currentTarget.value.toLowerCase();
    this.timer = setTimeout(function()
    { 
        kjvBot.search(term);
    }, 300);
  };
};

export default SearchForm
