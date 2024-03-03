import Dropdown from "./Dropdown";
import "./Css/nav.css";
import "./Css/middle.css";
import "./Css/icons.css";

function Nav() {
  return (
    <>
      <div className="Nav-bar">
        <div className="left">
          <div className="dropdown">
            <Dropdown />
          </div>
          <div className="logo">
            <img
              className="YT"
              src="https://t3.ftcdn.net/jpg/03/00/38/90/360_F_300389025_b5hgHpjDprTySl8loTqJRMipySb1rO0I.jpg"
              alt="YTlogo"
            ></img>
          </div>
        </div>
        <div className="middle">
          <div className="search-bar">
            <div className="input-group">
              <input
                type="search"
                className="form-control"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
              />         
            </div>
            <div className="search-icon">       
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className="micro-phone-icon">
             <i className="fa-solid fa-microphone"></i>
          </div>
        </div>
        <div className="icons">
          <div className="video-icon ic">
            <i class="fa-solid fa-video"></i>
          </div>
          <div className="notifiction-icon ic">
            <i class="fa-solid fa-bell"></i>
          </div>
          <div className="profile-icon ic">
          <i class="fa-solid fa-user"></i>
          </div>
        </div>
      </div>
    </>
  );
}
export default Nav;
