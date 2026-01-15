import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "../src/components/ui/Modal";
import Button from "../src/components/ui/Button";
import Input from "../src/components/ui/Input";
import { formInputsList, productList } from "./data";
import { useState } from "react";

function App() {
  const renderProductList = productList.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  // -----------
  const productListInput = formInputsList.map((input) => (
    <div className="grid grid-cols-1 space-y-2 my-4">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        className="border-2 border-indigo-400 rounded-sm shadow-md focus:outline-none foucs:ring-2 focus:ring-indigo-500"
        type={input.type}
        name={input.name}
      />
    </div>
  ));
  // ======================================
  const [isOpen, setIsOpen] = useState(true);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  // ======================================
  return (
    <>
      <div className="container mx-auto px-15">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={close}>
          {productListInput}
          <div className="flex space-x-3">
            <Button className="bg-indigo-700">submit</Button>
            <Button className="bg-red-700">close</Button>
          </div>
        </Modal>
      </div>
    </>
  );
}
export default App;
