import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 12px 12px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
`;

export const NavItem = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: #ff4500;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: orangered;
    color: white;
  }
`;
