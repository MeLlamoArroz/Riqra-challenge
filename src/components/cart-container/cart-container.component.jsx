import React from 'react';
import { 
  EmptyCartContainer, 
  CartLogoComponent,
  EmptyTitle,
  EmptySubtitle,
  MatchedItems,
  MatchedItem,
  ImageItem,
  TextItem,
  AddItem,
  DeleteItem,
  AddRemoveComponent
 } from './cart-container.styles';
 import ITEMS_DATA from '../../../public/items-data';

const CartContainer = ({ searchBarInput, setSearchBar, cartItems, setCartItems }) => {
  const filteredItems = ITEMS_DATA.items.filter(item => item.name.toLowerCase().includes(searchBarInput))
  
  return (
    searchBarInput.length === 0
    ?
      Object.values(cartItems).length === 0
      ?
        <EmptyCartContainer>
          <CartLogoComponent/>
          <EmptyTitle>
            Your cart is empty
          </EmptyTitle>
          <EmptySubtitle>
            Seems like you haven't chosen what to buy...
          </EmptySubtitle>
        </EmptyCartContainer>
      :
        <MatchedItems>
        {
          Object.values(cartItems).map((item, idx) => {
            const [showAddRemove, setShowAddRemove] = React.useState(false)

            return (
              <MatchedItem key={idx} showAddRemove={showAddRemove}>
                <ImageItem imageSrc={item.imageUrl}/>
                <TextItem> {item.name} </TextItem>
                <TextItem price> {`$${parseFloat(item.price).toFixed(2)}`} </TextItem>
                <DeleteItem 
                  onClick={() => {
                    setCartItems(cartItems.filter(cartItem => cartItem.id !== item.id))
                  }}
                >
                  delete
                </DeleteItem>
                <AddItem
                  quantity={item.quantity}
                  onClick={() => {
                    setShowAddRemove(true)
                  }}
                />
              </MatchedItem>
            )
          })
        }
        </MatchedItems>
    :
      <MatchedItems>
      {
        filteredItems.map((item, idx) => {
          return (
            <MatchedItem key={idx}>
              <ImageItem imageSrc={item.imageUrl}/>
              <TextItem> {item.name} </TextItem>
              <TextItem price> {`$${parseFloat(item.price).toFixed(2)}`} </TextItem>
              <AddItem onClick={() => {
                const exists = cartItems.find(cartItem => cartItem.id === item.id)

                document.getElementsByTagName('input')[0].value = ''
                setSearchBar('')
                setCartItems(
                  cartItems.length && exists
                  ?
                    cartItems.map(cartItem => 
                      cartItem.id === exists.id 
                      ? 
                        {...cartItem, quantity: exists.quantity + 1} 
                      : 
                        cartItem)
                  :
                    [...cartItems, {...item, quantity: 1}]
                )
              }}/>
            </MatchedItem>
          )
        })
      }
    </MatchedItems>
  )
}

export default CartContainer;