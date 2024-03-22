import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import ButtonWithIcon from "../../components/Button";
import '../../styles/fonts.css';
import Accordion from "../../components/Accordion/Accordion";
import PeopleCarousel from "../../components/PeopleCarousel/PeopleCarousel";
import ValuesCarousel from "../../components/ValuesCarousel/ValuesCarousel";

interface CareersProps {
  title: string;
  content: string;
}

const CareersContainer = styled.div`
  display: flex;
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
    </CareersContainer>
  );
};

export default Careers;
