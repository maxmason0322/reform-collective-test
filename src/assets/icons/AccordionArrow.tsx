import React from 'react';
import styled from 'styled-components';

interface ArrowIconProps {
  isActive: boolean;
}

const IconWrapper = styled.div<{ isActive: boolean }>`
  display: inline-block;
  transform: ${({ isActive }) => (isActive ? 'rotate(90deg)' : 'rotate(0deg)')};
  transition: transform 0.5s ease;
`;

const ArrowIcon: React.FC<ArrowIconProps> = ({ isActive }: { isActive: boolean }) => {
  return (
    <IconWrapper isActive={isActive}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.414 -4.19015e-07L20 10L10.4132 20L4.9729 20L12.6671 11.9996L-5.24517e-07 11.9996L-3.49672e-07 7.99956L12.6671 7.99956L4.97375 -6.56818e-07L10.414 -4.19015e-07Z"
        fill={isActive ? "#192227" : "#4A5357"}
        style={{
          fill: isActive ? "#192227" : "#4A5357",
          fillOpacity: 1,
        }}
      />
    </svg>
    </IconWrapper>
  );
};

export default ArrowIcon;