import { useNavigate } from "react-router-dom"
import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import ModelView from "@/components/configurator/ModelView"
import Configurator from "@/components/configurator/Configurator"
import ConfigSteps from "@/components/configurator/ConfigSteps"
import ConfigFooter from "@/components/configurator/ConfigFooter"

const Configure = () => {
  const navigate = useNavigate();

  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <ModelView />
        </SplitViewTop>
        <SplitViewBottom>
          <Configurator />
          <ConfigSteps step={1} />
          <ConfigFooter btnText="Continue" btnAction={()=>navigate('/accessories')} />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default Configure