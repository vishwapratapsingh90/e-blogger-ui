import { StaticImageData } from "next/image";
import photo1 from "./photos/1.jpg";

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Taj Mahal",
    src: photo1,
    photographer: "Photo by sanin sn on Unsplash",
    location: "India",
  },
];

export default wondersImages;
