import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretDown } from "@fortawesome/free-solid-svg-icons"

export const SideBarFilter = () => {
    return (<>
        <div className="p-6 absolute left-0 border-r border-t rounded-xl h-full mt-8 w-fit border-black">
            <div className="h-20 border-b border-black">
                <button className="btn btn-active btn-primary w-24 mr-4 rounded-full">Products</button>
                <button className="btn btn-outline btn-primary w-24 rounded-full">Farm</button>
            </div>
            <div>
                <div className="dropdown p-0 my-auto mt-8 mb-4">
                    <label tabindex="" className="btn btn-outline btn-primary w-52">Origin<FontAwesomeIcon icon={faCaretDown} className='h-4 w-4' /></label>
                    <ul tabindex="" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
                <br />
                <div className="dropdown my-auto p-0 mt-4 mb-4">
                    <label tabindex="0" className="btn btn-outline btn-primary w-52">Budget<FontAwesomeIcon icon={faCaretDown} className='h-4 w-4' /></label>
                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
                <br />
                <div className="dropdown my-auto p-0 mt-4">
                    <label tabindex="0" className="btn btn-outline btn-primary w-52">Service Options<FontAwesomeIcon icon={faCaretDown} className='h-4 w-4' /></label>
                    <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                        <li><a></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>)
}