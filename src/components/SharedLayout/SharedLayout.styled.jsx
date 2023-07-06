import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  padding: 10px 15px;
`;

export const Header = styled.header`
box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);
  background-color: #333;
`;

export const Link = styled(NavLink)`
  padding: 5px 10px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  border: 1px solid black;
  transition: color 0.3s ease, border 0.3s ease;

&:hover,
  &:focus {
    color: black;
    border: 1px solid white;
  }

  &.active {
    color: white;
    background-color: grey;
    border: 1px solid white;
  }
`;

export const Nav = styled.nav`
  display: flex;
  font-size: 30px;
  gap: 30px;
  padding: 10px 0;
    align-items: center;
  justify-content: center;
`;