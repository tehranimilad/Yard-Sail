import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import EditProduct from "../../components/EditProduct"
import { showOneProduct } from "../../utils/api"
import { deleteOneProduct } from "../../utils/api"
import { updateOneProduct } from "../../utils/api"
import { Link } from "react-router-dom"
import ShowProductEdit from "../ShowProductEdit"


const AccountPage = (props) => {
    const [formShow, setFormShow] = useState(false)
    const [showProductData, setShowProductData] = useState({})
    const [canEdit, setCanEdit] = useState(true)
    const navigate = useNavigate()
    const userData = props.currentUser.user
    const userProductData = props.currentUser.products

    const toggleEditForm = () => {
        setFormShow(!formShow)
    }

    const handleDelete = () => {
        deleteUserAccount(userData._id)
        localStorage.clear()
        props.setIsLoggedIn(false)
        navigate('/')

    }

    const handleChange = (event) => {
        setCanEdit({ ...canEdit, [event.target.id]: event.target.value })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        updateOneProduct().then(data => {
            setShowProductData(data)
        })
        
    }

    // Deletes then navigates to home page
    const deleteProduct = () => {
        const itemId = showProductData._id
        deleteOneProduct(itemId).then(alert("You deleted this product"))
        navigate('/')
    }

    return(
        <>
            <h1>Account</h1>
        <div className="row">
            <div className="coloumn sm-6">
                    <h1>Username:{userData.username}</h1>
                    <h1>Password:{userData.password}</h1>
                    <button onClick={handleDelete}>Delete Account</button>
            </div>
        </div>
        <h2>Your Products:</h2>
        <div className="row">
            {userProductData.map((product, i) => {
                return(
                <div key={i} className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={product.image} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        
                        <div>
                        <Link to={"/productedit/" + product._id}>Edit</Link>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
        </>
    )
}
export default AccountPage 