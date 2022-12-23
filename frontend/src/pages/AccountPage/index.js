import './account.css'

const AccountPage = ({user}) => {
    
    const userData = user.user
    const userProductData = user.products

    return(
        <>
            <h1>My Account</h1>
        <div className="row">
            <div className="column sm-6">
                    <h2>Welcome, {userData.username}!</h2>
            </div>
        </div>
        <h5><u>Your current listings:</u></h5>
        <div className="row">
            {userProductData.map((product, i) => {
                return(
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={product.image} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <p className="card-text">${product.price}</p>

                    </div>
                </div>)
            })}
        </div>
        </>
    )
}
export default AccountPage 