import { useState, useEffect } from "react";

const UseOnline = () => {
  let [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    window.addEventListener("online", () => {
      setIsOnline(true);
    });
    window.addEventListener("offline", () => {
      setIsOnline(false);
    });
  }, []);

  return isOnline;
};

export default UseOnline;
