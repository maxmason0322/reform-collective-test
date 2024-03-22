import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styled from 'styled-components';

gsap.registerPlugin(ScrollTrigger);

const HorizontalScrollSection = styled.section`
  overflow: hidden;
  width: 100vw;
  height: 100vh;

  @media (min-width: 768px) {
    overflow: visible;
    height: auto;
  }
`;

const HorizontalScrollContent = styled.div`
  display: flex;
  width: 300vw;
  height: 100%;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    overflow-x: visible;
    scroll-snap-type: none;
  }
`;

const Content = styled.div`
  flex: 0 0 100vw;
  padding: 20px;
  box-sizing: border-box;
  scroll-snap-align: start;

  @media (min-width: 768px) {
    flex: 0 0 33.33%;
    scroll-snap-align: none;
  }
`;

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
    setIsScrolling(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isScrolling) return;

    const deltaX = e.touches[0].clientX - startX;
    const deltaY = e.touches[0].clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      e.preventDefault();
      contentRef.current!.scrollLeft -= deltaX;
    }

    setStartX(e.touches[0].clientX);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchEnd = () => {
    setIsScrolling(false);
  };

  return (
    <HorizontalScrollSection ref={sectionRef}>
      <HorizontalScrollContent
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Content>
          {/* Content 1 */}
          <h1>Content 1</h1>
        </Content>
        <Content>
          {/* Content 2 */}
          <h1>Content 2</h1>
        </Content>
        <Content>
          {/* Content 3 */}
          <h1>Content 3</h1>
        </Content>
      </HorizontalScrollContent>
    </HorizontalScrollSection>
  );
};

export default HorizontalScroll;