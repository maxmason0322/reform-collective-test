import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { gsap } from "gsap";

interface ValuesCarouselProps {
  items: {
    id: number;
    title: string;
    icon: React.ReactNode;
    content: string;
  }[];
}

// Styled component definitions
const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
`;

const CarouselItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Card = styled.div.attrs({ tabIndex: 0 })`
  position: absolute;
  width: 280px;
  height: 530px;
  background-color: ${colors.secondary};
  border-radius: 20px;
  opacity: 0.6;
  transform: scale(0.8) translateX(-125%);
  transition: transform 0.3s;
  z-index: 0;
  pointer-events: none;
  font-size: 15px;
  color: ${colors.primary};
  font-family: "PP Mori", "Inter";

  &.active {
    opacity: 1;
    transform: scale(1);
    z-index: 1;
    pointer-events: auto;
    outline: none;
  }
`;

const CardContent = styled.div`
  margin: 0 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  whitespace: pre-wrap;
`;

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 25px;
  margin: 30px 0 20px 0;
`;

const CardDescription = styled.p`
  font-size: 15px;
  margin-top: 20px;
  white-space: pre-wrap;
`;

const PaginationIndicators = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PaginationDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: ${colors.secondary};
  border: none;
  margin: 0 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &.active {
    background-color: ${colors.detailLight};
  }
`;

const ValuesCarousel: React.FC<ValuesCarouselProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const activeCard = cardsRef.current[activeIndex];
    const prevCard = cardsRef.current[activeIndex - 1];
    const nextCard = cardsRef.current[activeIndex + 1];

    if (activeCard) {
      gsap.to(activeCard, { scale: 1, opacity: 1, x: 0 });
    }
    if (prevCard) {
      gsap.to(prevCard, { scale: 0.8, x: "-100%" });
    }
    if (nextCard) {
      gsap.to(nextCard, { scale: 0.8, x: "100%" });
    }
  }, [activeIndex]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handlePaginationClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer aria-label="Mobile Carousel">
      <CarouselItems>
        {items.map((item, index) => (
          <Card
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            className={index === activeIndex ? "active" : ""}
            onClick={() => handleCardClick(index)}
            aria-hidden={index !== activeIndex}
            aria-current={index === activeIndex ? "step" : undefined}
          >
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              {item.icon}
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CarouselItems>
      <PaginationIndicators>
        {items.map((_, index) => (
          <PaginationDot
            key={index}
            onClick={() => handlePaginationClick(index)}
            className={index === activeIndex ? "active" : ""}
          />
        ))}
      </PaginationIndicators>
    </CarouselContainer>
  );
};

export default ValuesCarousel;
