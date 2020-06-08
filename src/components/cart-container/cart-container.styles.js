import styled from 'styled-components';
import { ReactComponent as CartLogo } from '../../../public/cart-icon.svg';

export const EmptyCartContainer = styled.div`
  position: absolute;
  width: 360px;
  height: 480px;
  margin-left: 120px;
  margin-top: 128px;

  background: #FFFFFF;
`

export const CartLogoComponent = styled(CartLogo)`
  position: absolute;
  margin-left: 154px;
  margin-top: 170px;
`

export const EmptyTitle = styled.p`
  position: absolute;
  width: 185px;
  height: 32px;
  left: 88px;
  top: 232px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 21px;
  line-height: 32px;

  text-align: center;
  color: #333333;
`

export const EmptySubtitle = styled.p`
  position: absolute;
  width: 227px;
  height: 48px;
  left: 67px;
  top: 272px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  color: #333333;
`

export const MatchedItems = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: top;
  width: 360px;
  height: 480px;
  margin-left: 120px;
  margin-top: 128px;

  background: #FFFFFF;
`

export const MatchedItem = styled.div`  
  width: 360px;
  height: 106px;
  left: 0px;
  top: 0px;

  ${props => props.showAddRemove ? `opacity: 0.2;` : ``}

  border-bottom: 1px solid #DDDDDD;
`

export const ImageItem = styled.img`
  content: url(${props => props.imageSrc});
  height: 80px;
  width: 74px;
  margin-top: 16px;
  margin-left: 16px;
`

export const TextItem = styled.span`
  position: absolute;
  margin-top: ${props => props.price ? '58px' : '16px'};
  margin-left: 22px;
  color: ${props => props.price ? '#FF2D55' : '#333333'};
`

export const AddItem = styled.div`
  position: absolute;
  background-color: #FF8000;
  left: 130px;
  bottom: 360px;
  width: 48px;
  height: 48px;
  position: relative;
  border-radius: 50%;
  margin: 30vh auto;
  cursor: pointer;
  z-index: 2;

  &:before, &:after {
    ${props => props.quantity
      ?
      `
        content: '${props.quantity}';
        position: absolute;
        top: 14px;
        left: 20px;
        color: white;
      `
      :
      `
        content: '';
        position: absolute;
        width: 24px;
        height: 2px;
        background-color: white;
        left: 12px;
        top: 24px;
        z-index: 0;
      `
    }
  }

  &:after {
    ${props => props.quantity 
      ? 
      `
        content: '';
        text-align: center;
      `
      :
      `
        transform: rotate(-90deg);
      `
    }
  }
`

export const DeleteItem = styled.span`
  position: absolute;
  margin-left: 205px;
  margin-top: 85px;

  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;

  cursor: pointer;
  color: #333333;
`

export const AddRemoveComponent = styled.div`
  position: absolute;
  width: 180px;
  height: 48px;
  right: 16px;
  top: 29px;

  /* secondary */

  background: #FF8000;
  border-radius: 4px;
`