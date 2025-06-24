import { useProgressBarStore } from "@/providers/progressBarStoreProvider";
import clsx from "clsx";

const steps = ["выбери свою квартиру", "Этап 2", "Этап 3", "Этап 4", "Этап 5"];

export default function ProgressStepper() {
  const { step, setStep } = useProgressBarStore((state) => state);

  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto px-4">
      {steps.map((label, index) => {
        const isActive = index + 1 === step;
        const isCompleted = index + 1 < step;

        return (
          <div key={index} className="flex items-center w-full relative">
            {/* Линия слева */}
            {index !== 0 && (
              <div
                className={clsx(
                  "h-0.5 flex-1 transition-colors duration-500",
                  isCompleted ? "bg-blue-600" : "bg-gray-300"
                )}
              />
            )}

            {/* Шаг */}
            <div
              onClick={() => setStep(index + 1)}
              className={clsx(
                "relative z-10 flex items-center justify-center rounded-full border transition-all duration-300 cursor-pointer",
                isActive
                  ? "bg-blue-600 text-white w-32 h-16 flex-col px-2 text-center"
                  : "w-10 h-10 text-black/80 bg-white border-black"
              )}
            >
              <span className="text-lg">{index + 1}</span>
              {isActive && (
                <span className="text-xs font-light leading-tight mt-1">
                  {label}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
