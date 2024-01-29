import { Tabs, TabList, Tab, TabPanel } from "@/components/ui/Tabs"
import Title from "../ui/Title";
import ProductGrid from "./ProductGrid";
import controllerIcon from "@/assets/images/controller-icon.svg"
import gameIcon from "@/assets/images/game-icon.svg"
import { ACCESSORIES, GAMES } from "@/utils/products";

const ConfiguratorAccessories = () => {
  return (
    <section className="flex-grow">
      <Tabs>
        <TabList>
          <Tab><img src={controllerIcon} className="w-12 h-12" role="presentation" /></Tab>
          <Tab><img src={gameIcon} className="w-12 h-12" role="presentation" /></Tab>
        </TabList>
        <TabPanel>
          <AccessoriesConfig />
        </TabPanel>
        <TabPanel>
          <GamesConfig />
        </TabPanel>
      </Tabs>
    </section>
  )
}

const AccessoriesConfig = () => {
  const accessories = ACCESSORIES;
  return (
    <>
      <Title as="h2" variant="h2" className="mb-4">Accessories</Title>
      <ProductGrid products={accessories} />
    </>
  )
}

const GamesConfig = () => {
  const accessories = GAMES;
  return (
    <>
      <Title as="h2" variant="h2" className="mb-4">Games</Title>
      <ProductGrid products={accessories} />
    </>
  )
}

export default ConfiguratorAccessories