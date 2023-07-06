import styled from "@emotion/styled";

export const List = styled.ul`
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 30px;
  margin: 30px auto;
  background-color: #333;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0px 10px 15px 2px rgba(0, 0, 0, 0.5);
`;