import styled from '@emotion/styled';

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  padding: 70px 30px;
  width: 500px;

  border: 1px solid grey;
`;

const WrappDescription = styled.div`
  margin: 0 auto;
`;

const Image = styled.img`
  margin-bottom: 20px;

  width: 200px;
  height: 200px;

  border-radius: 50%;
`;

const InfoUser = styled.p`
  :not(:last-child) {
    margin-bottom: 10px;
  }
  text-align: center;
`;

const ListStats = styled.ul`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  background-color: rgb(221, 231, 241);
`;

const StatsElem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  width: 100px;

  border: 1px solid grey;

  :not(:last-child) {
    border-right: none;
  }
`;

const Number = styled.span`
  font-weight: bold;
  margin-top: 10px;
`;

export {
  WrappDescription,
  Image,
  InfoUser,
  CardItem,
  ListStats,
  StatsElem,
  Number,
};
