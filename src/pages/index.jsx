import React from 'react';
import { GlobalStyle } from './index.styles';

import SearchBar from '../components/search-bar/search-bar.component';
import CartContainer from '../components/cart-container/cart-container.component';
import DeliveryDate from '../components/delivery-date/delivery-date.component';
import PricesContainer from '../components/prices-container/prices-container.component';
import CompleteButtonComponent from '../components/complete-order/complete.order.component';

const Index = () => {
  const [searchBarInput, setSearchBarInput] = React.useState('')
  const [cartItems, setCartItems] = React.useState([])
  const [totalPrice, setTotalPrice] = React.useState(0)
  
  return (
    <div className='homepage'>
      <GlobalStyle/>
      <SearchBar 
        setSearchBar={setSearchBarInput}
      />
      <CartContainer
        searchBarInput={searchBarInput}
        setSearchBar={setSearchBarInput}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <DeliveryDate/>
      <PricesContainer
        cartItems={cartItems}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
      <CompleteButtonComponent
        totalPrice={totalPrice}
      />
    </div>
  )
}
export default Index