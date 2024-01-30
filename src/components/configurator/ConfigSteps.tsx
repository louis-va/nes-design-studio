import Typography from "../ui/Typography"

interface ConfigHeaderProps {
  step: number;
}

const ConfigSteps = ({ step }: ConfigHeaderProps) => {
  const steps = ["Color selection", "Accessories", "Payment", "Confirmation"]

  return (
    <div className="flex w-full px-4 py-2 border-t border-t-border-color">
      {steps.map((stepTitle, index) => (
        <div className={`flex items-center ${index+1==step?'grow':''}`} key={index}>
          <div className={'flex justify-center items-center bg-black/10 text-black-muted text-xs h-4 w-4 rounded-full'}>{index+1}</div>
          
          {(index+1==step) ? (
            <Typography as="p" variant="small" className="text-black-muted ml-2">{stepTitle}</Typography>
          ) : (<></>)}

          {(index+1!=steps.length) ? (
            <div className={`${index+1==step?'grow':'w-4'} grow border-b border-border-color border-dashed mx-2 mt-0.5`}></div>
          ) : (<></>)}
        </div>
      ))}
    </div>
  )
} 

export default ConfigSteps