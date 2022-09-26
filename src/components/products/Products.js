import './Products.css';

const Products = (props) => {
    const products = props.products;

    const addToCart = (product) => {
        props.setCart(product);
    };

    return (
        <div className="products">
            {products.map((product) => {
                return <div key={product.id}
                            className="product">
                    <div className='cart-img'>
                    <img src={product.image}></img>
                    <div>
                    <h4>{product.name}</h4>
                    <p>{product.description}</p>
                    {product.promoPrice 
                        ? <p><span>{product.price}zł</span> <b>{product.promoPrice}zł</b></p>
                        : <p>{product.price}zł</p>}
                    </div>
                    </div>
                    <button className="add-to-cart"
                            onClick={() => addToCart(product)}>Dodaj do koszyka</button>
                </div>
            })}
        </div>
    )
};

export default Products;