import { useState, useEffect, useRef } from "react";

const useObserve = (ref) => {
  const [target, setTarget] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      ([...entry]) => {
        if (!entry.isIntersectiong) return
        console.log(entry + ' : entry');
        cb();
        
      }, {// options//
        // threshold: 0.1
    })
  );
  useEffect(() => {
    console.log(target + ' : target');
    const currentTarget = target;
    const currentObserver = observer.current;
    if (currentTarget) {
      currentObserver.observe(currentTarget);
    }

    return () => {
      if (currentTarget) {
        currentObserver.unobserve(currentTarget);
      }
    }
  }, [target]);

  return setTarget
}

export default useObserve