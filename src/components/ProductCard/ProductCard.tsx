import Button from "../ui/Button";
import { txtSlicer } from "../../utils/functions";
export interface IProduct {
  id?: string;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors?: string[];
  category?: {
    name?: string;
    imageURL?: string;
  };
}

interface Iprops {
  product: IProduct;
}
const ProductCard = ({ product }: Iprops) => {

  return (
    <div className="border-2 border-gray-300 rounded-3xl">
      <img
        className="rounded-t-3xl"
        src={product.imageURL}
        alt={product.title}
      />
      <div className="p-3">
        <h3 className="text-2xl font-medium">{product.title}</h3>
        <p className="text-gray-500">{txtSlicer(product.description,50)}</p>
        <div className="flex items-center justify-between my-2">
          <h4 className="font-medium">${product.price} </h4>
          <img
            className="h-10 w-10 rounded-full"
            src={product.imageURL}
            alt={product.title}
          />
        </div>
        <div className="flex space-x-1">
          <span className="w-5 h-5 rounded-full"></span>
        </div>
        <div className="flex space-x-1 my-2">
          <Button className="bg-green-600">
            <h4>Edit</h4>
          </Button>

          <Button className="bg-red-600">
            <h4>Delete</h4>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
