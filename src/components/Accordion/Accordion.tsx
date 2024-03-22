import React, { useState } from 'react';
import styled from 'styled-components';
import AccordionItem from './AccordionItem';
import { colors } from '../../styles/colors';

interface AccordionProps {
  items: { id: number; title: string; icon: React.ReactNode; content: string }[];
}

const AccordionContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  border: 1px solid ${colors.detailLight};
  border-radius: 12px;
  margin-bottom: 8%;
  margin-top: 6%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <AccordionContainer>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          icon={item.icon}
          content={item.content}
          isActive={index === activeIndex}
          toggleAccordion={() => toggleAccordion(index)}
        />
      ))}
    </AccordionContainer>
  );
};

export default Accordion;