import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import ModelView from "@/components/configurator/ModelView"
import Configurator from "@/components/configurator/Configurator"
import ConfigFooter from "@/components/configurator/ConfigFooter"

const Configure = () => {
  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <ModelView />
        </SplitViewTop>
        <SplitViewBottom>
          <Configurator />
          <ConfigFooter />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default Configure