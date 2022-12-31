import { getUser } from './authenticationHelper'
import globalData from '../globalData.json'
export const addItemToCart = (item, amount) => {
    console.log(amount)
    var _item = {
        id: '',
        qnty: 0,
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
            cart.push(_item)
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
    }
}

export const removeItemFromCart = (item) => {
    const user = getUser()
    if (user) {
        const cart = user.cart
        const itemInCart = cart.find(cartItem => cartItem.id === item.id)
        if (itemInCart) {
            cart.splice(cart.indexOf(itemInCart), 1)
        }
        localStorage.setItem('currentUser', JSON.stringify(user))
    }
}

export const getCartCount = () => {
    const user = getUser()
    if (user) {
        return user.cart.length
    }
    return 0
}

export const getCartItems = () => {
    const user = getUser()
    if (user) {
        var cart = user.cart
        var items = []
        cart.forEach(cartItem => {
            const item = globalData.products.find(item => item.id === cartItem.id)
            if (item) {
                items.push({
                    ...item,
                    qnty: cartItem.qnty,
                    producer: globalData.producers.find(producer => producer.id === item.producer)
                })
            }
        })
        return items
    }
    return []
}