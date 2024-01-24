import { ReactNode } from "react";

interface SplitViewTopProps {
  children: ReactNode;
}

interface SplitViewBottomProps {
  children: ReactNode;
}

interface SplitViewProps {
  children: ReactNode;
}

const SplitViewTop = ({ children }: SplitViewTopProps) => {
  return (
    <div className="relative flex-grow md:w-2/3">
      {children}
    </div>
  )
}

const SplitViewBottom = ({ children }: SplitViewBottomProps) => {
  return (
    <div className="relative flex flex-col md:h-full md:justify-between md:w-1/3 md:max-w-[30rem]">
      {children}
    </div>
  )
}

const SplitView = ({ children }: SplitViewProps) => {
  return (
    <div className="flex flex-col h-dvh max-h-dvh md:flex-row">
      {children}
    </div>
  )
}

export { SplitView, SplitViewTop, SplitViewBottom }