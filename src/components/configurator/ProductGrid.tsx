import { useState, useEffect } from "react";
import Typography from "../ui/Typography";
import Icon from "../ui/Icon";
import { useStore } from "@/utils/store";

interface ProductProps {
  name: string;
  category: string,
  image: string;
  price: number;
}

const Product = ({ name, category, image, price }: ProductProps) => {
  const [checked, setChecked] = useState(false)
  const products = useStore((state) => state.cart.products)
  const addProduct = useStore((state) => state.addProduct)
  const removeProduct = useStore((state) => state.removeProduct)

  // Check in the global state if the product is in the cart.
  // In a useEffect to prevent infinite rerenders.
  useEffect(() => {
    products?.forEach((product) => { if (product.name == name) setChecked(true) })
  }, [])

  const handleClick = () => {
    if (checked) {
      setChecked(false);
      removeProduct(name);
    } else {
      setChecked(true);
      addProduct(name, price)
    }
  }

  return (
    <button 
      role="checkbox"
      id={category}
      aria-checked={checked}
      onClick={handleClick}
      className={`flex flex-col justify-between p-4 border rounded ${checked?'border-red':'border-border-color'}`}
    >
      <img src={image} alt={name} className="mb-4" />
      <div className="text-left w-full">
        <Typography as="p" variant="base">{name}</Typography>
        <div className="flex justify-between w-full mt-2">
          <Typography as="p" variant="base" className="text-red leading-none">{price}€</Typography>
          <div className={`relative w-5 h-5 rounded-sm overflow-hidden border ${checked?'border-red bg-red':'border-border-color'}`}>
            <Icon 
              name="checkbox" 
              className={`absolute top-0 left-[1px] w-4 h-4 text-white ${checked?'opacity-100':'opacity-0'}`}
            />
          </div>
        </div>
      </div>
    </button>
  )
}

interface ProductGridProps {
  products: ProductProps[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map((product, index) => (
        <Product 
          key={index}
          name={product.name}
          category={product.category}
          image={product.image}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default ProductGrid