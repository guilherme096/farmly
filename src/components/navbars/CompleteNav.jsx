import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { CartModal } from '../CartModal.jsx'
import { useEffect, useState } from "react"
import { getCartCount } from "../../utils/buyHelper.js"
import { checkAuth, getUser, logOutUser } from "../../utils/authenticationHelper.js"
export const CompleteNav = () => {
    const [authed, setAuthed] = useState(checkAuth());
    const [user, setUser] = useState(null);
    useEffect(() => {
        if (authed) {
            setUser(getUser());
        }
    }, [authed])
    const logOut = () => {
        logOutUser();
        setAuthed(false);
        setUser(null);
    }
    return (<div className="navbar bg-base-100 h-20 flex flex-row p-0 align-middle px-3">
        <a className="w-fit mr-8 h-20 shrink-0" href="/explore">
            <img src="/icons/farmly_black.svg" alt="" className="h-20" />
        </a>
        <div className="form-control w-full flex flex-row">
            <input type="text" placeholder="Search" className="input input-bordered w-full  rounded-r-none" />
            <button className="btn bg-primary-focus  rounded-l-none border-l-0 text-white">
                <FontAwesomeIcon icon={faMagnifyingGlass} className='text-white h-4 w-4' />
            </button>
        </div>
        <div className="flex flex-row align-middle w-full ml-auto justify-between">
            <div className="dropdown dropdown-end ml-auto">
                <label className="btn btn-ghost btn-circle" htmlFor='cart-modal'>
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                        <span className="badge badge-sm indicator-item">{getCartCount()}</span>
                    </div>
                </label>
            </div>
            <div className="hidden lg:flex w-fit mr-auto">
                <ul className="menu menu-horizontal px-1">
                    <li className="px-2"><a>About us</a></li>
                    <li className="px-2"><a>Orders</a></li>
                </ul>
            </div>
            <a className="btn btn-primary btn-outline ml-auto" href="/prodDash">Become a seller</a>
            {authed && user ? <div className="dropdown dropdown-end ml-8">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-12 rounded-full">
                        <img src={user.picture} />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a onClick={()=>logOut()}>Logout</a></li>
                </ul>
            </div> : <a className="btn btn-primary ml-auto w-32" href="/">Login</a>}
        </div>
        <CartModal />
    </div>)
}