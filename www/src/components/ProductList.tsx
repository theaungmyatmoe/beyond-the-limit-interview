import ProductCard, { IProduct } from "./ProductCard";



export default function ProductList({ products }: { products: IProduct[] }) {
  return (
    <>
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </>
  );
}
