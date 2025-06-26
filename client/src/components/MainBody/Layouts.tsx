"use client";

import Card from "./Card";
// import layoutImg from "../../../public/testLayout.jpg";
// import layoutImg2 from "../../../public/testLayout2.jpg";
import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import type { Layout } from "@/store/configurationStore";
import { useEffect } from "react";
import axios from "axios";

// const cardInfo: Layout[] = [
//   {
//     id: "1",
//     title: "Студия 18.7 м²",
//     price: 4300000,
//     imgUrl: layoutImg,
//     street: "Республики 205",
//     rooms: "Студия",
//     houseNumber: "9",
//     description: "Срок сдачи 4 квартал 2025",
//   },
//   {
//     id: "2",
//     title: "1-комн. 32.5 м²",
//     price: 5900000,
//     imgUrl: layoutImg2,
//     street: "Красноармейская 12",
//     rooms: "1",
//     houseNumber: "3",
//     description: "Срок сдачи 2 квартал 2024",
//   },
//   {
//     id: "3",
//     title: "2-комн. 45.8 м²",
//     price: 7400000,
//     imgUrl: layoutImg,
//     street: "Советская 8",
//     rooms: "2",
//     houseNumber: "7",
//     description: "Дом сдан",
//   },
//   {
//     id: "4",
//     title: "3-комн. 72.1 м²",
//     price: 9500000,
//     imgUrl: layoutImg,
//     street: "Ленина 15",
//     rooms: "3",
//     houseNumber: "1",
//     description: "Срок сдачи 1 квартал 2026",
//   },
//   {
//     id: "5",
//     title: "Студия 22.0 м²",
//     price: 4800000,
//     imgUrl: layoutImg2,
//     street: "Мира 101",
//     rooms: "Студия",
//     houseNumber: "12",
//     description: "Срок сдачи 3 квартал 2025",
//   },
//   {
//     id: "6",
//     title: "Студия 18.7 м²",
//     price: 4300000,
//     imgUrl: layoutImg,
//     street: "Республики 205",
//     rooms: "Студия",
//     houseNumber: "9",
//     description: "Срок сдачи 4 квартал 2025",
//   },
//   {
//     id: "7",
//     title: "1-комн. 32.5 м²",
//     price: 5900000,
//     imgUrl: layoutImg2,
//     street: "Красноармейская 12",
//     rooms: "1",
//     houseNumber: "3",
//     description: "Срок сдачи 2 квартал 2024",
//   },
//   {
//     id: "8",
//     title: "2-комн. 45.8 м²",
//     price: 7400000,
//     imgUrl: layoutImg,
//     street: "Советская 8",
//     rooms: "2",
//     houseNumber: "7",
//     description: "Дом сдан",
//   },
//   {
//     id: "9",
//     title: "3-комн. 72.1 м²",
//     price: 9500000,
//     imgUrl: layoutImg,
//     street: "Ленина 15",
//     rooms: "3",
//     houseNumber: "1",
//     description: "Срок сдачи 1 квартал 2026",
//   },
//   {
//     id: "10",
//     title: "Студия 22.0 м²",
//     price: 4800000,
//     imgUrl: layoutImg2,
//     street: "Мира 101",
//     rooms: "Студия",
//     houseNumber: "12",
//     description: "Срок сдачи 3 квартал 2025",
//   },
// ];

export default function Layouts() {
  const {
    selectedLayout,
    layouts,
    setSelectedLayout,
    setLayouts,
    roomsFilter,
  } = useConfigurationStore((state) => state);

  const handleCardClick = (selected: Layout) => () => {
    setSelectedLayout(selected);
  };
  console.log(selectedLayout);

  // useEffect(() => {
  //   setLayouts([...cardInfo]);
  // }, [setLayouts]);

  useEffect(() => {
    axios.get<Layout[]>("http://127.0.0.1:8000/api/layouts/").then((res) => {
      console.log(res);
      setLayouts(res.data);
    });
  }, [setLayouts]);

  return (
    <div className="grid grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-4 h-full w-full overflow-y-auto scrollbar pr-[4vh] pb-[1vh]">
      {layouts.map((l) => {
        if (!roomsFilter) {
          return (
            <Card
              key={l.id}
              cardInfo={l}
              selected={l.id === selectedLayout?.id}
              onSelect={handleCardClick(l)}
            />
          );
        }
        return (
          l.rooms === roomsFilter && (
            <Card
              key={l.id}
              cardInfo={l}
              selected={l.id === selectedLayout?.id}
              onSelect={handleCardClick(l)}
            />
          )
        );
      })}
    </div>
  );
}
