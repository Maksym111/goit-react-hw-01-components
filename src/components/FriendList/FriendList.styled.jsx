import styled from '@emotion/styled';

export const CardsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: 20px;

  width: 300px;
  padding: 30px;

  border: 1px solid grey;
  border-radius: 4px;
`;

export const Card = styled.li`
  display: flex;
  align-items: center;

  padding: 10px;

  width: 100%;
  border: 1px solid black;
  border-radius: 16px;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;
