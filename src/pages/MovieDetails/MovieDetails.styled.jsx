import styled from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: block;
`;

export const Image = styled.img`
  width: 400px;
  margin-right: 40px;
  border-radius: 5px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h1`
  font-size: 55px;
  margin-bottom: 20px;
  color: black;
`;

export const Year = styled.p`
  font-weight: 500;
  font-size: 24px;
  margin-bottom: 20px;
  color: #666;
`;

export const Description = styled.h2`
  margin-bottom: 10px;
  font-size: 28px;
  color: black;
`;

export const OverviewText = styled.p`
  font-size: 20px;
  margin-bottom: 20px;
  color: #666;
`;

export const Genres = styled.p`
  font-size: 20px;
  color: #666;
`;

export const MyLink = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  display: inline-block;
  border-radius: 10px;
  font-size: 30px;
  font-weight: 500;
  color: black;
  transition: color 0.3s ease, background-color 0.3s ease;
    border-radius: 10px;
  border: 3px solid;

  &:hover,
  &:focus {
    color: white;
    background-color: gray;
  }

  &.active {
    color: white;
    background-color: gray;
  }

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 30px;
  font-weight: 500;
  color: black;
  transition: color 0.3s ease;

  &:hover,
  &:focus {
    color: white;
  }
`;

export const LinkWrapper = styled.div`
  padding: 20px 0;
`;

export const Additional = styled.p`
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 20px;
  color: black;
`;