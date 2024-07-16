import { icons, TileProps } from '../props/TileProps';

const Tile = ({ icon, title, info, description }: TileProps) => {
  const Icon = icons[icon!];

  return (
    <article className="w-[140px] h-[130px] text-zinc-700 bg-white/20 backdrop-blur-lg rounded drop-shadow-lg py-4 mb-5 flex flex-col justify-between p-2">
      <div className="flex items-center text-sm font-bold">
        <Icon /> <h4 className="ml-1">{title}</h4>
      </div>
      <h3 className="mt-2 text-lg">{info}</h3>
      <p className="text-xs">{description}</p>
    </article>
  );
};

export default Tile;
