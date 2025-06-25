import type { ReactNode } from "react";

interface Props {
  onClick: () => void;
  children?: ReactNode;
}

export default function Button({ onClick, children }: Props) {
  return (
    <button
      className="w-47 h-13 rounded-xl text-white text-2xl bg-gradient-to-r from-primary to-secondary cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
