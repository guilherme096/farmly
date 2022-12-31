import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import {removeItemFromCart} from "../utils/buyHelper"
export const ShoppingCartItem = (props) => {
    const _removeItemFromCart = () => {
        // remove item from cart
        removeItemFromCart(props.product);
        props.updateCart();
    }
    return <div className="card w-full bg-base-100 mx-auto flex flex-row justify-around h-24 px-4 my-4 cursor-pointer">
    <div className="flex flex-row align-middle">
        <div className="avatar my-auto w-auto h-20">
            <div className="h-20 rounded-xl ">
                <img src={props.product.image} />
            </div>
        </div>
        <div className="my-auto ml-3">
            <div className="text text-xl column">{props.product.name}</div>
            <div className="text column">{props.product.producer.name}</div>
        </div>
    </div>
    <div className="flex flex-row align-middle my-auto w-36 justify-around">
        <div className="text-center text-lg">{props.product.qnty}</div>
    </div>
    <div className="text text-xl my-auto ml-auto mr-6">{props.product.qnty * props.product.price}€</div>
    <button className="text text-xl my-auto" onClick={_removeItemFromCart}><FontAwesomeIcon icon={faTrashCan} className='h-6 w-6 text-{D9D9D9} hover:scale-105' /></button>
</div>
}