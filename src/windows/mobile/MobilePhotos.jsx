import { MobileWindowHeader } from "#components";
import { gallery } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper"
import useWindowStore from "#store/window";

const MobilePhotos = () => {
    const { openWindow } = useWindowStore();

  return (
    <>
    <MobileWindowHeader target="photos" title="All Photos" />

    <div className="gallery">
        <ul>
            {gallery.map(({ id, img }) => (
                <li
                    key={id}
                    onClick={() =>
                        openWindow("imgfile", {
                            id,
                            name: "Gallery image",
                            icon: "images/image.png",
                            kind: "file",
                            fileType: "img",
                            imageUrl: img,
                        })
                    }
                >
                    <img src={img} alt={`Gallery image ${id}`} />
                </li>
            ))}
        </ul>
    </div>
    </>
  )
}

const MobilePhotosWindow = MobileWindowWrapper(MobilePhotos, "photos");

export default MobilePhotosWindow;
