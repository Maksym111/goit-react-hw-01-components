import styled from '@emotion/styled';

const Statistic = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 auto;
  margin-top: 20px;
  width: 500px;

  padding: 30px;
  border: 1px solid grey;

  background-color: rgb(200, 200, 226);
`;

const Title = styled.h2`
  padding: 20px;
  text-transform: uppercase;
`;
const ListStatics = styled.ul`
  display: flex;
`;

const StaticItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 50px;

  color: white;
  background-color: #${() => {
      return Math.floor(Math.random() * 16777215).toString(16);
    }};
`;

const PercentCount = styled.span`
  font-size: 20px;
  margin-top: 10px;
`;

export { Statistic, Title, ListStatics, StaticItem, PercentCount };
