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

  @media (min-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
  }
`;

const Content = styled.div`
  flex: 0 0 100vw;
  padding: 20px;
  box-sizing: border-box;

  @media (min-width: 768px) {
    flex: 0 0 33.33%;
  }
`;

const HorizontalScroll: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;

    if (section && content && isMobile) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      tl.to(content, {
        x: () => section.offsetWidth - content.offsetWidth,
        ease: 'none',
      });
    }
  }, [isMobile]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX - contentRef.current!.offsetLeft);
    setScrollLeft(contentRef.current!.scrollLeft);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    const x = e.touches[0].clientX - contentRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    contentRef.current!.scrollLeft = scrollLeft - walk;
  };

  return (
    <HorizontalScrollSection ref={sectionRef}>
      <HorizontalScrollContent
        ref={contentRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
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