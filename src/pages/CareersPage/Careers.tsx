import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import ButtonWithIcon from "../../components/Button";
import '../../styles/fonts.css';
import Accordion from "../../components/Accordion/Accordion";
import PeopleCarousel from "../../components/PeopleCarousel/PeopleCarousel";
import ValuesCarousel from "../../components/ValuesCarousel/ValuesCarousel";
import { ReactComponent as TrustIcon } from "../../assets/icons/trust.svg";
import HorizontalScroll from "../../components/ValuesCarousel/HorizontalScroll";

interface CareersProps {
  title: string;
  content: string;
}

const CareersContainer = styled.div`
  background-color: ${colors.primary};

  @media (min-width: 601px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
  }
`;

const InfoContainer = styled.div`
  margin: 56px 15px;
`;

const StyledHeartIcon = styled(HeartIcon)`
  width: 56px;
  height: 56px;
`;

const InfoContainerText = styled.div`
  margin: 24px 0;
  width: 80%;
`;

const Title = styled.h1`
  color: ${colors.detailLight};
  font-family: 'PP Mori', 'Inter';
  font-weight: 600;
  font-size: 45px;
  margin-bottom: 16px;
  margin-top: 0;
`;

const Content = styled.p`
  color: ${colors.secondary};
  font-family: 'PP Mori', 'Inter';
  font-size: 15px;
`;

const cards = [
  {
    id: 1,
    title: "Trust by Default",
    icon: <TrustIcon />,
    content:
      "We want people to enjoy working at Runway, and we want to move fast. Trust by default helps us do both, because people can own their outcomes, and we aren't blocked on reviews and decisions.However, if we take that trust for granted and consistently don't meet our commitments, avoid difficult conversations, and fail to listen to opposing points of view, we damage our ability to trust globally. This will slow us down and make Runway a less fulfilling place to work.",
  },
  {
    id: 2,
    title: "Trust by Default",
    icon: <TrustIcon />,
    content:
      "We want people to enjoy working at Runway, and we want to move fast. Trust by default helps us do both, because people can own their outcomes, and we aren't blocked on reviews and decisions.However, if we take that trust for granted and consistently don't meet our commitments, avoid difficult conversations, and fail to listen to opposing points of view, we damage our ability to trust globally. This will slow us down and make Runway a less fulfilling place to work.",
  },
  {
    id: 3,
    title: "Trust by Default",
    icon: <TrustIcon />,
    content:
      "We want people to enjoy working at Runway, and we want to move fast. Trust by default helps us do both, because people can own their outcomes, and we aren't blocked on reviews and decisions.However, if we take that trust for granted and consistently don't meet our commitments, avoid difficult conversations, and fail to listen to opposing points of view, we damage our ability to trust globally. This will slow us down and make Runway a less fulfilling place to work.",
  },
];

const items = [
  {
    title: 'Card 1',
    description: 'This is the description of Card 1.',
    image: 'https://example.com/image1.jpg',
  },
  {
    title: 'Card 2',
    description: 'This is the description of Card 2.',
    image: 'https://example.com/image2.jpg',
  },
  {
    title: 'Card 3',
    description: 'This is the description of Card 3.',
    image: 'https://example.com/image3.jpg',
  },
];

const Careers: React.FC<CareersProps> = ({ title, content }) => {
  return (
    <CareersContainer>
      <InfoContainer>
        <StyledHeartIcon />
        <InfoContainerText>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </InfoContainerText>
        <ButtonWithIcon />
      </InfoContainer>
      {/* <ValuesCarousel cards={cards} /> */}
      <HorizontalScroll items={items}/>
    </CareersContainer>
  );
};

export default Careers;
