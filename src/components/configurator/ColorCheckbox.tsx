import { ReactNode } from "react";
import { Color } from "@/utils/types";
import Icon from "../ui/Icon";
import Title from "../ui/Title";
import { COLORS_CATEGORIES } from "@/utils/colors";

function containsId(colorList: Color[], idList: string[]): boolean {
  for (const color of colorList) {
    if (idList.includes(color.id)) {
      return true;
    }
  }
  return false;
}

interface ColorCheckboxGridProps {
  colors: string[];
  elementColor: Color;
  setElementColor: (color: Color) => void;
}

const ColorCheckboxGrid = ({ colors, elementColor, setElementColor }: ColorCheckboxGridProps) => {
  return (
    <>
      {COLORS_CATEGORIES.map((category) => {
        if (containsId(category.colors, colors)) {
          return (
            <ColorCheckBoxRow key={category.title} title={category.title} price={category.price}>
              {category.colors.map((color, index) => {
                if (containsId([color], colors)) {
                  return (
                    <ColorCheckbox 
                      key={index}
                      name={color.name} 
                      color={color.code} 
                      finish={color.finish} 
                      checked={color.name === elementColor.name}
                      onClick={() => setElementColor({ id: color.id, name: color.name, code: color.code, finish: color.finish })}
                    />
                  );
                }
                return null;
              })}
            </ColorCheckBoxRow>
          );
        }
        return null;
      })}
    </>
  );
}

interface ColorCheckBoxRowProps {
  title: string;
  price: number;
  children: ReactNode
}

const ColorCheckBoxRow = ({ title, price, children }: ColorCheckBoxRowProps) => {
  return (
    <>
      <Title as="h3" variant="h3" className="mt-6">
        {title}
        {price!=0?(<span className="text-red text-base ml-2">(+{price}€)</span>):(<></>)}
      </Title>
      <div className="grid grid-cols-6 gap-3 mt-4 md:grid-cols-4 lg:grid-cols-6">
        {children}
      </div>
    </>
  )
}

interface ColorCheckboxProps {
  name: string;
  color: string;
  finish: string;
  checked?: boolean;
  onClick?: () => void;
}

const ColorCheckbox = ({ name, color, finish, checked=false, onClick }: ColorCheckboxProps) => {
  return (
    <button 
      aria-label={name}
      title={name}
      role="radio"
      aria-checked={checked}
      style={{background: color}}
      className={`relative overflow-hidden flex justify-center items-center aspect-square w-full h-full rounded-full`}
      onClick={onClick}
    >
      <div className="absolute w-full h-full rounded-full z-30 border-[3px] border-white/30"></div>

      {(finish=="metallic") ? (
        <div 
          style={{background: `conic-gradient(from 180deg at 50% 50%, #00000033 0deg, #FFFFFF33 360deg)`}} 
          className="absolute w-full h-full z-10"
        ></div>
      ) : (<></>)}

      {(finish=="polished") ? (
        <div 
          style={{background: `linear-gradient(45deg, #FFFFFF00, #FFFFFFAA)`}} 
          className="absolute w-full h-full z-10"
        ></div>
      ) : (<></>)}
      
      {(checked) ? (
          <Icon name="check" className="w-5 h-5 text-black/80 bg-white/60 rounded-full z-20" />
      ) : (<></>)}
    </button>
  )
}

export default ColorCheckboxGrid