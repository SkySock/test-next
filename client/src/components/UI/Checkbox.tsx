import { useState } from "react";

interface Props {
  id: string;
}

export default function Checkbox({ id }: Props) {
  const [checked, setChecked] = useState(false);

  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={() => setChecked(!checked)}
      className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:primary"
    />
  );
}
