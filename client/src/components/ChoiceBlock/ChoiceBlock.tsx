interface Props {
  text: string;
  onClick?: () => void;
}

export default function ChoiceBlock({ text, onClick }: Props) {
  return (
    <div
      className="flex bg-primary-gray w-128 h-128 rounded-[8vh] p-[8vh] align-center justify-center cursor-pointer hover:bg-[rgb(210,210,210)]"
      onClick={onClick}
    >
      <span className="m-auto text-2xl">{text}</span>
    </div>
  );
}
