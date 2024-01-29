import controllerImage from "@/assets/images/accessory-controller.webp"
import zapperImage from "@/assets/images/accessory-zapper.webp"
import nesAdvImage from "@/assets/images/accessory-nes-advantage.webp"
import robImage from "@/assets/images/accessory-rob.webp"
import marioImage from "@/assets/images/game-mario-bros.webp"
import zeldaImage from "@/assets/images/game-zelda.webp"
import metroidImage from "@/assets/images/game-metroid.webp"
import donkeyKongImage from "@/assets/images/game-donkey-kong.webp"
import duckHuntImage from "@/assets/images/game-duck-hunt.webp"
import kidIcarusImage from "@/assets/images/game-kid-icarus.webp"
import excitebikeImage from "@/assets/images/game-excitebike.webp"
import pinballImage from "@/assets/images/game-pinball.webp"
import castlevaniaImage from "@/assets/images/game-castlevania.webp"
import contraImage from "@/assets/images/game-contra.webp"

interface product {
  name: string;
  category: string;
  image: string;
  price: number;
}

export const ACCESSORIES: product[] = [
  {
    name: "Extra controller",
    category: "accessory",
    image: controllerImage,
    price: 44
  },
  {
    name: "Zapper",
    category: "accessory",
    image: zapperImage,
    price: 59
  },
  {
    name: "NES Advantage",
    category: "accessory",
    image: nesAdvImage,
    price: 74
  },
  {
    name: "R.O.B.",
    category: "accessory",
    image: robImage,
    price: 99
  }
]

export const GAMES: product[] = [
  {
    name: "Super Mario Bros",
    category: "game",
    image: marioImage,
    price: 49
  },
  {
    name: "The Legend of Zelda",
    category: "game",
    image: zeldaImage,
    price: 49
  },
  {
    name: "Metroid",
    category: "game",
    image: metroidImage,
    price: 49
  },
  {
    name: "Donkey Kong",
    category: "game",
    image: donkeyKongImage,
    price: 49
  },
  {
    name: "Duck Hunt",
    category: "game",
    image: duckHuntImage,
    price: 49
  },
  {
    name: "Kid Icarus",
    category: "game",
    image: kidIcarusImage,
    price: 49
  },
  {
    name: "Excitebike",
    category: "game",
    image: excitebikeImage,
    price: 49
  },
  {
    name: "Pinball",
    category: "game",
    image: pinballImage,
    price: 49
  },
  {
    name: "Castlevania",
    category: "game",
    image: castlevaniaImage,
    price: 49
  },
  {
    name: "Contra",
    category: "game",
    image: contraImage,
    price: 49
  }
]