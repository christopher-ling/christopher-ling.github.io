import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react"
import gsap from "gsap";

/**
 * Mobile counterpart of {@link WindowWrapper}. Renders the window as a
 * full-screen iOS-style page (no dragging) that slides in from the right.
 * Shares the same window store, so Dock / Finder / Home open-close logic
 * works unchanged; the inner component is only mounted while open so its
 * local state resets every time the page is reopened.
 *
 * @param {React.ComponentType<any>} Component - Mobile content to render.
 * @param {string} windowKey - Key in the window store; the section id becomes `mobile-${windowKey}`.
 */
const MobileWindowWrapper = (Component, windowKey) => {
    const Wrapped = (props) => {
        const { windows } = useWindowStore();
        const { isOpen, zIndex, isMinimized } = windows[windowKey];
        const ref = useRef(null);

        useGSAP(() => {
            const el = ref.current;
            if(!el || !isOpen) return;

            el.style.display = "block";

            gsap.fromTo(el,
                { xPercent: 100, opacity: 0.6 },
                { xPercent: 0, opacity: 1, duration: 0.35, ease: "power3.out" },
            );
        }, [isOpen]);

        useLayoutEffect(() => {
            const el = ref.current;
            if(!el) return;
            el.style.display = isOpen && !isMinimized ? "block" : "none";
        }, [isOpen, isMinimized]);

        return (
            <section
                id={`mobile-${windowKey}`}
                ref={ref}
                style={{ zIndex }}
                className="mobile-window sm:hidden!">
                {isOpen ? <Component {...props} /> : null}
            </section>
        );
    };

    Wrapped.displayName = `MobileWindowWrapper(${Component.displayName ||
        Component.name || "Component"})`;

    return Wrapped;
};

export default MobileWindowWrapper;
