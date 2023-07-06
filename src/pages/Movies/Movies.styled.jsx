import styled from "@emotion/styled";

export const Form = styled.form`
  margin: 0 auto;
  max-width: 500px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  input {
    height: 40px;
    padding-left: 10px;
    margin-bottom: 15px;
    font-size: 20px;
    background-color: #333;
    color: #fff;
    border: none;
    border-radius: 5px;


    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0px 0px 5px 0px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 0 auto;
  border: white;
  border-radius: 5px;
  font-size: 20px;
  color: #fff;
  background-color: black;


  p {
    margin-left: 5px;
  }

  &:hover,
  &:focus {
    color: black;
    background-color: white;
    transform: scale(1.02);
  }

  &:focus {
    outline: none;
  }
`;