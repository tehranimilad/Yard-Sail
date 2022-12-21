
export default function ShowProduct(props) {

    return(
        <div className="card">
        <div className="card-image">
            <img src={props.info.imageUrl} alt={props.info.name} className='product-image' />
            <span className="card-title">{props.info.name}</span>
        </div>

        <div className="card-content">
            {props.isLoggedIn && <p>Name: {props.info.name}</p>}
            {props.isLoggedIn && <p>Price: {props.info.price}</p>}
        </div>
    </div>
    )
}


