

export default function ProductList({products}){
  return (
    <div>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Brand: {product.brand.name}</p>
            <p>Manufacturer: {product.manufacturer}</p>
            <p>Price: {product.price}</p>
            <img src={product.image} alt={product.name} />
            <p>Description: {product.descriptionRu}</p>
          </div>
        ))
      ) : (
        <p>Нет доступных продуктов для выбранных брендов и производителей в заданном диапазоне цен.</p>
      )}
    </div>
  );
};