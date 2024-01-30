import { useNavigate } from "react-router-dom"
import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import ModelView from "@/components/configurator/ModelView"
import ConfigSteps from "@/components/configurator/ConfigSteps"
import ConfigFooter from "@/components/configurator/ConfigFooter"
import Confirmation from "@/components/configurator/Confirmation"

const ConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <ModelView />
        </SplitViewTop>
        <SplitViewBottom>
          <Confirmation />
          <ConfigSteps step={4} />
          <ConfigFooter 
            btnText="Home"
            btnAction={()=>navigate('/')} 
          />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default ConfirmationPage