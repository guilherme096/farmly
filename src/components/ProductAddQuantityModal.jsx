import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

export const ProductAddQuantityModal = (props) => {
    const [count, setCount] = useState(1)
    return (<>
        <input type="checkbox" id={"product-amount-" + props.product.id.toString()} className="modal-toggle" />
        <label className="modal cursor-pointer" id={"product-amount-" + props.product.id.toString()} htmlFor={"product-amount-" + props.product.id.toString()}>

            <label className="card flex-shrink-0 w-[600px] shadow-2xl bg-base-100 h-64 pb-6 px-6" htmlFor=''>
                <label
                    for={"product-amount-" + props.product.id.toString()}
                    class="btn btn-sm btn-circle absolute right-6 top-6">✕</label
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
                <label className="btn btn-primary mx-auto px-6 w-full mt-auto" htmlFor={"product-amount-" + props.product.id.toString()} > Add to cart</label>
            </label>
        </label>
    </>);
}