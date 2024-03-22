import React, { useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import profileImage1 from "../../assets/images/profile-image-small1.png";
import profileImage2 from "../../assets/images/profile-image-small2.png";
import { colors } from "../../styles/colors";
import RightArrowIcon from '../../assets/icons/RightArrowIcon';
import LeftArrowIcon from '../../assets/icons/LeftArrowIcon';

interface Person {
  id: number;
  image: string;
  subtitle: string;
  name: string;
  description: string;
}

const CarouselItem = ({ person }: { person: Person }) => (
    <CarouselItemWrapper>
      <CarouselItemImage src={person.image} alt={person.name} />
      <div>
        <CarouselItemPosition>{person.subtitle}</CarouselItemPosition>
        <CarouselItemName>{person.name}</CarouselItemName>
        <CarouselItemDescription>{person.description}</CarouselItemDescription>
      </div>
    </CarouselItemWrapper>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const people: Person[] = [
    {
      id: 1,
      image: profileImage1,
      subtitle: "FOUNDING DESIGNER",
      name: "Wells Riley",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl vel dolor blandit fringilla. Integer eget ante et nulla consectetur pellentesque. Integer maximus porttitor justo vitae malesuada. Nullam euismod, quam ut dictum ultrices, velit lacus hendrerit justo, sit amet vehicula orci arcu eget massa.”",
    },
    {
      id: 2,
      image: profileImage1,
      subtitle: "FOUNDING DESIGNER",
      name: "Wells Riley",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl vel dolor blandit fringilla. Integer eget ante et nulla consectetur pellentesque. Integer maximus porttitor justo vitae malesuada. Nullam euismod, quam ut dictum ultrices, velit lacus hendrerit justo, sit amet vehicula orci arcu eget massa.”",
    },
    {
      id: 3,
      image: profileImage2,
      subtitle: "FOUNDING DESIGNER",
      name: "Alec Douglas",
      description:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl vel dolor blandit fringilla. Integer eget ante et nulla consectetur pellentesque. Integer maximus porttitor justo vitae malesuada. Nullam euismod, quam ut dictum ultrices, velit lacus hendrerit justo, sit amet vehicula orci arcu eget massa.”",
    },
  ];

  const isFirstPerson = currentIndex === 0;
  const isLastPerson = currentIndex === people.length - 1;

  const handlePrev = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isFirstPerson) {
      const newIndex = currentIndex - 1;
      gsap.to('.carousel-item', { x: '100%', opacity: 0, duration: 0.5 });
      setTimeout(() => {
        setCurrentIndex(newIndex);
        gsap.fromTo('.carousel-item', { x: '-100%', opacity: 0 }, { x: '0', opacity: 1, duration: 0.5 });
      }, 500);
    }
  };
  
  const handleNext = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (!isLastPerson) {
      const newIndex = currentIndex + 1;
      gsap.to('.carousel-item', { x: '-100%', opacity: 0, duration: 0.5 });
      setTimeout(() => {
        setCurrentIndex(newIndex);
        gsap.fromTo('.carousel-item', { x: '100%', opacity: 0 }, { x: '0', opacity: 1, duration: 0.5 });
      }, 500);
    }
  };

  return (
    <CarouselContainer>
      <CarouselTitle>Great People</CarouselTitle>
      <div className="carousel-item">
        <CarouselItem person={people[currentIndex]}/>
      </div>
      <NavigationWrapper>
        <IconButton onClick={(event) => handlePrev(event)} disabled={isFirstPerson}>
          <LeftArrowIcon disabled={isFirstPerson}/>
        </IconButton>
        <IconButton onClick={(event) => handleNext(event)} disabled={isLastPerson}>
          <RightArrowIcon disabled={isLastPerson}/>
        </IconButton>
      </NavigationWrapper>
    </CarouselContainer>
  );
};

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  outline: none;
  color: ${({ disabled }) => (disabled ? colors.detailDark : colors.detailLight)};
  transition: color 0.3s;
`;

const CarouselTitle = styled.h1`
  font-size: 45px;
  margin: 5% auto;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 4em;
    position: absolute; 
    margin: 5% auto;
    left: 5%;
  }

  @media (min-width: 1025px) {
    font-size: 5em;
    position: absolute;
    margin: 3% auto;
    left: 5%;
  }
`;

const CarouselContainer = styled.div`
  background-color: ${colors.primary};
  font-family: "PP Mori", "Inter";
  color: ${colors.detailLight};
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid ${colors.detailDark};
  margin: 0 5%;
  oveflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
`;

const CarouselItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  scroll-snap-align: start;
  flex: 0 0 100%;

  @media (min-width: 601px) {
    flex-direction: row;   
    align-items: flex-start;
    text-align: left;
    flex: 0 0 auto;
    width: 60%;
    padding-right: 40px;
    margin-top: 15%;
    margin-bottom: 8%;
  }
`;

const CarouselItemImage = styled.img`
  margin-right: 20px;

  @media (min-width: 601px) {
    margin-right: 40px;
  }
`;

const CarouselItemPosition = styled.h3`
  color: ${colors.detailDark};
  font-weight: 600;
  font-size: 12px;
  margin: 16px 0 8px 0;
`;

const CarouselItemName = styled.h2`
  font-weight: 600;
  font-size: 24px;
  margin: 0;
  margin-bottom: 8px;
`;

const CarouselItemDescription = styled.p`
  font-size: 15px;
  margin: 0;
`;

const NavigationWrapper = styled.div`
  margin: 40px 0 56px 0;

  @media (min-width: 601px) and (max-width: 1024px) {
    position: absolute;
    margin: 5% auto;
    right: 5%;
  }

  @media (min-width: 1025px) {
    position: absolute;
    margin: 4% auto;
    right: 5%;
  }
`;

export default Carousel;
