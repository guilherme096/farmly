import buyHelper from "../utils/buyHelper";

export const CheckoutModal = () => {
  const clearCart = () => {
    buyHelper.clearCart();
  };
  return (
    <>
      <input type="checkbox" id="my-modal" class="modal-toggle" />
      <div class="modal">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Checkout</h3>
          <h5 class="mt-3 text-l font-bold">Adress: </h5>
          <h6 class="">Rua das escolas Nº5</h6>
          <h5 class="mt-3 text-l font-bold">Payment: </h5>
          <div class="flex flex-row">
            <img src="https://logodownload.org/wp-content/uploads/2016/10/visa-logo-8.png" alt="visa.png" height="19px" width="29px" class="align-left" />
              <p class="ml-3"> **********5678</p>
          </div>
          <div class="modal-action">
            <label for="my-modal" class="btn" onClick={()=>{clearCart();}}>Complete Order</label>
          </div>
        </div>
      </div>
    </>);
}
