import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

export const Link = styled(NavLink)`
  text-decoration: none;
  font-size: 24px;
  color: #333;
  transition: color 0.3s ease;

  &:hover {
    color: gray;
  }
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 68px;
  color: black;
  margin-bottom: 20px;
  background-color: #333;
  padding: 20px;
  border-radius: 10px;
  border: black;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);
  font-family: 'Inter', sans-serif;
  animation: fadeIn 1s ease;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;