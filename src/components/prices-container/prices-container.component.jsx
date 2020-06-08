import React from 'react';
import { Pricing, DetailedPrice } from './prices-container.styles';

const PricesContainer = ({ cartItems, totalPrice, setTotalPrice }) => {
  const productsCost = cartItems.reduce((acum, currentItem) =>
    acum + (currentItem.price * currentItem.quantity)
  , 0)
  const shippingCost = (10 * productsCost) / 100
  const taxCost = (18 * productsCost) / 100

  React.useEffect(() => {
    setTotalPrice(parseFloat(productsCost + shippingCost).toFixed(2))
  },[productsCost])

  return (
    <Pricing>
      <DetailedPrice>
        <span>
          Products
        </span>
        <span>
          {`$${parseFloat(productsCost).toFixed(2)}`}
        </span>
      </DetailedPrice>
      <DetailedPrice shipping>
        <span style={{fontWeight:'600'}}>
          Shipping Cost
        </span>
        <span>
          {`$${parseFloat(shippingCost).toFixed(2)}`}
        </span>
      </DetailedPrice>
      <DetailedPrice>
        <span>
          Taxes
        </span>
        <span>
          {`$${parseFloat(taxCost).toFixed(2)}`}
        </span>
      </DetailedPrice>
      <DetailedPrice total>
        <span style={{fontWeight:'600'}}>
          Total
        </span>
        <span style={{color:'red', fontWeight:'600'}}>
          {`$${parseFloat(totalPrice).toFixed(2)}`}
        </span>
      </DetailedPrice>
    </Pricing>
  )
}

export default PricesContainer;