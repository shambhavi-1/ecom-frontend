import { useCart } from "../context/CartContext";

const Wishlist = () => {
  const { wishlistItems } = useCart();

  if (wishlistItems.length === 0) {
    return (
      <div style={{ textAlign: "center", padding: "12rem", fontSize: "500%" }}>
        ❤️ Your wishlist is waiting to be filled!
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>❤️ Your Wishlist</h2>
      {wishlistItems.map((item, index) => (
        <div
          key={index}
          style={{
            margin: "1rem",
            padding: "1rem",
            border: "1px solid pink",
            borderRadius: "10px",
          }}
        >
          <img src={item.image} alt={item.title} className="product-image" />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;
