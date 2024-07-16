import Feels from "../components/Icons/Feels";
import Wind from "../components/Icons/Wind";
import Humidity from "../components/Icons/Humidity";
import Visibility from "../components/Icons/Visibility";
import Pressure from "../components/Icons/Pressure";
import Pop from "../components/Icons/Pop";

export interface TileProps {
  icon: 'wind' | 'feels' | 'humidity' | 'visibility' | 'pressure' | 'pop';
  title: string;
  info: string | JSX.Element;
  description: string;
}

export const icons = {
  wind: Wind,
  feels: Feels,
  humidity: Humidity,
  visibility: Visibility,
  pressure: Pressure,
  pop: Pop,
};
