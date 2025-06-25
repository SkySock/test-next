import { useState } from "react";
import clsx from "clsx";

type StepSliderProps = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function StepSlider({
  options,
  value,
  onChange,
}: StepSliderProps) {
  const [selected, setSelected] = useState(value ?? options[0]);

  const handleSelect = (option: string) => {
    setSelected(option);
    onChange?.(option);
  };

  return (
    <div className="relative w-full max-w-md">
      <div className="flex justify-between rounded-full border border-gray-300 bg-gray-100 p-1 shadow-inner">
        {options.map((option) => {
          const isActive = selected === option && !!value;
          return (
            <button
              key={option}
              onClick={() => handleSelect(option)}
              className={clsx(
                "flex-1 px-3 py-1.5 text-sm font-medium text-center rounded-full transition-all",
                isActive
                  ? "bg-white shadow text-primary"
                  : "text-gray-500 hover:text-black"
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
