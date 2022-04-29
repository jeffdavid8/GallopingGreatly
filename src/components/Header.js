import MainMenu from "./MainMenu"

const Header = () => {
  return (
    <header className="header">
      <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper ">

          <ul className="left">
            <li>
              <a href="#!" data-target="slide-out" className="sidenav-trigger main-menu-btn show-on-small"><i className="material-icons">menu</i></a>
            </li>
            <li className="">
              <img className="logo hide-on-med-and-down"  src="images/logo-96.png" />
            </li>


          </ul>

          <a href="#Home"><img className="brand-logo center show-on-medium-and-down" src="images/logo-96.png" /></a>

          <div className="main-menu center hide-on-med-and-down">
            <MainMenu />
          </div>

            <ul className="right">
              <li>
                <a target="_blank" href="https://www.facebook.com/gallopgreatly"><i className="fab fa-facebook"></i></a>
              </li>
              <li>
                <a target="_blank" href="https://instagram.com/gallopgreatly/"><i className="fab fa-instagram"></i></a>
              </li>


            </ul>

        </div>
      </nav>
      </div>
      
    </header>
  )
}

export default Header
