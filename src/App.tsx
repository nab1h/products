import ProductCard from "./components/ProductCard/ProductCard";
import Modal from "../src/components/ui/Modal";
import Button from "../src/components/ui/Button";
import Input from "../src/components/ui/Input";
import CircleColor from "../src/components/ui/CircleColor";
import { formInputsList, colors, productList, type IProduct } from "./data";
import { useState, type ChangeEvent } from "react";
import type { FormEvent } from "react";
import { v4 as uuid } from "uuid";


function App() {
  const [products,setProducts] = useState<IProduct[]>(productList);
  const renderProductList = products.map((product) => (
    <ProductCard key={product.id} product={product} />
  ));
  const [product, setProduct] = useState<IProduct>({
    title: "",
    description: "",
    price: "",
    imageURL: "",
  });

  const onchangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };
  const onsubmitForm = (e: FormEvent<HTMLFormElement>):void => {
    e.preventDefault();

    setProducts(prev=>[ ...prev,{ ...product, id: uuid()}]);
    setProduct({
      title: "",
      description: "",
      price: "",
      imageURL: "",
    });
    setTempColor(['']);
  };
  // -----------
  const productListInput = formInputsList.map((input) => (
    <div className="grid grid-cols-1 space-y-2 my-4">
      <label htmlFor={input.id}>{input.label}</label>
      <Input
        className="border-2 border-indigo-400 rounded-sm shadow-md focus:outline-none foucs:ring-2 focus:ring-indigo-500"
        type={input.type}
        name={input.name}
        value={product[input.name as keyof IProduct]}
        onChange={onchangeHandler}
      />
    </div>
  ));

  const renderProductColor = colors.map((color) => (
    <CircleColor
      key={color}
      color={color}
      onClick={() => {
        if (tempColor.includes(color)) {
          setTempColor((prev) => prev.filter((i) => i !== color));
          return;
        }
        setTempColor((prev) => [...prev, color]);
      }}
    />
  ));
  // ======================================

  // ======================================
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);

  const close = () => setIsOpen(false);

  const [tempColor, setTempColor] = useState<string[]>([]);
  console.log(tempColor);
  // ======================================
  return (
    <>
      <div className="container mx-auto px-15">
        <Button className="bg-indigo-700 my-2" onClick={open}>
          Add Product
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {renderProductList}
        </div>
        <Modal isOpen={isOpen} close={close}>
          <form onSubmit={onsubmitForm}>
            {productListInput}
            <div className="flex mb-5 space-x-1">{renderProductColor}</div>
            <div className="flex mb-5 space-x-1">
              {tempColor.map((color) => (
                <span key={color} style={{ backgroundColor: color }}>
                  {color}
                </span>
              ))}
            </div>

            <div className="flex space-x-3">
              <Button type="submit" className="bg-indigo-700">
                submit
              </Button>
              <Button className="bg-red-700" onClick={close}>
                close
              </Button>
            </div>
          </form>
        </Modal>
      </div>
    </>
  );
}
export default App;
