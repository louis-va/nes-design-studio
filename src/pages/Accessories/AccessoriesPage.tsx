import { useNavigate } from "react-router-dom"
import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import ModelView from "@/components/configurator/ModelView"
import ConfiguratorAccessories from "@/components/configurator/ConfiguratorAccessories"
import ConfigSteps from "@/components/configurator/ConfigSteps"
import ConfigFooter from "@/components/configurator/ConfigFooter"

const Accessories = () => {
  const navigate = useNavigate();

  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <ModelView />
        </SplitViewTop>
        <SplitViewBottom>
          <ConfiguratorAccessories />
          <ConfigSteps step={2} />
          <ConfigFooter 
            btnText="Continue" 
            btnAction={()=>navigate('/confirmation')} 
            prevBtnAction={()=>navigate('/')} 
          />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default Accessories