import './Css/dropdown.css';
function Dropdown() {
  return (
    <>
      <div class="navbar">
        <div class="dropdown">
          <button class="dropbtn">
            <i className="fa-solid fa-bars menu"></i>
          </button>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Dropdown;
