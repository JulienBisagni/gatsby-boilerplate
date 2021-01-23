import { useState } from "react"

export const useCart = () => {
  const [showCart, setShowCart] = useState(false)

  const openCart = () => {
    console.log("open")
    setShowCart(true)
  }

  const closeCart = () => {
    setShowCart(false)
  }
  return {
    showCart,
    openCart,
    closeCart,
  }
}
