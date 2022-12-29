import { ItemAmountPicker } from "./ItemAmountPicker"
export const CartModal = () => {
    return <><input type="checkbox" id="cart-modal" className="modal-toggle" />
        <div className="modal">
            <div className="card flex-shrink-0 shadow-2xl bg-base-100 w-[600px] h-fit">
                <div className="text-primary left-6 top-6 absolute font-bold text-xl">Shopping Cart</div>
                <label htmlFor="cart-modal" className="btn btn-sm btn-circle absolute right-6 top-6">✕</label>
                <div className="card-body mt-14 mx-0 p-6">
                    <div className="w-full min-h-24 max-h-56 text-gray-400 flex flex-col align-middle scroll-auto overflow-scroll">
                        {/* <div className="text-center text-lg">Cart is empty</div> */}
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                        <ItemAmountPicker/>
                    </div>
                    <div className='m-auto border rounded-lg py-2 flex flex-col w-full px-4'>
                        <div className="my-1 w-full flex flex-row justify-between">
                            <div className="text-lg text-secondary font-thin">Subtotal</div>
                            <div className="text-lg text-secondary font-thin">0€</div>
                        </div>
                        <div className="my-1 w-full flex flex-row justify-between">
                            <div className="text-lg text-secondary font-thin">Shipping</div>
                            <div className="text-lg text-secondary font-thin">0€</div>
                        </div>
                        <div className="mt-2 mb-1 w-full flex flex-row justify-between">
                            <div className="text-xl text-primary font-bold">Total</div>
                            <div className="text-xl text-primary font-bold">0€</div>
                        </div>
                    </div>
                    <div className="w-full flex flex-row mt-4 mx-auto align-middle">
                        <button className="btn btn-primary btn-outline w-1/2">Edit shipping/payment information</button>
                        <button className="btn btn-primary w-1/2">Complete Order</button>
                    </div>
                </div>
            </div>
        </div></>
}