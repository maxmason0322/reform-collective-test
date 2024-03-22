// import React, { useRef, useEffect, useState } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import styled from 'styled-components';

// gsap.registerPlugin(ScrollTrigger);

// const HorizontalScrollSection = styled.section`
//   overflow: hidden;
//   width: 100vw;
//   height: 100vh;

//   @media (min-width: 768px) {
//     overflow: visible;
//     height: auto;
//   }
// `;

// const HorizontalScrollContent = styled.div`
//   display: flex;
//   width: 300vw;
//   height: 100%;

//   @media (min-width: 768px) {
//     width: 100%;
//     flex-wrap: wrap;
//   }
// `;

// const Content = styled.div`
//   flex: 0 0 100vw;
//   padding: 20px;
//   box-sizing: border-box;

//   @media (min-width: 768px) {
//     flex: 0 0 33.33%;
//   }
// `;

// const HorizontalScroll: React.FC = () => {
//   const sectionRef = useRef<HTMLElement>(null);
//   const contentRef = useRef<HTMLDivElement>(null);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
//   const [startX, setStartX] = useState(0);
//   const [scrollLeft, setScrollLeft] = useState(0);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 768);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const content = contentRef.current;

//     if (section && content && isMobile) {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: section,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       tl.to(content, {
//         x: () => section.offsetWidth - content.offsetWidth,
//         ease: 'none',
//       });
//     }
//   }, [isMobile]);

//   const handleTouchStart = (e: React.TouchEvent) => {
//     setStartX(e.touches[0].clientX - contentRef.current!.offsetLeft);
//     setScrollLeft(contentRef.current!.scrollLeft);
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     e.preventDefault();
//     const x = e.touches[0].clientX - contentRef.current!.offsetLeft;
//     const walk = (x - startX) * 2;
//     contentRef.current!.scrollLeft = scrollLeft - walk;
//   };

//   return (
//     <HorizontalScrollSection ref={sectionRef}>
//       <HorizontalScrollContent
//         ref={contentRef}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//       >
//         <Content>
//           {/* Content 1 */}
//           <h1>Content 1</h1>
//         </Content>
//         <Content>
//           {/* Content 2 */}
//           <h1>Content 2</h1>
//         </Content>
//         <Content>
//           {/* Content 3 */}
//           <h1>Content 3</h1>
//         </Content>
//       </HorizontalScrollContent>
//     </HorizontalScrollSection>
//   );
// };

// export default HorizontalScroll;

import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { useSwipeable } from 'react-swipeable';

gsap.registerPlugin(Draggable);

interface CarouselProps {
  items: {
    title: string;
    description: string;
    image: string;
  }[];
}

const CarouselContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const CarouselItems = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
`;

const Card = styled.div`
  flex: 0 0 300px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-right: 16px;
  padding: 16px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const CardTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #666;
`;

// const Carousel: React.FC<CarouselProps> = ({ items }) => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement[]>([]);

//   useEffect(() => {
//     const carousel = carouselRef.current;
//     const cards = cardsRef.current;

//     if (carousel && cards.length > 0) {
//       const onDrag = () => {
//         const progress = -carousel.getBoundingClientRect().left / 300;
//         const newIndex = Math.round(progress);

//         if (newIndex !== activeIndex) {
//           setActiveIndex(newIndex);
//           animateCards(cards, newIndex);
//         }
//       };

//       Draggable.create(carousel, {
//         type: 'x',
//         bounds: { minX: -(items.length - 1) * 300, maxX: 0 },
//         onDrag,
//       });

//       animateCards(cards, activeIndex);
//     }
//   }, [items, activeIndex]);

//   const animateCards = (cards: HTMLDivElement[], index: number) => {
//     const offset = index * 300;

//     gsap.to(cards, {
//       duration: 0.5,
//       x: (i) => (i - index) * 300 - offset,
//       scale: (i) => (i === index ? 1 : 0.8),
//       opacity: (i) => (i === index ? 1 : 0.6),
//       ease: 'power2.out',
//       stagger: 0.1,
//     });
//   };

//   return (
//     <CarouselContainer>
//       <CarouselItems ref={carouselRef}>
//         {items.map((item, index) => (
//           <Card
//             key={index}
//             ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
//           >
//             <CardImage src={item.image} alt={item.title} />
//             <CardTitle>{item.title}</CardTitle>
//             <CardDescription>{item.description}</CardDescription>
//           </Card>
//         ))}
//       </CarouselItems>
//     </CarouselContainer>
//   );
// };

// export default Carousel;

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleSwipe = (deltaX: number) => {
    const cardWidth = 300;
    const maxTranslate = (items.length - 1) * cardWidth;
    const newTranslateX = Math.min(Math.max(translateX - deltaX, -maxTranslate), 0);
    setTranslateX(newTranslateX);
  };

  const handlers = useSwipeable({
    onSwiping: (eventData) => handleSwipe(eventData.deltaX),
    onSwiped: () => {
      const cardWidth = 300;
      const newIndex = Math.round(-translateX / cardWidth);
      setActiveIndex(newIndex);
      setTranslateX(-newIndex * cardWidth);
    },
    trackMouse: true,
  });

  useEffect(() => {
    setTranslateX(-activeIndex * 300);
  }, [activeIndex]);

  return (
    <CarouselContainer {...handlers}>
      <CarouselItems
        ref={carouselRef}
        style={{ transform: `translateX(${translateX}px)` }}
      >
        {items.map((item, index) => (
          <Card key={index}>
            <CardImage src={item.image} alt={item.title} />
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        ))}
      </CarouselItems>
    </CarouselContainer>
  );
};

export default Carousel;