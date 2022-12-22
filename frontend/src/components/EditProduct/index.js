// import { useEffect, useState } from "react";
// import { updateOneProduct } from "../../utils/api";

export default function EditProduct(props) {

    // const [productState, setProductState] = useState({})
    // const [editedState, setEditedState] = useState({})

    // const handleChange = (event) => {
    //     setEditedState({ ...editedState, [event.target.id]: event.target.value })
    // }

    // const handleSubmit = async (event) => {
    //     event.preventDefault()
    //     updateOneProduct().then(data => {
            
    //         setProductState(data)
    //     })
        
    // }


    return(
        <h1>edit form</h1>
        // <div>
        //     <form className="edit-form" onSubmit={handleSubmit}>
        //                 <div className="input">
        //                     <label htmlFor="title">Title: </label>
        //                     <input id="title" type="text" value={editedState.title} onChange={handleChange} />
        //                 </div>
        //                 <div className="input">
        //                     <label htmlFor="make">Description: </label>
        //                     <input id="desciption" type="text" value={editedState.description} onChange={handleChange} />
        //                 </div>
        //                 <div className="input">
        //                     <label htmlFor="image">Image: </label>
        //                     <input id="image" type="text" value={editedState.image} onChange={handleChange} />
        //                 </div>
        //                 <div className="input">
        //                     <label htmlFor="location">Location:</label>
        //                     <input id="location" type="text" value={editedState.trim} onChange={handleChange} />
        //                 </div>
        //                 <div className="input">
        //                     <label htmlFor="price">Price:</label>
        //                     <input id="price" type="text" value={editedState.price} onChange={handleChange} />
        //                 </div>
        //                 <br />
        //                 <button type="submit">Save Changes</button>
        //             </form>
        // </div>

    )
}