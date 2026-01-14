import Button from "../ui/Button";

interface Iprops {
  imgUrl: string;
  name: string;
  descreption: string;
  price: string;
  color?: [];
  category: string;
}
const ProductCard = ({
  name,
  imgUrl,
  descreption,
  price,
  category,
}: Iprops) => {
  return (
    <div className="border-2 border-gray-300 rounded-3xl">
      <img className="rounded-t-3xl" src={imgUrl} alt={name} />
      <div className="p-3">
        <h3 className="text-2xl font-medium">{name}</h3>
        <p className="text-gray-500">{descreption}</p>
        <div className="flex items-center justify-between my-2">
          <h4 className="font-medium">${price} </h4>
          <img className="h-10 w-10 rounded-full" src={category} alt={name} />
        </div>
        <div className="flex space-x-1">
            
            <span className="w-5 h-5 rounded-full"></span>
        </div>
        <div className="flex space-x-1 my-2">
          <Button children=<h4>Edit</h4> className="bg-green-600" />
          <Button children=<h4>Delete</h4> className="bg-red-600" />
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
