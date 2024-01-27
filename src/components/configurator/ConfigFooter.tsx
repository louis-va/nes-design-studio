import Typography from "../ui/Typography"
import Button from "../ui/Button"
import Icon from "../ui/Icon"
import { useStore } from "@/utils/store";

const ConfigFooter = () => {
  const cart = useStore((state) => state.cart)
  const total = (cart.basePrice + cart.topCoverPrice + cart.bottomCoverPrice + cart.controlBarPrice + cart.letteringPrice).toFixed(2)

  return (
    <footer className="flex justify-between items-center p-4 border-t border-t-border-color">
      <div>
        <Typography as="p" variant="small" className="text-black-muted uppercase">Total</Typography>
        <Typography as="p" variant="2xl" className="">{total}€</Typography>
      </div>
      <div>
        <Button 
          text="Continue"
          icon={<Icon name="arrow-r" className="w-4 h-4" />}
        />
      </div> 
    </footer>
  )
} 

export default ConfigFooter