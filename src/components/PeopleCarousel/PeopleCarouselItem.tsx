// const PeopleCarouselItem = () => {};

// export default PeopleCarouselItem;

import React, { useState } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';

interface Person {
  id: number;
  image: string;
  subtitle: string;
  name: string;
  description: string;
}

const CarouselItem = ({ person }: { person: Person }) => (
  <CarouselItemWrapper>
    <img src={person.image} alt={person.name} />
    <h3>{person.subtitle}</h3>
    <h2>{person.name}</h2>
    <p>{person.description}</p>
  </CarouselItemWrapper>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people: Person[] = [
    // Add your data for each person here
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? people.length - 1 : currentIndex - 1;
    gsap.to('.carousel-item', { x: '100%', opacity: 0, duration: 0.5 });
    setTimeout(() => {
      setCurrentIndex(newIndex);
      gsap.fromTo('.carousel-item', { x: '-100%', opacity: 0 }, { x: '0', opacity: 1, duration: 0.5 });
    }, 500);
  };

  const handleNext = () => {
    const newIndex = currentIndex === people.length - 1 ? 0 : currentIndex + 1;
    gsap.to('.carousel-item', { x: '-100%', opacity: 0, duration: 0.5 });
    setTimeout(() => {
      setCurrentIndex(newIndex);
      gsap.fromTo('.carousel-item', { x: '100%', opacity: 0 }, { x: '0', opacity: 1, duration: 0.5 });
    }, 500);
  };

  return (
    <CarouselWrapper>
      <h1>Great People</h1>
      <div className="carousel-item">
        <CarouselItem person={people[currentIndex]} />
      </div>
      <NavigationWrapper>
        <button onClick={handlePrev}>{'<'}</button>
        <button onClick={handleNext}>{'>'}</button>
      </NavigationWrapper>
    </CarouselWrapper>
  );
};

const CarouselWrapper = styled.div`
  /* Add your carousel container styles */
`;

const CarouselItemWrapper = styled.div`
  /* Add your carousel item styles */
`;

const NavigationWrapper = styled.div`
  margin-bottom: 56px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default Carousel;