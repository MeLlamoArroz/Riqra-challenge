import styled from 'styled-components';
import { ReactComponent as DeliveryLogo } from '../../../public/delivery-icon.svg';

export const DeliveryDateComponent = styled.div`
  position: absolute;
  width: 360px;
  height: 40px;
  margin-left: 544px;
  margin-top: 128px;

  /* background: red; */
  border-radius: 4px;
`

export const DeliveryLogoComponent = styled(DeliveryLogo)`
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  left: 12.5%;
  right: 14.26%;
  top: 25%;
  bottom: 8.33%;
`

export const DeliveryText = styled.p`
  vertical-align: middle;
  display: inline-block;
  position: absolute;
  width: 233px;
  height: 24px;
  left: ${props => props.bold ? "215px" : "70px"};
  top: -7px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: ${props => props.bold ? "bold" : "normal"};
  font-size: 16px;
  line-height: 24px;

  color: #333333;
`