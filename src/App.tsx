import ProductCard from "./components/ProductCard/ProductCard";
import {productList} from "./data";
function App() {
  const renderProductList = productList.map(product=><ProductCard key={product.id} product={product}/>)
  return (
    <>
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {renderProductList}
        </div>
      </div>
    </>
  );
}
export default App;
