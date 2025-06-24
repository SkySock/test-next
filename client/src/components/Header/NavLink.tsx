import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function NavLink(props: Props) {
  return (
    <div className="opacity: 1; transform: none;">
      <Link
        href={props.href}
        className="group relative pb-1 text-sm text-black/70 transition-colors hover:text-primary"
      >
        {props.text}
        <span className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 transform bg-secondary transition-transform group-hover:scale-x-100"></span>
      </Link>
    </div>
  );
}
