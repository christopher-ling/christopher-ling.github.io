import { MobileWindowHeader } from "#components";
import { socials } from "#constants";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";

const MobileContact = () => {
  return (
    <>
    <MobileWindowHeader target="contact" title="Contact" />

    <div className="content">
        <img src="images/adrian.jpg" alt="Adrian" className="size-20 rounded-full object-cover" />

        <h3>Let's Connect</h3>
        <p>Got an idea? A bug to squash? Or just wanna talk tech? I'm in.</p>

        <ul>
            {socials.map(({ id, bg, link, icon, text }) => (
                <li key={id} style={{ background: bg }}>
                    <a href={link} target="_blank" rel="noopener noreferrer" title={text}>
                        <img src={icon} alt={text} className="size-5" />
                        <p>{text}</p>
                    </a>
                </li>
            ))}
        </ul>
    </div>
    </>
  );
};

const MobileContactWindow = MobileWindowWrapper(MobileContact, "contact");

export default MobileContactWindow;
