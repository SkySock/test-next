import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export default function ContentWrapper({ children }: Props) {
  return (
    <div className="flex justify-between m-auto space-x-8">{children}</div>
  );
}
