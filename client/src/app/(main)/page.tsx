"use client";

import ProgressStepper from "@/components/ProgressStepper/ProgressStepper";
import { ProgressBarStoreProvider } from "@/providers/progressBarStoreProvider";

export default function Home() {
  return (
    <>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <ProgressBarStoreProvider>
          <ProgressStepper />
        </ProgressBarStoreProvider>
        Маркетплейс с искусственным интеллектом — дизайн интерьера за минуту
      </main>
    </>
  );
}
