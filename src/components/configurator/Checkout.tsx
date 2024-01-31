import { useStore } from "@/utils/store";
import Title from "../ui/Title"
import Typography from "../ui/Typography";

const Checkout = () => {
  const cart = useStore((state) => state.cart)
  
  const topCoverColor = useStore((state) => state.topCoverColor)
  const bottomCoverColor = useStore((state) => state.bottomCoverColor)
  const controlBarColor = useStore((state) => state.controlBarColor)
  const letteringColor = useStore((state) => state.letteringColor)
  
  const totalNes = cart.basePrice + cart.topCoverPrice + cart.bottomCoverPrice + cart.controlBarPrice + cart.letteringPrice
  const totalProducts = Number((cart.products??[]).reduce((acc, product)=>acc+product.price, 0))
  const products = cart.products

  return(
    <section>
      <div className="p-4 w-full py-3 border-b border-b-border-color">
        <Title as="h1" variant="h2">Summary</Title>
      </div>

      <div className="p-4 h-64 overflow-y-scroll md:h-[calc(100dvh-10.2rem)]">
        <div>
          <div className="flex justify-between">
            <Typography as="p" variant="base">NES</Typography>
            <Typography as="p" variant="base">{totalNes}€</Typography>
          </div>
          <div className="text-black-muted border-t border-t-border-color mt-1 pt-1">
            <div className="flex justify-between">
              <Typography as="p" variant="base">NES</Typography>
              <Typography as="p" variant="base">{cart.basePrice}€</Typography>
            </div>
            <div className="flex justify-between">
              <Typography as="p" variant="base">Top cover ({topCoverColor.name})</Typography>
              <Typography as="p" variant="base">+ {cart.topCoverPrice}€</Typography>
            </div>
            <div className="flex justify-between">
              <Typography as="p" variant="base">Bottom cover ({bottomCoverColor.name})</Typography>
              <Typography as="p" variant="base">+ {cart.bottomCoverPrice}€</Typography>
            </div>
            <div className="flex justify-between">
              <Typography as="p" variant="base">Control bar ({controlBarColor.name})</Typography>
              <Typography as="p" variant="base">+ {cart.controlBarPrice}€</Typography>
            </div>
            <div className="flex justify-between">
              <Typography as="p" variant="base">Lettering ({letteringColor.name})</Typography>
              <Typography as="p" variant="base">+ {cart.letteringPrice}€</Typography>
            </div>
          </div>
        </div>

        {(products && products.length>0)?(
        <div className="mt-4">
          <div className="flex justify-between">
            <Typography as="p" variant="base">Accessories</Typography>
            <Typography as="p" variant="base">{totalProducts}€</Typography>
          </div>
          <div className="text-black-muted border-t border-t-border-color mt-1 pt-1">
            {products.map((product, index)=>(
              <div className="flex justify-between" key={index}>
                <Typography as="p" variant="base">{product.name}</Typography>
                <Typography as="p" variant="base">{product.price}€</Typography>
              </div>
            ))}
          </div>
        </div>
        ):(<></>)}
      </div>
    </section>
  )
}

export default Checkout