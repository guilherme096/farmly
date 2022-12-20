import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"
import { faTrashCan } from "@fortawesome/free-solid-svg-icons"
export const ShoppingCartItem = () => <div className="card w-full bg-base-100 mx-auto my-auto flex flex-row justify-between h-24 px-4 my-4">
    <div className="flex flex-row align-middle">
        <div class="avatar my-auto w-auto h-20">
            <div class="h-20 rounded-xl ">
                <img src="https://placeimg.com/192/192/people" />
            </div>
        </div>
        <div className="my-auto ml-3">
            <div className="text text-xl column">Cabbages</div>
            <div className="text column">José António</div>
        </div>
    </div>
    <div className="dropdown my-auto p-0 ">
        <label tabindex="0" className="btn btn-primary text-lg">0<FontAwesomeIcon icon={faCaretDown} className='h-4 w-4 text-{D9D9D9}' /></label>
        <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><a>01</a></li>
            <li><a>02</a></li>
            <li><a>03</a></li>
            <li><a>04</a></li>
            <li><a>05</a></li>
        </ul>
    </div>
    <div className="text text-xl my-auto">7.5€</div>
    <button className="text text-xl my-auto"><FontAwesomeIcon icon={faTrashCan} className='h-6 w-6 text-{D9D9D9} hover:scale-105'/></button>
</div>