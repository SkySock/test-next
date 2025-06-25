import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import type { City } from "@/store/configurationStore";
import { ChevronDown } from "lucide-react";
import { useState, type MouseEventHandler } from "react";

interface Props {
  select?: string;
  onSelect: (city: City) => () => void;
}

const DROPDOWN_WIDTH = 200;

export default function SelectCity({ select, onSelect }: Props) {
  const { cities } = useConfigurationStore((state) => state);
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState({
    right: "0px",
    top: "0px",
  });

  const handleDropdownClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    const coord = e.currentTarget.getBoundingClientRect();

    setMenuPos({
      right: `-${coord.right - DROPDOWN_WIDTH}px`,
      top: `${coord.bottom + 10}px`,
    });

    setIsOpen(!isOpen);
  };

  const handleClickOutside: MouseEventHandler<HTMLDivElement> = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex-col">
      <p>Город</p>
      <button
        className="flex gap-1 h-5 w-40 border rounded-md px-1 text-sm justify-between items-center"
        onClick={handleDropdownClick}
      >
        {select || "Выбрать"}
        <ChevronDown />
      </button>
      {isOpen && (
        <div
          className="z-1000 fixed top-0 left-0 right-0 bottom-0"
          onClick={handleClickOutside}
        >
          <div
            className="relative w-[200px] rounded-2xl border bg-white shadow-xl max-h-fit"
            style={menuPos}
          >
            <ul className="overflow-y-auto scrollbar max-h-[300px] m-2">
              {cities.map((city) => (
                <li
                  className="cursor-pointer hover:text-primary"
                  key={city.id}
                  onClick={onSelect(city)}
                >
                  {city.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
