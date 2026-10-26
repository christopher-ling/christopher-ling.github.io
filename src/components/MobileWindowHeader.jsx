import useWindowStore from "#store/window"
import { ChevronLeft } from "lucide-react"

const MobileWindowHeader = ({ target, title, onBack, children }) => {
  const { closeWindow } = useWindowStore();

  return (
    <div className="mobile-window-header">
      <div className="back" onClick={() => (onBack ? onBack() : closeWindow(target))}>
        <ChevronLeft className="icon" />
        <p>Go Back</p>
      </div>

      <p className="title">{title}</p>

      <div className="actions">{children}</div>
    </div>
  )
}

export default MobileWindowHeader
