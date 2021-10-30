import React, { useRef, useState, useEffect } from "react";

const InfiniteScroll = ({ children, page, setPage, inverse = false }) => {
  const currentPage = useRef(page);
  const [element, setElement] = useState(null);
  const observer = useRef(
    new IntersectionObserver(
      (entries) => {
        const first = entries[0];

        if (first.isIntersecting) {
          console.log("abc");
          console.log(currentPage.current);
          setPage(currentPage.current + 1);
        }
      },
      { threshold: 0.5 }
    )
  );
  useEffect(() => {
    currentPage.current = page;
  }, [page]);
  useEffect(() => {
    const currentElement = element;
    const currentObserver = observer.current;
    if (currentElement) {
      currentObserver.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [element]);
  return (
    <>
      {!inverse && children}
      <div
        ref={setElement}
        style={{ width: "50vw", height: "10px" }}
      ></div>
      {inverse && children}
    </>
  );
};

export default InfiniteScroll;
