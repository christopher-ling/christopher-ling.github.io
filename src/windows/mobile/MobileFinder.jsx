import { MobileWindowHeader } from "#components"
import { locations } from "#constants"
import MobileWindowWrapper from "#hoc/MobileWindowWrapper"
import useWindowStore from "#store/window"
import { ChevronRight } from "lucide-react"
import { Fragment, useState } from "react"

const ROOT = {
    name: "Portfolio",
    children: Object.values(locations),
};

const MobileFinder = () => {
    const { openWindow } = useWindowStore();
    const [path, setPath] = useState([]);

    const current = path[path.length - 1] ?? ROOT;
    const trail = [ROOT, ...path];

    const openItem = (item) => {
        if(item.fileType === 'pdf') return openWindow('resume');
        if(item.kind === 'folder') return setPath([...path, item]);
        if(['fig', 'url'].includes(item.fileType) && item.href)
            return window.open(item.href, "_blank");

        openWindow(`${item.fileType}${item.kind}`, item);
    };

    return (
        <>
            <MobileWindowHeader
                target="finder"
                title={current.name}
                onBack={path.length ? () => setPath(path.slice(0, -1)) : undefined}
            />

            {path.length > 0 && (
                <div className="breadcrumb">
                    {trail.map((location, i) => (
                        <Fragment key={i}>
                            {i > 0 && <ChevronRight size={16} className="separator" />}
                            <button type="button" onClick={() => setPath(path.slice(0, i))}>
                                {location.name}
                            </button>
                        </Fragment>
                    ))}
                </div>
            )}

            <div className="finder-gallery">
                <ul>
                    {current.children.map((item) => (
                        <li key={item.id} onClick={() => openItem(item)}>
                            <img
                                src={item.kind === 'folder' ? "images/folder.png" : item.icon}
                                alt={item.name}
                            />
                            <p>{item.name}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

const MobileFinderWindow = MobileWindowWrapper(MobileFinder, "finder");

export default MobileFinderWindow;
