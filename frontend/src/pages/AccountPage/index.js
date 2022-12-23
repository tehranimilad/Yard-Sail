import './account.css'
import { Container, Row, Col } from "react-bootstrap"


const AccountPage = ({user}) => {
    
    const userData = user.user
    const userProductData = user.products




    return(
        <>

<Container>
<div class="row justify-content-md-center">
<div class="col-md-auto">
      <h1>My Account</h1>
    </div>
    </div>
    <Row>
      <Col sm={5}>
      <h2>Hello, {userData.username}!</h2>
      </Col>
      <Col sm={4}>
      <h5><u>Your current listings:</u></h5>
      </Col>
    </Row>
  </Container>
         

       
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