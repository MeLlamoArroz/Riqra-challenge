import React from 'react';
import { CompleteButton } from './complete-order.styles';

const CompleteButtonComponent = ({ totalPrice }) => {
  return (
    <CompleteButton disabled={totalPrice < 50}>
      COMPLETE ORDER
    </CompleteButton>
  )
}

export default CompleteButtonComponent;