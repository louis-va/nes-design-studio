import Title from "../ui/Title"
import Typography from "../ui/Typography";

const Confirmation = () => {
  return(
    <section>
      <div className="p-4 w-full py-3 border-b border-b-border-color">
        <Title as="h1" variant="h2">Confirmation</Title>
      </div>

      <div className="p-4 h-64 overflow-y-scroll md:h-[calc(100dvh-10rem)]">
          <div className="flex flex-col justify-center h-full w-full items-center">
            <Typography as="p" variant="large">Thanks for your purchase!</Typography>
            <Typography as="p" variant="base" className="text-black-muted">Enjoy playing on your NES.</Typography>
          </div>
      </div>
    </section>
  )
}

export default Confirmation