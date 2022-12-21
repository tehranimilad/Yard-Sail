const ProductCard = ({product},{i}) => {
    

    return(
        <div className="col s12 m6 l3" key={i}>
                <div className="card" style={{width: '18rem'}}>
                  <img className="card-img-top" src={product.image} alt={product.title} />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                    <h6 className="card-text">${product.price}</h6>
                  </div>
                </div>
        </div>
    )
}

export default ProductCard