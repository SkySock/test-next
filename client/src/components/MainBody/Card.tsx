import type { Layout } from "@/store/configurationStore";
import clsx from "clsx";
import { Heart, ThumbsUp } from "lucide-react";
import Image from "next/image";

interface Props {
  cardInfo: Layout;
  selected?: boolean;
  onSelect?: () => void;
}

export default function Card({ cardInfo, selected, onSelect }: Props) {
  return (
    <div
      className={clsx(
        "flex flex-col bg-white rounded-[20px] py-1 px-3 aspect-[2.5/4] border hover:border-primary shadow-sm",
        selected ? "border-primary" : "border-white"
      )}
      onClick={onSelect}
    >
      <p className="text-sm font-bold">{cardInfo.title}</p>
      <p className="text-xs">{cardInfo.price.toLocaleString("ru-RU")} руб.</p>
      <div className="h-35">
        <Image className="max-h-35" alt="layout" src={cardInfo.imgUrl} />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <p className="text-sm font-bold">{cardInfo.street}</p>
          <p className="text-xs text-gray-400">Дом {cardInfo.houseNumber}</p>
          <p className="text-xs text-gray-400">{cardInfo.description}</p>
        </div>
        <div className="flex gap-[2px]">
          <div className="size-5 rounded-full border border-gray-300 p-1 cursor-pointer">
            <Heart className="size-full text-center" />
          </div>
          <div className="size-5 rounded-full border border-gray-300 p-1 cursor-pointer">
            <ThumbsUp className="size-full text-center" />
          </div>
        </div>
      </div>
    </div>
  );
}
