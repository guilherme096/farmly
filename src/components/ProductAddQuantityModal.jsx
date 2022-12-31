import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { addItemToCart } from "../utils/buyHelper"
import { checkAuth } from "../utils/authenticationHelper"

export const ProductAddQuantityModal = (props) => {
    const [count, setCount] = useState(1);
    const addItemsToCart = () => {
        addItemToCart(props.product, count);
        // close modal after adding to cart in react way
    }

    const tryAdd = () => {
        if (!checkAuth()) {
            document.getElementById("error-message").classList.remove("hidden");
        }
        addItemsToCart();
        document.getElementById("product-amount-" + props.product.id.toString()).click();
        window.location.href = "/explore";
    }
    return (<>
        <input type="checkbox" id={"product-amount-" + props.product.id.toString()} className="modal-toggle" />
        <label className="modal cursor-pointer" id={"product-amount-" + props.product.id.toString()} htmlFor={"product-amount-" + props.product.id.toString()}>

            <label className="card flex-shrink-0 w-[600px] shadow-2xl bg-base-100 h-64 pb-6 px-6" htmlFor=''>
                <label
                    htmlFor={"product-amount-" + props.product.id.toString()}
                    className="btn btn-sm btn-circle absolute right-6 top-6">✕</label
                >
                <div className="card w-full bg-base-100 mx-auto flex flex-row justify-around h-24 px-4 my-4 cursor-pointer">
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
                        <button className="text text-xl" onClick={() => setCount(count - 1 > 0 ? count - 1 : count)}>-</button>
                        <div className="text-center text-lg">{count}</div>
                        <button className="text text-xl" onClick={() => setCount(count + 1)}>+</button>
                    </div>
                    <div className="text text-xl my-auto">{props.product.price}€</div>
                </div>
                <label className="btn btn-primary mx-auto px-6 w-full mt-auto" htmlFor={"product-amount-" + props.product.id.toString()} onClick={() => tryAdd()}> Add to cart</label>
            </label>
        </label>
        <div className="alert alert-error shadow-lg hidden" id="error-message">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>You need to be logged in to add items to the cart</span>
  </div>
</div>
    </>);
}
