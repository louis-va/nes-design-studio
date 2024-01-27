import Typography from "../ui/Typography"
import Button from "../ui/Button"
import Icon from "../ui/Icon"

const ConfigFooter = () => {
  return (
    <footer className="flex justify-between items-center p-4 border-t border-t-border-color">
      <div>
        <Typography as="p" variant="small" className="text-white-muted uppercase">Total</Typography>
        <Typography as="p" variant="2xl" className="">280€</Typography>
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