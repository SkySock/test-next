import { ChevronDown, ChevronRight, Search } from "lucide-react";
import { useState } from "react";
import Checkbox from "../UI/Checkbox";
import Input from "../UI/Input";
import clsx from "clsx";

interface Props {
  select?: string;
}

const complexes = [
  {
    name: "Арсиб",
    options: ["Горизонт", "Симфония"],
  },
  {
    name: "TUC",
    options: ["Квартал перемен", "Гео"],
  },
  {
    name: "Брусника",
    options: [],
  },
  {
    name: "Страна",
    options: [],
  },
  {
    name: "Самолет",
    options: [],
  },
];

export default function SelectComplex({ select }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <div className="flex-col">
        <p>Жилой комплекс</p>
        <button
          className="flex gap-1 h-5 w-40 border rounded-md px-1 text-sm justify-between items-center"
          onClick={toggle}
        >
          {select || "Выбрать"}
          <ChevronDown />
        </button>
      </div>
      <div
        className={clsx(
          "absolute w-[250px] top-13 rounded-2xl border bg-white shadow-xl max-h-fit p-2 z-20",
          isOpen ? "flex" : "hidden"
        )}
      >
        <div className="flex-col gap-2 z-20 w-full">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
            <Input placeholder="Поиск" className="pl-8 text-sm rounded-xl" />
          </div>
          <div className="flex gap-5 space-y-2 overflow-y-auto max-h-64">
            <ul className="">
              {complexes.map((group) => (
                <li key={group.name}>
                  <button
                    onClick={() =>
                      setExpanded((prev) =>
                        prev === group.name ? null : group.name
                      )
                    }
                    className={clsx(
                      "flex w-full items-center justify-between text-left text-sm font-medium text-gray-800 hover:text-primary",
                      expanded === group.name && "text-primary"
                    )}
                  >
                    {group.name}
                    {group.options.length > 0 && (
                      <span>
                        {expanded === group.name ? (
                          <ChevronRight className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {complexes.map(
                (group) =>
                  expanded === group.name &&
                  group.options.length > 0 &&
                  group.options.map((option) => (
                    <li
                      key={option}
                      className="flex items-center gap-2 text-sm"
                    >
                      <Checkbox id={option} />
                      <label htmlFor={option}>{option}</label>
                    </li>
                  ))
              )}
            </ul>
          </div>
        </div>
        {isOpen && (
          <div
            className="fixed top-0 right-0 bottom-0 left-0 z-0"
            onClick={toggle}
          ></div>
        )}
      </div>
    </div>
  );
}
