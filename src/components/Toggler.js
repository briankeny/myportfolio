import Nav from "./Nav";
const Toggler = ({ showMenu, show, display }) => {
  return (
    <div className="toggler">
      <input
        type="checkbox"
        className="openSidebarMenu"
        id="openSidebarMenu"
        onChange={showMenu}
      />
      <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
        <div className="spinner diagonal part-1"> </div>
        <div className="spinner horizontal"> </div>
        <div className="spinner diagonal part-2"></div>
      </label>
      {show ? <Nav setdisplay={display} /> : ""}
    </div>
  );
};
export default Toggler;
