const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <span className="product-category">
          {product.category}
        </span>

        <h3>{product.name}</h3>

        <p className="description">
          {product.description}
        </p>

        <div className="product-bottom">
          <span className="price">
            ${product.price}
          </span>

          <button>View</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;