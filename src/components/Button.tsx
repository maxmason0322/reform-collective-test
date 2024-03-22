import React from 'react';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { ReactComponent as ButtonArrowIcon } from '../assets/icons/button-arrow.svg';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.secondary};
  color: ${colors.primary};
  padding: 8px 16px;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  font-family: 'PP Mori', 'Inter';
  font-weight: 600;
  height: 48px;
`;

const StyledIcon = styled(ButtonArrowIcon)`
  width: fixed;
  height: fixed;
  margin-left: 10px;
`;

const ButtonWithIcon: React.FC = () => (
  <Button>
    <span>See open roles</span>
    <StyledIcon />
  </Button>
)

export default ButtonWithIcon;