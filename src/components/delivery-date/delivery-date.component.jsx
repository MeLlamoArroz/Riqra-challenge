import React from 'react';
import { 
  DeliveryDateComponent, 
  DeliveryLogoComponent,
  DeliveryText
 } from './delivery-date.styles';

const DeliveryDate = () => {
  let today = new Date()
  let dow = today.getDay()

  /// Delivery date rule
  if (dow === 5) {
    today.setDate(today.getDate() + 3)
  } else if (dow === 6) {
    today.setDate(today.getDate() + 2)
  } else {
    today.setDate(today.getDate() + 1)
  }

  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()

  dd = dd < 10 ? '0' + dd : dd
  mm = mm < 10 ? '0' + mm : mm

  let deliverDate = mm+'/'+dd+'/'+yyyy

  return (
    <DeliveryDateComponent>
      <DeliveryLogoComponent/>
      <DeliveryText>
        Buy now and get it by
      </DeliveryText>
      <DeliveryText bold>
        { deliverDate }
      </DeliveryText>
    </DeliveryDateComponent>
  )
}

export default DeliveryDate;