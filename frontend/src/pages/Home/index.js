import { deleteUserAccount } from "../../utils/api"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import React from "react";
// import './accountPage.css'

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
        <div className="account-page" />
        <div class="account-greeting">
            <div className="coloumn sm-6">
            <h1>Hello, {userData.username}</h1>
            <p>Thanks for being a Yard Sail user!</p>
                <h4>Username: {userData.username}</h4>
                <p> Want to create a new listing? If so, click on the button below!</p>
                <Button href="/newproduct" id="create-product">Create Listing</Button>
                <p>Permantly delete your account, active listings, and all data associated with it.</p>
                <p id="warning"> Warning: this action can't be undone!</p> 
                <Button id="delete-account" onClick={handleDelete}>Delete Account</Button>
            </div>
        </div>

        <div class="active-listings">
            <h2>Your Active Listings:</h2>
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
        </div>
        </>
    )
}
export default AccountPage 