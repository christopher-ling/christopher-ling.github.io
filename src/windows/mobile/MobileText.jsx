import { MobileWindowHeader } from "#components";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import useWindowStore from "#store/window";

const MobileText = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile.data;

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <>
      <MobileWindowHeader target="txtfile" title={name} />

      <div className="p-5 space-y-6">
        {image ? (
          <img src={image} alt={name} className="w-full h-auto rounded" />
        ) : null}

        {subtitle ? (
          <h3 className="text-xl font-semibold" style={{ color: 'var(--window-heading)' }}>
            {subtitle}
          </h3>
        ) : null}

        {Array.isArray(description) && description.length > 0 ? (
          <div className="space-y-3 leading-relaxed text-base" style={{ color: 'var(--window-text)' }}>
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        ) : null}
      </div>
    </>
  );
};

const MobileTextWindow = MobileWindowWrapper(MobileText, "txtfile");

export default MobileTextWindow;
