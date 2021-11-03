// Write your code here
import CartContext from '../../context/CartContext'
import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.quantity * eachCartItem.price
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-label">
              Order Total:
              <span className="order-total-value"> Rs {total}/-</span>
            </h1>
            <p className="total-items">{cartList.length} Items in the cart</p>
            <button type="button" className="checkout-button d-sm-none">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button d-lg-none">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
