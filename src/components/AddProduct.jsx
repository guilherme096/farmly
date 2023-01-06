import ProductModal from "./ProductModal.astro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import addProdModal from "./AddProdModal.jsx";
export const AddProduct = () => {
  return(
<>
  <label className="card bg-base-96 m-4 shadow-xl w-80 p-24 " htmlFor="my-modal">
    <FontAwesomeIcon icon={faPlus}/>
  </label>
</>);
}
