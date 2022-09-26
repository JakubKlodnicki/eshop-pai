import './Cart.css';

const Cart = (props) => {
    const items = props.cart;
    const itemsToDisplay = [];
    const itemsCount = {};
    let totalAmount = 0;

    items.forEach(item => {
        totalAmount += item.promoPrice ? item.promoPrice : item.price;

        if (!itemsCount[item.id]) {
            itemsCount[item.id] = 1;
            itemsToDisplay.push(item);
        } else {
            itemsCount[item.id] += 1;
        }
    });

    return (
        <div className="cart">
            <h2>Koszyk</h2>

            {itemsToDisplay.map((item, index) => {
                return <p key={`${item.id}-${index}`}>{item.name} {itemsCount[item.id] ? `x${itemsCount[item.id]}` : null}</p>
            })}

            <p><b>SUMA:</b> {totalAmount}zł</p>
        </div>
    )
};

export default Cart;