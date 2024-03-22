import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { colors } from '../../styles/colors';

interface CarouselProps {
  items: {
    id: number;
    title: string;
    icon: React.ReactNode;
    content: string;
  }[];
}

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
  background-color: ${colors.secondary};;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0.6;
  transform: scale(0.8) translateX(-50%);
  transition: opacity 0.3s, transform 0.3s;
  z-index: 0;
  pointer-events: none;
  font-size: 15px;
  color: ${colors.primary};
  font-family: 'PP Mori', 'Inter';

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
`;

const CardTitle = styled.h1`
  font-weight: 600;
  font-size: 25px;
  margin: 30px 0 20px 0;
`;

const CardDescription = styled.p`
  font-size: 15px;
  margin-top: 20px;
`;

const Carousel: React.FC<CarouselProps> = ({ items }) => {
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
      gsap.to(prevCard, { scale: 0.8, opacity: 0.6, x: '-50%' });
    }
    if (nextCard) {
      gsap.to(nextCard, { scale: 0.8, opacity: 0.6, x: '50%' });
    }
  }, [activeIndex]);

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <CarouselContainer>
      <CarouselItems>
        {items.map((item, index) => (
          <Card
            key={item.id}
            ref={(el) => (cardsRef.current[index] = el as HTMLDivElement)}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => handleCardClick(index)}
          >
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              {item.icon}
              <CardDescription>{item.content}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </CarouselItems>
    </CarouselContainer>
  );
};

export default Carousel;