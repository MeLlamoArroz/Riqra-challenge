import styled from 'styled-components';

export const Pricing = styled.div`
  position: absolute;
  width: 360px;
  height: 160px;
  margin-left: 544px;
  margin-top: 168px;

  background: #FFFFFF;
  border-radius: 4px;
`
export const DetailedPrice = styled.div`
  width: 90%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  margin-top: 16px;
  margin-left: 16px;
  padding: ${props => props.total ? '15px 0' : '3px 0'};
  background: ${props => props.shipping ? 'yellow' : 'white'};
`