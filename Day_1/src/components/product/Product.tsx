
import { cutText } from "../../utils/functions";
import Image from "../image/Image";
import { IProduct } from "../../interfaces";


interface IProps{
    product : IProduct;
}

const Product = ({product}:IProps) => { 
    console.log(product);
    return (
      <div className="border p-3 rounded-lg flex flex-col m-3">
        <Image
        imgUrl={product.images[0]}
        alt="Car"
        className="rounded-md mb-2 h-96 w-96"
        />
        <h2>{product.title}</h2>

        <p className="text-xs">
          {cutText(cutText(product.description))}
        </p>

        <div className="flex items-center justify-between">
          <p>&{product.price}</p>
          <p>{product.rating}</p>
        </div>

      </div>
    );
};

export default Product;
