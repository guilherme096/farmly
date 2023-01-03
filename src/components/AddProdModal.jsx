export const AddProdModal = (props)=>{
    return (
<>
    <input type="checkbox" id="my-modal" class="modal-toggle" />
    <div class="modal">
        <div class="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
            <label for="my-modal" class="btn btn-sm btn-circle absolute right-2 top-2" onClick={props.addProduct}>✕</label>
            <div class="card-body">
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input
                        type="text"
                        placeholder="name"
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Price</span>
                    </label>
                    <input
                        type="text"
                        placeholder="price"
                        class="input input-bordered"
                    />
                </div>
                <div class="form-control">
                    <label class="label">
                        <span class="label-text">Description</span>
                    </label>
                    <textarea
                        type="textarea"
                        placeholder="description"
                        class="input input-bordered"
                    ></textarea>
                </div>
                <div class="form-control mt-6">
                    <button class="btn btn-primary">Add product</button>
                </div>
            </div>
        </div>
    </div>
</>);
};