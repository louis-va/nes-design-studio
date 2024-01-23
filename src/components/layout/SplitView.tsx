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
    <div className="relative flex-grow">
      {children}
    </div>
  )
}

const SplitViewBottom = ({ children }: SplitViewBottomProps) => {
  return (
    <div className="relative">
      {children}
    </div>
  )
}

const SplitView = ({ children }: SplitViewProps) => {
  return (
    <div className="flex flex-col h-dvh">
      {children}
    </div>
  )
}

export { SplitView, SplitViewTop, SplitViewBottom }