import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"



const AccountPage = (props) => {
    const navigate = useNavigate()
    const userData = props.currentUser.user
    const userProductData = props.currentUser.products

    const handleDelete = () => {
        deleteUserAccount(userData._id)
        localStorage.clear()
        props.setIsLoggedIn(false)
        navigate('/')

    }

    return(
        <>
            <h1>Hello, {userData.username}</h1>
        <div className="row">
            <div className="coloumn sm-6">
                    <h4>Username: {userData.username}</h4>
                   <p>Permantly delete your account, active listings, and all data associated with it.
                    <br/> Warning: this action can't be undone!</p> 
                    <button onClick={handleDelete}>Delete Account</button>
            </div>
        </div>

        <div className="row">
        <h2>Your Active Listings:</h2>
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