import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import Title from "../ui/Title"
import nesTopIcon from "@/assets/images/nes-top-icon.svg"
import nesBottomIcon from "@/assets/images/nes-bottom-icon.svg"
import nesStripeIcon from "@/assets/images/nes-stripe-icon.svg"
import nesTextIcon from "@/assets/images/nes-text-icon.svg"

const Configurator = () => {
  return (
    <section className="bg-white">
      <Tabs>
        <TabList>
          <Tab><img src={nesTopIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab><img src={nesBottomIcon} className="w-12 h-12" role="presentation"  /></Tab>
          <Tab><img src={nesStripeIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab><img src={nesTextIcon} className="w-12 h-12" role="presentation" /></Tab>
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