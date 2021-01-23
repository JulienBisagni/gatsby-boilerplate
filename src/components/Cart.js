import React, { useContext, useEffect } from "react"
import loadable from "@loadable/component"

import "../styles/components/cart.scss"
import { CartContext } from "../contexts/CartContext"
import { useCart } from "./hooks/useCart"

const Icon = loadable(() => import("./Icon"))

export default function Cart() {
  const { cartState, removePizzaFromCart } = useContext(CartContext)
  const { showCart, openCart, closeCart } = useCart()
  useEffect(() => {
    console.log(showCart)
  }, [showCart])

  return (
    <div className="cart__container">
      <button onClick={openCart} className="">
        <Icon icon="pizza_outline" additionalClassName="cart__icon" />
        <p className="cart__quantity">{cartState.quantity}</p>
      </button>
      <div className={`cart ${showCart ? "--active" : ""}`}>
        <button type="button" onClick={closeCart}>
          <Icon icon="close" additionalClassName="cart__icon" />
        </button>
        <h3 className="cart__title">Votre commande</h3>
        {cartState?.pizzas?.map(pizza => (
          <div key={pizza.id}>
            {pizza.title} {pizza.price}
            <button type="button" onClick={() => removePizzaFromCart(pizza)}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
