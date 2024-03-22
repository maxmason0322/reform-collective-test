import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";

import ButtonWithIcon from "../../components/Button";
import Accordion from "../../components/Accordion/Accordion";
import PeopleCarousel from "../../components/PeopleCarousel/PeopleCarousel";
import ValuesCarousel from "../../components/ValuesCarousel/ValuesCarousel";

import { ReactComponent as HeartIcon } from "../../assets/icons/heart.svg";
import { ReactComponent as TrustIcon } from "../../assets/icons/trust.svg";
import { ReactComponent as AccelerateIcon } from "../../assets/icons/accelerate.svg";
import { ReactComponent as MagicIcon } from "../../assets/icons/magic.svg";
import { ReactComponent as InventIcon } from "../../assets/icons/invent.svg";
import { ReactComponent as HighLowIcon } from "../../assets/icons/high-low.svg";

interface CareersProps {
  title: string;
  content: string;
}

// Styled component definitions
const CareersContainer = styled.div`
  background-color: ${colors.primary};
  font-family: "PP Mori", "Inter";

  @media (min-width: 601px) and (max-width: 1024px) {
  }

  @media (min-width: 1025px) {
    display: flex;
    margin: 0 5%;
    align-items: center;
  }
`;

const InfoContainer = styled.div`
  margin: 0 5%;
  padding-top: 56px;
  background-color: ${colors.primary};

  @media (min-width: 601px) and (max-width: 1024px) {
    max-width: 65%;
  }

  @media (min-width: 1025px) {
    max-width: 45%;
    margin-left: 0;
  }
`;

const StyledHeartIcon = styled(HeartIcon)`
  width: 56px;
  height: 56px;

  @media (min-width: 601px) {
    width: 75px;
    height: 75px;
  }
`;

const InfoContainerText = styled.div`
  margin: 24px 0;
`;

const Title = styled.h1`
  color: ${colors.detailLight};
  font-weight: 600;
  font-size: 3em;
  margin-bottom: 16px;
  margin-top: 0;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 6em;
  }

  @media (min-width: 1025px) {
    font-size: 5em;
  }
`;

const Content = styled.p`
  color: ${colors.secondary};
  font-size: 1em;

  @media (min-width: 601px) and (max-width: 1024px) {
    font-size: 1.5em;
  }

  @media (min-width: 1025px) {
    font-size: 1.25em;
  }
`;

// Array of value items to display in the accordion
const items = [
  {
    id: 1,
    title: "Trust by Default",
    icon: <TrustIcon />,
    content: `We want people to enjoy working at Runway, and we want to move fast. Trust by default helps us do both, because people can own their outcomes, and we aren't blocked on reviews and decisions.

      However, if we take that trust for granted and consistently don't meet our commitments, avoid difficult conversations, and fail to listen to opposing points of view, we damage our ability to trust globally. This will slow us down and make Runway a less fulfilling place to work.`,
  },
  {
    id: 2,
    title: "Accelerate",
    icon: <AccelerateIcon />,
    content: `A plane doesn't start at takeoff speed, but what it does do is accelerate at a constant rate until it hits takeoff velocity. We should do the same.

      We can't run at top speed all the time, but we always want to move a little bit faster and work a little smarter.
      
      If we focus on acceleration rather than speed, we'll be able to continually move faster, work smarter, deliver more as a team, and do so in a sustainable way.`,
  },
  {
    id: 3,
    title: "Create Magic",
    icon: <MagicIcon />,
    content: `When people use our product, they are experiencing a story that we've built, but Runway is also a tool for people to tell their own stories. Stories about how to understand their business better, how their crew can better work together, and how they can be more successful.

      If we want to be remembered, if we want people to pay attention, and if we want to make a real impact in the world, we have to go the extra mile and then some, not just in volume but in creativity too. In other words, we must Create Magic.`,
  },
  {
    id: 4,
    title: "Invent Together",
    icon: <InventIcon />,
    content: `We don't believe in operating by consensus at Runway. We want people to be free to make decisions at Runway without being blocked by a bureaucratic machine. At the same time, we also want to work well with each other as a team and have high standards for our work.

      When we take into account the perspectives of people who aren't us, and truly seek to understand them, not only will our other crew mates feel heard and understand, the products that we build and the decisions that we make will be more resilient for it.`,
  },
  {
    id: 5,
    title: "High Standards, Low Egos",
    icon: <HighLowIcon />,
    content: `We are transforming an incumbent market that hasn't changed in centuries. This is a mission of massive impact if successful, but it will be incredibly difficult to execute. Only by having the highest of standards for our crew and our processes will we have a chance at achieving our mission.

      At the same time, in order to accomplish ambitious things, we have to each put our mission and our crew mates ahead of ourselves. We actively seek to work with people who can do so, and that means we want to find people who drive our standards ever higher, and have low ego.`,
  },
];

const Careers: React.FC<CareersProps> = ({ title, content }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <CareersContainer>
        <InfoContainer>
          <StyledHeartIcon />
          <InfoContainerText>
            <Title>{title}</Title>
            <Content>{content}</Content>
          </InfoContainerText>
          <ButtonWithIcon />
        </InfoContainer>
        {screenWidth > 600 ? (
          <Accordion items={items} />
        ) : (
          <ValuesCarousel items={items} />
        )}
      </CareersContainer>
      <PeopleCarousel />
    </>
  );
};

export default Careers;
