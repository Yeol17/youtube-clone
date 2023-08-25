import { useState, useEffect, useRef } from "react";

const useObserve = (cb) => {
  const [target, setTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([...entry]) => {
        if (!entry.isIntersectiong) return
        cb();
      }, {// options//
    })
  );
  useEffect(() => {
    const currentTarget = target;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    };
  }, [target]);

  return setTarget
}

export default useObserve