"use client";

import MainBody from "@/components/MainBody/MainBody";
import { ConfigurationStoreProvider } from "@/providers/configurationStoreProvider";
import { ProgressBarStoreProvider } from "@/providers/progressBarStoreProvider";
import { Jost } from "next/font/google";

const jost = Jost({
  subsets: ["cyrillic"],
  weight: ["400", "500", "600"], // выбери нужные
  display: "swap",
});

export default function Home() {
  return (
    <>
      <main
        className={`${jost.className} flex flex-col gap-[32px] row-start-2 items-center sm:items-start pt-6`}
      >
        <ProgressBarStoreProvider>
          <MainBody />
        </ProgressBarStoreProvider>
      </main>
    </>
  );
}
