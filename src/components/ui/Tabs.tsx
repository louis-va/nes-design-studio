import React, { useState } from "react"

// Tab
interface TabProps extends React.ComponentProps<"button"> {
  active?: boolean;
  children: React.ReactNode;
}

const Tab = ({ active, children, ...props }: TabProps) => {
  return (
    <button 
      className={`relative -bottom-[1px] -mt-[1px] border-b-2 px-2 py-3 transition-all duration-150 ${(active?'border-b-red opacity-100':'border-b-transparent opacity-50')}`} 
      type="button" 
      {...props}
    >
      {children}
    </button>
  )
}


// TabList
interface TabListProps {
  children: React.ReactNode;
}

const TabList = ({ children }: TabListProps) => {
  return (
    <header className="flex gap-4 px-4 border-b border-b-border-color">
      {children}
    </header>
  )
}


// TabPanel
interface TabPanelProps extends React.ComponentProps<"div">{
  children: React.ReactNode;
}

const TabPanel = ({ children, ...props }: TabPanelProps) => {
  return (
    <div className={`flex-grow p-4 overflow-y-auto ${props.className} `}>
      {children}
    </div>
  )
}


// Tabs
interface TabsProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: TabsProps) => {
  const [selected, setSelected] = useState(0)

  // Retrieve Tabs
  const childrenArray = React.Children.toArray(children);
  const tabLists = childrenArray.filter(child => React.isValidElement(child) && child.type === TabList) as React.ReactElement[]
  if(!Array.isArray(tabLists) || !tabLists[0] || !tabLists[0].props || !tabLists[0].props.children) return null;
  const tabs = tabLists[0].props.children

  // Retrieve Panels
  const panels = childrenArray.filter(child => React.isValidElement(child) && child.type === TabPanel) as React.ReactElement[]

  // Check if tab is selected
  tabs.forEach((tab: React.ReactElement, index: number) => {
    if (tab.props.active) setSelected(index)
  })

  return (
    <>
      <TabList>
        {tabs.map((tab: React.ReactElement, index: number) => (
          <Tab 
            key={index}
            active={index===selected} 
            onClick={()=>{
              setSelected(index);
              if (tab.props.onClick)
                tab.props.onClick();
            }}
          >
            {tab.props.children}
          </Tab>
        ))}
      </TabList>
      {panels.map((panel: React.ReactElement, index: number) => (
        <TabPanel 
          key={index}
          className={index===selected?'':'hidden'}
        >
          {panel.props.children}
        </TabPanel>
      ))}
    </>
  )
}

export { Tabs, TabList, Tab, TabPanel }