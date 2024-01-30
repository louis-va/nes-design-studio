import { useNavigate } from "react-router-dom"
import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import ModelView from "@/components/configurator/ModelView"
import ConfigSteps from "@/components/configurator/ConfigSteps"
import ConfigFooter from "@/components/configurator/ConfigFooter"
import Checkout from "@/components/configurator/Checkout"

const CheckoutPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <ModelView />
        </SplitViewTop>
        <SplitViewBottom>
          <Checkout />
          <ConfigSteps step={3} />
          <ConfigFooter 
            btnText="Pay" 
            btnAction={()=>navigate('/confirmation')} 
            prevBtnAction={()=>navigate('/accessories')} 
          />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default CheckoutPage