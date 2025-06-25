import { useProgressBarStore } from "@/providers/progressBarStoreProvider";
import clsx from "clsx";

interface Props {
  steps: Step[];
}

export type Step = {
  label: string;
};

export default function ProgressStepper({ steps = [] }: Props) {
  const { step, setStep } = useProgressBarStore((state) => state);

  return (
    <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-4">
      {steps.map((s, index) => {
        const isActive = index + 1 === step;
        const isCompleted = index + 1 < step;

        return (
          <div key={index} className="flex items-center w-full relative h-16">
            {/* Шаг */}
            <div className="w-36 flex justify-center">
              {/* Линия слева */}
              {index > 0 && (
                <div
                  className={clsx(
                    "absolute left-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 z-0 transition-colors duration-500",
                    isCompleted ? "bg-primary" : "bg-gray-300"
                  )}
                />
              )}

              {/* Линия справа */}
              {index < steps.length - 1 && (
                <div
                  className={clsx(
                    "absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-0.5 z-0 transition-colors duration-500",
                    isCompleted ? "bg-primary" : "bg-gray-300"
                  )}
                />
              )}
              <div
                onClick={() => setStep(index + 1)}
                className={clsx(
                  "flex-row align-between space z-10 flex items-center justify-center border rounded-full transition-all duration-500 cursor-pointer origin-center",
                  isActive
                    ? "bg-primary text-white w-60 h-12 flex-col text-center border-primary"
                    : "w-12 h-12 text-black/80 bg-white border-black",
                  isCompleted && "border-primary"
                )}
              >
                <span
                  className={clsx(
                    "flex w-12 h-12 text-2xl justify-center align-center items-center",
                    isActive && "border-r border-white"
                  )}
                >
                  {index + 1}
                </span>
                {isActive && (
                  <span className="flex w-48 justify-center align-middle items-center align-center text-xl font-light leading-tight transition-none text-nowrap">
                    {s.label}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
