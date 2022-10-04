import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import addToRefs from "../service/addToRefs";
import { OverviewCard } from "../scss/OverviewElements";

const SlideTwo = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const data = [
    {
      id: 1,
      content: "test",
    },
    {
      id: 2,
      content: "test",
    },
    {
      id: 3,
      content: "test",
    },
    {
      id: 4,
      content: "test",
    },
  ];

  const sectionWrap = useRef();
  const panels = useRef([]);
  const navLinks = useRef([]);
  const panelsContainer = useRef(null);
  let tween;

  const scrollNav = (e) => {
    e.preventDefault();
    let targetElem = document.querySelector(e.target.getAttribute("href")),
      y = targetElem;

    if (
      targetElem &&
      panelsContainer.current.isSameNode(targetElem.parentElement)
    ) {
      let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
        totalMovement = (panels.current.length - 1) * targetElem.offsetWidth;

      y = Math.round(
        tween.scrollTrigger.start +
          (targetElem.offsetLeft / totalMovement) * totalScroll
      );
    }

    gsap.to(window, {
      scrollTo: {
        y: y,
        autoKill: false,
      },
    });
  };

  function scrollAnimation() {
    const _numSections = panels.current.length - 1;
    const _snapVal = 1 / _numSections;
    let _lastIndex = 0;

    tween = gsap.to(panels.current, {
      xPercent: -100 * (panels.current.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionWrap.current,
        pin: true,
        start: () => "top 1%",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.current.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        end: () => "+=4000",
        markers: true,
        onUpdate: (self) => {
          const newIndex = Math.round(self.progress / _snapVal);
          if (newIndex !== _lastIndex) {
            navLinks.current[_lastIndex].classList.remove("is-active");
            navLinks.current[newIndex].classList.add("is-active");
            // dotPagination.current[_lastIndex].classList.remove("is-active");
            // dotPagination.current[newIndex].classList.add("is-active");
            _lastIndex = newIndex;
          }
        },
      },
    });
  }

  useLayoutEffect(() => {
    scrollAnimation();
  }, []);

  return (
    <div ref={sectionWrap} className="slide-one-section-2">
      <ul className="navbar_nav2">
        {data.map((item) => (
          <li key={item.id} className="nav-item">
            <a
              onClick={scrollNav}
              ref={(el) => addToRefs(el, navLinks)}
              href={`#slide-two-id-${item.id}`}
              className="nav-link "
            >
              {item.content}
            </a>
          </li>
        ))}
      </ul>
        <div ref={panelsContainer} className="slide-wrap-2 d-flex">
          {data.map((item) => (
            <div
              ref={(el) => addToRefs(el, panels)}
              id={`slide-two-id-${item.id}`}
              className="slide-item"
              key={item.id}
            >
              <div class="slide-con d-flex align-items-center justify-content-center h1">
                {item.id}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SlideTwo;
