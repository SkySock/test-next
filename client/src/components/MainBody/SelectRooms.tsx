import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import clsx from "clsx";
import { useState } from "react";

enum Room {
  None,
  Studio = "Студия",
  One = "1",
  Two = "2",
  Three = "3",
  Four = "4+",
}

export default function SelectRooms() {
  const [room, setRoom] = useState(Room.None);
  const { setRoomsFilter } = useConfigurationStore((state) => state);

  const handleRoom = (room: Room) => () => {
    setRoom(room);
    setRoomsFilter(room.toString());
  };

  return (
    <div className="flex-col">
      <p>Комнатность</p>
      <div
        className={clsx(
          "flex h-5 border rounded-md text-sm items-center overflow-hidden cursor-pointer"
        )}
      >
        <div
          className={clsx(
            "px-1 min-w-5 border-r text-center border-black",
            room === Room.Studio && "bg-primary text-white"
          )}
          onClick={handleRoom(Room.Studio)}
        >
          {Room.Studio}
        </div>
        <div
          className={clsx(
            "px-1 min-w-5 border-r text-center border-black",
            room === Room.One && "bg-primary text-white"
          )}
          onClick={handleRoom(Room.One)}
        >
          {Room.One}
        </div>
        <div
          className={clsx(
            "px-1 min-w-5 border-r text-center border-black",
            room === Room.Two && "bg-primary text-white"
          )}
          onClick={handleRoom(Room.Two)}
        >
          {Room.Two}
        </div>
        <div
          className={clsx(
            "px-1 min-w-5 border-r text-center border-black",
            room === Room.Three && "bg-primary text-white"
          )}
          onClick={handleRoom(Room.Three)}
        >
          {Room.Three}
        </div>
        <div
          className={clsx(
            "px-1 min-w-5 text-center border-black",
            room === Room.Four && "bg-primary text-white"
          )}
          onClick={handleRoom(Room.Four)}
        >
          {Room.Four}
        </div>
      </div>
    </div>
  );
}
