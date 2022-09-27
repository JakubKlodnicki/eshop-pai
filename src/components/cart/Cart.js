import './Cart.css';
import deleteicon from './delete.png';

const Cart = (props) => {
    const items = props.cart;
    const itemsToDisplay = [];
    const itemsCount = {};
    let totalAmount = 0;
    let safemoney = 0;
    let correctpromocode = 0;

    items.forEach(item => {
        totalAmount += item.promoPrice ? item.promoPrice : item.price;
        safemoney += item.price - item.promoPrice;

        if (!itemsCount[item.id]) {
            itemsCount[item.id] = 1;
            itemsToDisplay.push(item);
        } else {
            itemsCount[item.id] += 1;
        }
    });

    if (correctpromocode === 1) {
        alert('dziala2');
        totalAmount = totalAmount * 0.70
    }

    return (
        <div className="cart">
            <h2>Koszyk</h2>

            {itemsToDisplay.map((item, index) => {
                return <p key={`${item.id}-${index}`}>{item.name} {itemsCount[item.id] ? `x${itemsCount[item.id]}` : null} <img class="deleteicon" src={deleteicon} onClick={() => props.deleteOneItem(item)}></img></p>
            })}
            <p><b>SUMA:</b> {totalAmount}zł</p>
            <p><b>ZAOSZCZĘDZONE PIENIĄDZE:</b> {safemoney}zł</p>
            <button className="clearcart"
                            onClick={() => props.clearCart()}>Wyczyść koszyk</button>
        </div>
    )
};

export default Cart;