import { MobileWindowHeader } from "#components";
import MobileWindowWrapper from "#hoc/MobileWindowWrapper";
import { techStack } from "#constants";
import { Check, ChevronRight, Flag } from "lucide-react";

const MobileTerminal = () => {
  return (
  <>
    <MobileWindowHeader target="terminal" title="Terminal" />

    <div className="techstack">
        <p>
            <span className="font-bold">@christopher % </span>
            show tech stack
        </p>

        <ul className="content">
            {techStack.map(({ category, items }) => (
                <li key={category}>
                    <div className="flex items-center">
                        <ChevronRight className="check" size={20} />
                        <h3>{category}</h3>
                    </div>
                    <ul>
                        {items.map((item, i) => (
                            <li key={i}>{item}{i < items.length - 1 ? "," : ""}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>

        <div className="footnote">
            <p>
                <Check size={20} /> {techStack.length} of {techStack.length} stacks loaded successfully (100%)
            </p>

            <p style={{ color: 'var(--window-text)' }}>
                <Flag size={15} style={{ fill: "currentColor" }} />
                Render time: 6ms
            </p>
        </div>
    </div>
  </>
  );
};

const MobileTerminalWindow = MobileWindowWrapper(MobileTerminal, "terminal");

export default MobileTerminalWindow;
