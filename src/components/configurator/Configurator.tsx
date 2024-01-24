import { ReactNode } from "react";
import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import { useNESModelStore } from "@/store/store";
import Title from "../ui/Title"
import Icon from "../ui/Icon";
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
  const setTopCoverColor = useNESModelStore((state) => state.setTopCoverColor)
  const topCoverColor = useNESModelStore((state) => state.topCoverColor)

  const colors = [
    { name: 'Light Gray', code: '#D2D1CD' },
    { name: 'Light Blue', code: '#A0EEFF' },
    { name: 'Light Purple', code: '#C8C7FF' },
    { name: 'Light Pink', code: '#FFCBE7' },
    { name: 'Light Orange', code: '#FFDD8B' },
    { name: 'Light Green', code: '#B3F87A' },
    { name: 'Gray', code: '#899297' },
    { name: 'Blue', code: '#00CFFF' },
    { name: 'Purple', code: '#B291FF' },
    { name: 'Pink', code: '#FF67AD' },
    { name: 'Orange', code: '#FFAB43' },
    { name: 'Green', code: '#00DE5A' },
  ]

  // Set default color
  if (topCoverColor.name==='') setTopCoverColor(colors[0].name, colors[0].code)

  return (
    <>
      <Title as="h2" variant="h2">Top cover <span className="text-black-muted font-normal"> – {topCoverColor.name}</span></Title>
      <ColorCheckBoxGrid>
        {colors.map((color, index) => (
          <ColorCheckbox 
            key={index}
            color={color.name} 
            colorCode={color.code} 
            checked={color.name==topCoverColor.name}
            onClick={()=>setTopCoverColor(color.name, color.code)}
          />
        ))}
      </ColorCheckBoxGrid>
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

interface ColorCheckBoxGridProps {
  children: ReactNode
}

const ColorCheckBoxGrid = ({ children }: ColorCheckBoxGridProps) => {
  return (
    <div className="grid grid-cols-6 gap-4 mt-4">
      {children}
    </div>
  )
}

interface ColorCheckboxProps {
  color: string;
  colorCode: string;
  checked?: boolean;
  onClick?: () => void;
}

const ColorCheckbox = ({ color, colorCode, checked=false, onClick }: ColorCheckboxProps) => {
  return (
    <button 
      aria-label={color}
      title={color}
      role="radio"
      aria-checked={checked}
      style={{background: colorCode}}
      className={`flex justify-center items-center aspect-square w-full h-full rounded-full border-[3px] ${checked?'border-black':'border-white/30'}`}
      onClick={onClick}
    >
      {(checked) ? (
          <Icon name="check" className="w-5 h-5 text-black bg-white/50 p-[1px] rounded-full" />
      ) : (<></>)}
    </button>
  )
}

export default Configurator