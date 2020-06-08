import styled from 'styled-components';

export const CompleteButton = styled.button`
  position: absolute;
  width: 360px;
  height: 48px;
  margin-left: 64px;
  margin-top: 460px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  cursor: pointer;
  background: ${props => props.disabled ? 'white' : '#FF8000'};
  color: ${props => props.disabled ? '#C1C1C1' : '#FFFFFF'};
  border: 1px solid #DDDDDD;
  box-sizing: border-box;
  border-radius: 4px;
`