import Typography from "../ui/Typography"
import Button from "../ui/Button"
import Icon from "../ui/Icon"
import { useStore } from "@/utils/store";

interface ConfigFooterProps {
  btnText: string;
  btnAction: ()=>void;
  prevBtnAction?: ()=>void;
}

const ConfigFooter = ({ btnText, btnAction, prevBtnAction }: ConfigFooterProps) => {
  const cart = useStore((state) => state.cart)
  const totalNes = cart.basePrice + cart.topCoverPrice + cart.bottomCoverPrice + cart.controlBarPrice + cart.letteringPrice
  const totalProducts = Number((cart.products??[]).reduce((acc, product)=>acc+product.price, 0))
  const total = (totalNes + totalProducts).toFixed(0)

  return (
    <footer className="flex justify-between items-center p-4 border-t border-t-border-color">
      <div>
        <Typography as="p" variant="small" className="text-black-muted uppercase">Total</Typography>
        <Typography as="p" variant="2xl" className="">{total}€</Typography>
      </div>
      <div className="flex gap-2">
        {(prevBtnAction?(
          <Button 
            variant="secondary"
            icon={<Icon name="arrow-r" className="w-4 h-4 rotate-180" />}
            onClick={prevBtnAction}
          />
        ):(<></>))}
        <Button 
          text={btnText}
          icon={<Icon name="arrow-r" className="w-4 h-4" />}
          onClick={btnAction}
        />
      </div>
    </footer>
  )
} 

export default ConfigFooter