import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import clsx from "clsx";
import { Heart, ThumbsUp } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LayoutInfo() {
  const { selectedLayout } = useConfigurationStore((state) => state);
  const [reaction, setReaction] = useState({ like: false, heart: false });

  const toggleLike = () => {
    setReaction({
      ...reaction,
      like: !reaction.like,
    });
  };

  const toggleHeart = () => {
    setReaction({
      ...reaction,
      heart: !reaction.heart,
    });
  };

  return (
    <div className="flex flex-col w-130 mr-[4vh] bg-white p-4 rounded-lg shadow-lg justify-between">
      <h1 className="text-3xl font-bold mb-4 text-center">
        {selectedLayout?.title}
      </h1>
      <Image
        src={selectedLayout?.imgUrl || ""}
        alt="Layout"
        width={300}
        height={300}
      />
      <div className="flex gap-4">
        <p className="">Описание:</p>
        <p className="">{selectedLayout?.description}</p>
      </div>
      <div className="flex gap-4">
        <p className="">Стоимость:</p>
        <p className="">{selectedLayout?.price.toLocaleString("ru-RU")} руб.</p>
      </div>
      <div className="flex gap-4">
        <p className="">Адрес:</p>
        <p className="">
          {`ул. ${selectedLayout?.street}, д.${selectedLayout?.houseNumber}`}{" "}
        </p>
      </div>
      <div className="flex flex-row-reverse gap-4 w-full">
        <button
          className={clsx(
            "size-15  rounded-full text-white cursor-pointer bg-gradient-to-r",
            reaction.heart
              ? "from-primary to-secondary"
              : "from-primary/70 to-secondary/70"
          )}
          onClick={toggleHeart}
        >
          <Heart className="size-10 text-center mx-auto mt-1" />
        </button>
        <button
          className={clsx(
            "size-15  rounded-full text-white cursor-pointer bg-gradient-to-r",
            reaction.like
              ? "from-primary to-secondary"
              : "from-primary/70 to-secondary/70"
          )}
          onClick={toggleLike}
        >
          <ThumbsUp className="size-10 text-center mx-auto mb-1" />
        </button>
      </div>
    </div>
  );
}
