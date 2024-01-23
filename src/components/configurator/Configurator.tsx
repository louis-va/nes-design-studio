import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { useNESModelStore } from "@/store/store";
import Title from "../ui/Title"
import nesTopIcon from "@/assets/images/nes-top-icon.svg"
import nesBottomIcon from "@/assets/images/nes-bottom-icon.svg"
import nesStripeIcon from "@/assets/images/nes-stripe-icon.svg"
import nesTextIcon from "@/assets/images/nes-text-icon.svg"

const Configurator = () => {
  const setCamera = useNESModelStore((state) => state.setCamera)

  return (
    <section className="flex-grow">
      <Tabs>
        <TabList>
          <Tab onClick={()=>setCamera(3, 2.5, 5, 6)}><img src={nesTopIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab onClick={()=>setCamera(2, -2.5, 5, 4.5)}><img src={nesBottomIcon} className="w-12 h-12" role="presentation"  /></Tab>
          <Tab onClick={()=>setCamera(0, 4, 5, 5)}><img src={nesStripeIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab onClick={()=>setCamera(-2, 1, 4, 3)}><img src={nesTextIcon} className="w-12 h-12" role="presentation" /></Tab>
        </TabList>
        <TabPanel>
          <TopCoverConfig />
        </TabPanel>
        <TabPanel>
          <BottomCoverConfig />
        </TabPanel>
        <TabPanel>
          <ControlBarConfig />
        </TabPanel>
        <TabPanel>
          <LetteringConfig />
        </TabPanel>
      </Tabs>
    </section>
  )
}

const TopCoverConfig = () => {
  return (
    <>
      <Title as="h2" variant="h2">Top cover</Title>
    </>
  )
}

const BottomCoverConfig = () => {
  return (
    <>
      <Title as="h2" variant="h2">Bottom cover</Title>
    </>
  )
}

const ControlBarConfig = () => {
  return (
    <>
      <Title as="h2" variant="h2">Control bar</Title>
    </>
  )
}

const LetteringConfig = () => {
  return (
    <>
      <Title as="h2" variant="h2">Lettering</Title>
    </>
  )
}

export default Configurator