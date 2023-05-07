import { useEffect, useState } from "react";
function NightToggler() {
  const [nightMode, setNightmode] = useState(false);
  useEffect(() => {
    const time = new Date().getHours();
    if (time >= 0 && time < 6) {
      setNightmode(true);
    } else if (time >= 6 && time < 18) {
      setNightmode(false);
    } else if (time >= 18 && time < 24) {
      setNightmode(true);
    } else {
      setNightmode(true);
    }
  }, [nightMode]);
  return nightMode;
}
export default NightToggler;
