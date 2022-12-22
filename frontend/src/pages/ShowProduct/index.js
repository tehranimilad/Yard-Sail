import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import EditProduct from "../../components/EditProduct"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { useNavigate } from "react-router-dom"

const ShowProduct = ({currentUser}) => {
    const navigate = useNavigate()

    const [showProductData, setShowProductData] = useState({})
    const [formShow, setFormShow] = useState(false)
    const [canEdit, setCanEdit] = useState(true)
    const [userId, setUserID] = useState('')
    const [productUserId, setProductUserId] = useState('')
    
    

    const {id} = useParams()
   

    useEffect(() => {
        showOneProduct(id).then(data => {
          setShowProductData(data)
        })
        console.log(currentUser)
      }, [id])
    
    //   useEffect(() => {
    //     if (currentUser.user._id && showProductData.user._id) {
    //       setUserID(currentUser.user._id)
    //       setProductUserId(showProductData.user._id)
    //       if (userId === productUserId) {
    //         setCanEdit(true)
    //       }
    //     }
    //   }, [currentUser, showProductData])
        
    
    const toggleEditForm = () => {
        setFormShow(!formShow)
    }

    // Deletes then navigates to home page
    const deleteProduct = () => {
        const itemId = showProductData._id
        deleteOneProduct(itemId).then(alert("You deleted this product"))
        navigate('/')
    }

   
    return(
        <>
        <div>
        <h1>{showProductData.title}</h1>
        <p>{showProductData.description}</p>
        


        </div>
        {canEdit ? 
        <div>
        <button onClick={toggleEditForm}>Edit</button>
        <button onClick={deleteProduct}>Delete</button> 
        </div>
        : null}
        {formShow ? 
        <EditProduct showProductData={showProductData}/>
        : null}
        </>
    )
}
export default ShowProduct
