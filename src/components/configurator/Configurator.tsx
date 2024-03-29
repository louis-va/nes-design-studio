import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { useStore } from "@/utils/store";
import Title from "../ui/Title";
import ColorCheckboxGrid from "./ColorCheckbox";
import nesTopIcon from "@/assets/images/nes-top-icon.svg"
import nesBottomIcon from "@/assets/images/nes-bottom-icon.svg"
import nesStripeIcon from "@/assets/images/nes-stripe-icon.svg"
import nesTextIcon from "@/assets/images/nes-text-icon.svg"

const Configurator = () => {
  const setCamera = useStore((state) => state.setCamera)

  return (
    <section className="flex-grow">
      <Tabs>
        <TabList>
          <Tab onClick={()=>setCamera(3, 2.5, 5, 6)}><img src={nesTopIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab onClick={()=>setCamera(2, -2.5, 5, 4.5)}><img src={nesBottomIcon} className="w-12 h-12" role="presentation"  /></Tab>
          <Tab onClick={()=>setCamera(0, 4, 5, 5)}><img src={nesStripeIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab onClick={()=>setCamera(-2.2, -1, 4, 3)}><img src={nesTextIcon} className="w-12 h-12" role="presentation" /></Tab>
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
  const setTopCoverColor = useStore((state) => state.setTopCoverColor)
  const topCoverColor = useStore((state) => state.topCoverColor)

  const colors = ["light-gray", "light-blue", "light-purple", "light-pink", "light-orange", "light-green", "light-polished-gray", "light-polished-blue", "light-polished-purple", "light-polished-pink", "light-polished-orange", "light-polished-green", "silver", "gold", "rose-gold"]

  return (
    <>
      <Title as="h2" variant="h2">Top cover <span className="text-black-muted font-normal"> – {topCoverColor.name}</span></Title>
      <ColorCheckboxGrid colors={colors} elementColor={topCoverColor} setElementColor={setTopCoverColor} />
    </>
  )
}

const BottomCoverConfig = () => {
  const setBottomCoverColor = useStore((state) => state.setBottomCoverColor)
  const bottomCoverColor = useStore((state) => state.bottomCoverColor)

  const colors = ["gray", "blue", "purple", "pink", "orange", "green", "polished-black", "polished-blue", "polished-purple", "polished-pink", "polished-orange", "polished-green", "titanium", "copper"]

  return (
    <>
      <Title as="h2" variant="h2">Bottom cover <span className="text-black-muted font-normal"> – {bottomCoverColor.name}</span></Title>
      <ColorCheckboxGrid colors={colors} elementColor={bottomCoverColor} setElementColor={setBottomCoverColor} />
    </>
  )
}

const ControlBarConfig = () => {
  const setControlBarColor = useStore((state) => state.setControlBarColor)
  const controlBarColor = useStore((state) => state.controlBarColor)

  const colors = ["gray", "blue", "purple", "pink", "orange", "green", "polished-black", "polished-blue", "polished-purple", "polished-pink", "polished-orange", "polished-green"]

  return (
    <>
      <Title as="h2" variant="h2">Control bar <span className="text-black-muted font-normal"> – {controlBarColor.name}</span></Title>
      <ColorCheckboxGrid colors={colors} elementColor={controlBarColor} setElementColor={setControlBarColor} />
    </>
  )
}

const LetteringConfig = () => {
  const setLetteringColor = useStore((state) => state.setLetteringColor)
  const letteringColor = useStore((state) => state.letteringColor)

  const colors = ["gray", "nintendo-red", "blue", "purple", "pink", "orange", "green", "titanium", "copper", "mario-metal"]

  return (
    <>
      <Title as="h2" variant="h2">Lettering <span className="text-black-muted font-normal"> – {letteringColor.name}</span></Title>
      <ColorCheckboxGrid colors={colors} elementColor={letteringColor} setElementColor={setLetteringColor} />
    </>
  )
}

export default Configurator