import { useRef, useState, useEffect } from "react";

import { IText } from "@/utils/interfaces"


const LineBlock = (data: IText | null) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting) },
      { threshold: 0.5 }
    )

    if (ref.current) { observer.observe(ref.current) }

    return () => {
      if (ref.current) { observer.unobserve(ref.current) }
    }
  }, [ref])

  return (
    <p
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s, transform 0.5s',
      }}
    >{data?.data}</p>
  )
}

export default LineBlock