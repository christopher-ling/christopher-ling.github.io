import { MobileWindowHeader } from "#components";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import useWindowStore from "#store/window";

const MobileImage = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <MobileWindowHeader target="imgfile" title="Preview" />

      <div className="preview">
        <img src={imageUrl} alt={name} />
      </div>
    </>
  );
};

const MobileImageWindow = MobileWindowWrapper(MobileImage, "imgfile");

export default MobileImageWindow;
