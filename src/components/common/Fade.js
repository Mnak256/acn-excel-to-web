"use client";
import { useEffect, useState } from "react";

const Fade = ({ show, children }) => {
  const [shouldRender, setRender] = useState(show);

  useEffect(() => {
    if (show) setRender(true);
  }, [show]);

  const onAnimationEnd = () => {
    if (!show) setRender(false);
  };

  return (
    shouldRender && (
      <div
        style={{ animation: `${show ? "fadeIn" : "fadeOut"} 0.1s` }}
        className="fade"
        onAnimationEnd={onAnimationEnd}
      >
        {children}
      </div>
    )
  );
};

export default Fade;
