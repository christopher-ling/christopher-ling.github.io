import { useState, useEffect } from "react"
import dayjs from "dayjs"
import { Battery, Wifi } from "lucide-react"

const MobileNavbar = () => {
  const [currentTime, setCurrentTime] = useState(dayjs().format("h:mm A"));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(dayjs().format("h:mm A"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="mobile-navbar">
      <time>{currentTime}</time>
      <div className="dynamic-island" />
      <ul>
        <li><Wifi size={26} className="icon" /></li>
        <li><Battery size={26} className="icon" /></li>
      </ul>
    </section>
  )
}

export default MobileNavbar
