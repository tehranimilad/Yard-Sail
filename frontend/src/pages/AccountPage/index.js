

const AccountPage = ({user}) => {
    
    const userData = user.user
    const userProductData = user.products

    return(
        <>
            <h1>Account</h1>
        <div className="row">
            <div className="coloumn sm-6">
                    <h1>Username:{userData.username}</h1>
                    <h1>Password:{userData.password}</h1>
            </div>
        </div>
        <h2>Your Products:</h2>
        <div className="row">
            {userProductData.map((product, i) => {
                return(
                <div className="card" style={{width: '18rem'}}>
                    <img className="card-img-top" src={product.image} alt={product.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                    </div>
                </div>)
            })}
        </div>
        </>
    )
}
export default AccountPage 