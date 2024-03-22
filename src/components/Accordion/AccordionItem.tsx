import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "../../styles/colors";
import { gsap } from "gsap";

import ArrowIcon from "../../assets/icons/AccordionArrow";

interface AccordionItemProps {
  title: string;
  icon: React.ReactNode;
  content: string;
  isActive: boolean;
  toggleAccordion: () => void;
}

// Styled component definitions
const AccordionItemContainer = styled.div<{ isActive: boolean }>`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  justify-content: center;
  overflow: hidden;
  border: 1px solid ${colors.primary};
  color: ${({ isActive }) => (isActive ? colors.primary : colors.detailDark)};
  font-family: "PP Mori", "Inter";
`;

const AccordionItemHeader = styled.div<{ isActive: boolean }>`
  padding: 8px;
  background-color: ${({ isActive }) =>
    isActive ? colors.secondary : colors.primary};
  color: ${({ isActive }) => (isActive ? "#fff" : "#333")};
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? colors.primary : colors.detailDark)};
`;

const AccordionItemTitle = styled.h3`
  font-size: 1.5em;
  margin: 0;
  margin-left: 15px;
`;

const AccordionItemContent = styled.p<{ isActive: boolean }>`
  display: ${({ isActive }) => (isActive ? "block" : "none")};
  padding: 12px 45px;
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  height: ${({ isActive }) => (isActive ? "auto" : "0")};
  transform: ${({ isActive }) => (isActive ? "scaleY(1)" : "scaleY(0)")};
  overflow: hidden;
  background-color: ${colors.secondary};
  margin: 0;
  font-size: 1em;
  white-space: pre-wrap;
  padding-bottom: 5%;
  max-width: 70%;
`;

const AccordionItemIcon = styled.div`
  margin-right: 10px;
`;

const AccordionItemArrow = styled(ArrowIcon)`
  margin-left: 10px;
`;

const AccordionHeaderSubsection = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  icon,
  content,
  isActive,
  toggleAccordion,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const contentElement = contentRef.current;

    if (contentElement) {
      const tl = gsap.timeline({
        paused: true,
        reversed: !isActive,
      });

      tl.from(contentElement, {
        opacity: 0,
        transform: "scaleY(0)",
        duration: 0.3,
        ease: "power2.inOut",
      });

      isActive ? tl.play() : tl.reverse();
    }
  }, [isActive]);

  return (
    <AccordionItemContainer isActive={isActive}>
      <AccordionItemHeader isActive={isActive} onClick={toggleAccordion}>
        <AccordionHeaderSubsection>
          <AccordionItemArrow isActive={isActive} />
          <AccordionItemTitle>{title}</AccordionItemTitle>
        </AccordionHeaderSubsection>
        <AccordionItemIcon>{icon}</AccordionItemIcon>
      </AccordionItemHeader>
      <AccordionItemContent isActive={isActive}>{content}</AccordionItemContent>
    </AccordionItemContainer>
  );
};

export default AccordionItem;
