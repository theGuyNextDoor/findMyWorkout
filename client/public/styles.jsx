import styled from 'styled-components';

/* -------------------------------- HEADERS --------------------------------- */
export const Title = styled.h1`
  text-transform: uppercase;
`;

/* --------------------------------- APP ------------------------------------ */
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
`;

export const HeaderContainer = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #FFF;
  padding-left: 5%;
  padding-right: 5%;

`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 5em;
  text-align: center;
  justify-content: space-between;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
/* ----------------------------------- HOME --------------------------------- */
export const HomeWrapper = styled.div`
  width: 100%;
`;
export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 2em;
`;
/* ----------------------------------- IMAGE -------------------------------- */
export const ImageHolder = styled.img`
  width: 50%;
  height: 20em;
`;
export const HomeImageHolder = styled.img`
  width: 40%;
  height: 20em;
`;

/* -------------------------------- EQUIPMENT ------------------------------- */
export const EquipmentWrapper = styled.div`
  width: 100%;
`;

export const EquipmentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Block = styled.div`
  width: 45%;
`;
/* ----------------------------- UPPER/ LOWER ------------------------------- */
export const ExerciseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export default styled;
