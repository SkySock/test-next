interface Props {
  placeholder?: string;
  className?: string;
}

export default function Input({ placeholder, className }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={`w-full rounded-md border border-gray-300 py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    />
  );
}
