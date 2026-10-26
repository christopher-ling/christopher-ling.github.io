import { mobileHomeApps, locations } from "#constants"
import useWindowStore from "#store/window"

const MobileHome = () => {
  const { openWindow } = useWindowStore();

  const handleOpen = (id, fileName) => {
    const file = fileName
      ? locations.about.children.find((child) => child.name === fileName)
      : null;

    openWindow(id, file);
  };

  return (
    <section id="mobile-home">
      <ul>
        {mobileHomeApps.map(({ id, name, icon, fileName }) => (
          <li key={id} onClick={() => handleOpen(id, fileName)}>
            <img src={`images/${icon}`} alt={name} />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MobileHome
