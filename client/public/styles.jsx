import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const HeaderContainer = styled.div` //change to styled header
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #000;
  color: #FFF;
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
  justify-content: space-between;
`;

/* ------------------------------ No Equipment ------------------------------ */
export const NoEquipmentWrapper = styled.div`
  width: 100%;
`;

export default styled;
