import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import addToRefs from "../service/addToRefs";
import { OverviewCard } from "../scss/OverviewElements";

const SlideOne = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const data = [
    {
      id: 1,
      content: "Human Resources Management System",
    },
    {
      id: 2,
      content: "CRM and Customer Experience",
    },
    {
      id: 3,
      content: "Supply Chain Management",
    },
    {
      id: 4,
      content: "Finance Management",
    },
    {
      id: 5,
      content: "Business Technology Platform",
    },
    {
      id: 6,
      content: "Performance Management",
    },
    {
      id: 7,
      content: "Workflow Automation",
    },
    {
      id: 8,
      content: "Task and Projects Management",
    },
    {
      id: 9,
      content: "Spend Management",
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
    <div ref={sectionWrap} className="slide-one-section">
      <h2 className="title">
        Our Product.
        <br />
        Overview.
      </h2>
      <div className="slider-wrapper">
        <div className="nav-container">
          <ul className="navbar_nav">
            {data.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  onClick={scrollNav}
                  ref={(el) => addToRefs(el, navLinks)}
                  href={`#slide-one-id-${item.id}`}
                  className="nav-link "
                >
                  {item.content}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="width-container">
          <div ref={panelsContainer} className="slide-wrap d-flex">
            {data.map((item) => (
              <OverviewCard
                ref={(el) => addToRefs(el, panels)}
                id={`slide-one-id-${item.id}`}
                key={item.id}
              >
                {item.content}
              </OverviewCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideOne;
