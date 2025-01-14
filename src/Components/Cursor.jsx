import React, { useState, useRef, useEffect } from 'react';

const Cursor = () => {
  const [cursorRef, setCursorRef] = useState(null);
  const cursorCirclesRef = useRef(null);
  let cursorCircles;
  let mouseX = 0;
  let mouseY = 0;
  const TAIL_LENGTH = 20;
  let cursorHistory = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

  function onMouseMove(event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
  }

  function initCursor() {
    if (!cursorCirclesRef.current) return;

    for (let i = 0; i < TAIL_LENGTH; i++) {
      let div = document.createElement('div');
      div.classList.add('cursor-circle');
      cursorCirclesRef.current.appendChild(div);
    }
    cursorCircles = Array.from(cursorCirclesRef.current.querySelectorAll('.cursor-circle'));
  }

  function updateCursor() {
    if (!cursorCircles) return; // Important check!

    cursorHistory.shift();
    cursorHistory.push({ x: mouseX, y: mouseY });

    for (let i = 0; i < TAIL_LENGTH; i++) {
      let current = cursorHistory[i];
      let next = cursorHistory[i + 1] || cursorHistory[TAIL_LENGTH - 1];

      let xDiff = next.x - current.x;
      let yDiff = next.y - current.y;

      current.x += xDiff * 0.35;
      current.y += yDiff * 0.35;

      cursorCircles[i].style.transform = `translate(${current.x}px, ${current.y}px) scale(${i / TAIL_LENGTH})`;
    }
    requestAnimationFrame(updateCursor);
  }

  useEffect(() => {
    document.addEventListener('mousemove', onMouseMove, false);
    if (cursorRef) {
        cursorCirclesRef.current = cursorRef.current;
      initCursor();
      updateCursor();
    }
    return () => {
        document.removeEventListener('mousemove', onMouseMove);
    }
  }, [cursorRef]);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" className="goo" version="1.1" width="100%">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 35 -15" result="goo" />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div id="cursor" className="fixed top-0 left-0" ref={setCursorRef} />
    </>
  );
};

export default Cursor;