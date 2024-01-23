import nintendoLogo from "@/assets/images/logo-nintendo.svg"
import ndsLogo from "@/assets/images/logo-nds.svg"

const Header = () => {
  return (
    <header className="absolute z-50 flex justify-between items-center bg-[#F6F6F6]/40 backdrop-blur-lg w-full px-4 py-3">
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