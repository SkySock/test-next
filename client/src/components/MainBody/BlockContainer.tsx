import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function BlockContainer({ children }: Props) {
  return (
    <div className="flex flex-col gap-6 bg-primary-gray rounded-[8vh] pl-[8vh] pr-[4vh] py-[2vh] w-[60vw] h-[70vh] shadow">
      {children}
    </div>
  );
}
