import { SplitView, SplitViewTop, SplitViewBottom } from "@/components/layout/SplitView"
import Header from "@/components/layout/Header"
import Model3d from "@/components/configurator/Model3d"
import Customizer from "@/components/configurator/Customizer"

const Configure = () => {
  return (
    <>
      <SplitView>
        <SplitViewTop>
          <Header />
          <Model3d />
        </SplitViewTop>
        <SplitViewBottom>
          <Customizer />
        </SplitViewBottom>
      </SplitView>
    </>
  )
}

export default Configure