import { getUser } from './authenticationHelper'
export const addItemToCart = (item, amount) => {
    var _item = {
        id: item.id,
        qnty: amount,
    }
    _item.id = item.id
    _item.qnty = amount
    const user = getUser()
    if (user) {
        const cart = user.cart
        const itemInCart = cart.find(cartItem => cartItem.id === item.id)
        if (itemInCart) {
            itemInCart.qnty++
        } else {
            cart.push(item)
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
    }
}

export const getCartCount = () => {

}