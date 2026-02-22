import {
  useEffect,
  useRef,
  useLayoutEffect,
  useCallback,
  useState,
} from "react";
import { gsap } from "gsap";
import Header from "./components/Header";
import Name from "./components/Name";
import Biography from "./components/Biography";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  const sectionRefs = useRef([]);
  const animating = useRef(false);

  const currentIndex = useRef(0);
  const [, setUiIndex] = useState(0);

  const navRef = useRef(null);
  const underlineRef = useRef(null);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const gotoSection = useCallback((index) => {
    const sections = sectionRefs.current;
    if (!sections.length) return;
    if (index < 0 || index >= sections.length) return;
    if (index === currentIndex.current) return;
    if (animating.current) return;

    animating.current = true;

    const oldIndex = currentIndex.current;
    const direction = index > oldIndex ? 1 : -1;
    const dFactor = direction === -1 ? -1 : 1;

    const outerWrappers = sections.map((s) =>
      s.querySelector(".wrapper-outer"),
    );
    const innerWrappers = sections.map((s) =>
      s.querySelector(".wrapper-inner"),
    );
    const images = sections.map((s) => s.querySelector(".background"));

    const oldSection = sections[oldIndex];
    const oldImage = images[oldIndex];

    const newSection = sections[index];
    const newOuter = outerWrappers[index];
    const newInner = innerWrappers[index];
    const newImage = images[index];

    if (!oldSection || !oldImage || !newSection || !newImage) {
      animating.current = false;
      return;
    }

    let underlineStart = 0,
      underlineWidth = 0;
    if (navRef.current && underlineRef.current) {
      const buttons = navRef.current.querySelectorAll("button[data-nav]");
      const activeButton = buttons[index];
      if (activeButton) {
        underlineStart = activeButton.offsetLeft;
        underlineWidth = activeButton.offsetWidth;
      }
    }

    gsap.set(newSection, { autoAlpha: 1, zIndex: 2 });
    gsap.set(oldSection, { zIndex: 1 });
    gsap.set([newOuter, newInner], {
      yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor),
    });
    gsap.set(newImage, { yPercent: 15 * dFactor });

    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power1.inOut" },
      onComplete: () => {
        animating.current = false;
        currentIndex.current = index;
        setUiIndex(index);

        gsap.set(oldSection, { autoAlpha: 0 });
      },
    });

    if (underlineRef.current) {
      tl.to(
        underlineRef.current,
        {
          x: underlineStart,
          width: underlineWidth,
        },
        0,
      );
    }

    tl.to(oldImage, { yPercent: -15 * dFactor }, 0);

    tl.to([newOuter, newInner], { yPercent: 0 }, 0).to(
      newImage,
      { yPercent: 0 },
      0,
    );
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (animating.current) return;
      if (e.deltaY > 0) gotoSection(currentIndex.current + 1);
      else gotoSection(currentIndex.current - 1);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [gotoSection]);

  useLayoutEffect(() => {
    const sections = sectionRefs.current;
    if (!sections.length) return;

    const outerWrappers = sections.map((s) =>
      s.querySelector(".wrapper-outer"),
    );
    const innerWrappers = sections.map((s) =>
      s.querySelector(".wrapper-inner"),
    );

    sections.forEach((section, i) => {
      if (i === 0) {
        gsap.set(section, { autoAlpha: 1, zIndex: 2 });
        gsap.set(outerWrappers[i], { yPercent: 0 });
        gsap.set(innerWrappers[i], { yPercent: 0 });
      } else {
        gsap.set(section, { autoAlpha: 0, zIndex: 1 });
        gsap.set(outerWrappers[i], { yPercent: 100 });
        gsap.set(innerWrappers[i], { yPercent: -100 });
      }
    });

    if (navRef.current && underlineRef.current) {
      const buttons = navRef.current.querySelectorAll("button[data-nav]");
      const firstButton = buttons[0];
      if (firstButton) {
        gsap.set(underlineRef.current, {
          x: firstButton.offsetLeft,
          width: firstButton.offsetWidth,
        });
      }
    }

    currentIndex.current = 0;
    setUiIndex(0);
  }, [setUiIndex]);

  return (
    <div className="app-container">
      <Header
        gotoSection={gotoSection}
        navRef={navRef}
        underlineRef={underlineRef}
      />
      <Name ref={addToRefs} />
      <Biography ref={addToRefs} />
      <Projects ref={addToRefs} />
      <Contact ref={addToRefs} />
    </div>
  );
};

export default App;
