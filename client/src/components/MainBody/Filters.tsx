import { useEffect } from "react";
import SelectCity from "./SelectCity";
import SelectComplex from "./SelectComplex";
import SelectRooms from "./SelectRooms";
import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import type { City } from "@/store/configurationStore";

const cities = [
  { id: "1", name: "Москва" },
  { id: "2", name: "Санкт-Петербург" },
  { id: "3", name: "Новосибирск" },
  { id: "4", name: "Екатеринбург" },
  { id: "5", name: "Нижний Новгород" },
  { id: "6", name: "Казань" },
  { id: "7", name: "Челябинск" },
  { id: "8", name: "Омск" },
  { id: "9", name: "Самара" },
  { id: "10", name: "Ростов-на-Дону" },
  { id: "11", name: "Уфа" },
  { id: "12", name: "Пермь" },
  { id: "13", name: "Воронеж" },
  { id: "14", name: "Волгоград" },
  { id: "15", name: "Красноярск" },
  { id: "16", name: "Ижевск" },
  { id: "17", name: "Тюмень" },
  { id: "18", name: "Тольятти" },
  { id: "19", name: "Томск" },
  { id: "20", name: "Краснодар" },
  { id: "21", name: "Астрахань" },
  { id: "22", name: "Владивосток" },
  { id: "23", name: "Хабаровск" },
  { id: "24", name: "Ярославль" },
  { id: "25", name: "Иркутск" },
  { id: "26", name: "Барнаул" },
];

export default function Filters() {
  const { cityFilter, setCityFilter, setCities } = useConfigurationStore(
    (state) => state
  );

  const onSelectCity = (city: City) => () => {
    setCityFilter(city);
  };

  useEffect(() => {
    setCities(cities);
  }, [setCities]);

  return (
    <div className="flex gap-8">
      <h2 className="font-bold">Фильтры</h2>
      <SelectCity select={cityFilter?.name} onSelect={onSelectCity} />
      <SelectComplex />
      <SelectRooms />
    </div>
  );
}
