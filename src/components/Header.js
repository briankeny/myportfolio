import { useEffect, useState } from "react";
import Nav from "./Nav";
import Toggler from "./Toggler";
const Header = () => {
  const [show, setShowMenu] = useState(false);
  const [display, setdisplay] = useState("none");
  const toggler = () => {
    setShowMenu(!show);
  };

  useEffect(() => {
    setdisplay("none");
    if (show) {
      setdisplay("block");
    }
  }, [display, show]);
  return (
    <header>
      <Toggler showMenu={toggler} show={show} display={display} />
      <Nav />
    </header>
  );
};
export default Header;
