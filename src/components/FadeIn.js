import React from "react";


function FadeIn(props) {
  const [isVisible, setVisible] = React.useState(false);

  function hasBeenVisible(intersect) {
    if (intersect === true) {
        setVisible(true);
    }
  }
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => hasBeenVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const { current } = domRef;
    return () => observer.unobserve(current);
  }, []);
  return (
    <div
      className={`photo fade-in ${isVisible ? "appear" : ""}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}

export default FadeIn;