import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "16rem", fontSize: "500%" }}>
        🛒 Your cart is empty!
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>🛒 Your Cart</h2>
      {cartItems.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid gray",
            borderRadius: "10px",
          }}
        >
          <img src={item.image} alt={item.title} className="product-image" />
          <h4>{item.title}</h4>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
