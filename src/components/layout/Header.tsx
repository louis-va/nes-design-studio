import nintendoLogo from "@/assets/images/logo-nintendo.svg"
import ndsLogo from "@/assets/images/logo-nds.svg"

const Header = () => {
  return (
    <header className="absolute flex justify-between items-center w-full p-4">
      <div>
        <img 
          src={nintendoLogo} 
          className="w-16"
          alt="Nintendo logo" 
        />
      </div>
      <div>
        <img 
          src={ndsLogo} 
          className="w-36"
          alt="Nes Design Studio logo" 
        />
      </div>
    </header>
  )
}

export default Header