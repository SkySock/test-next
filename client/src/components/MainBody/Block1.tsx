import { useProgressBarStore } from "@/providers/progressBarStoreProvider";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import BlockContainer from "./BlockContainer";
import Filters from "./Filters";
import Button from "../UI/Button";
import Layouts from "./Layouts";
import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import type {
  ConfigurationStore,
  InteriorStyle,
  Layout,
  PriceCategory,
} from "@/store/configurationStore";
import LayoutInfo from "./LayoutInfo";
import StepSlider from "./StepSlider";
import Card from "./Card";

interface Props {
  toBegin: () => void;
}


const interiorStyles: InteriorStyle[] = [
  { id: "1", name: "Лофт" },
  { id: "2", name: "Скандинавский" },
  { id: "3", name: "Минимализм" },
];

const priceCategories: PriceCategory[] = [
  { id: "1", name: "Эконом" },
  { id: "2", name: "Комфорт" },
  { id: "3", name: "Премиум" },
];

export default function Block1({ toBegin }: Props) {
  const { step, setStep } = useProgressBarStore((state) => state);
  const {
    selectedLayout,
    selectedInteriorStyle,
    setSelectedInteriorStyle,
    selectedPriceCategory,
    setSelectedPriceCategory,
  }: ConfigurationStore = useConfigurationStore((state) => state);

  const onChangeInteriorStyle = (interiorStyle: string) => {
    setSelectedInteriorStyle(
      interiorStyles.find((style) => style.name === interiorStyle) || null
    );
  };

  const onChangePriceCategory = (priceCategory: string) => {
    setSelectedPriceCategory(
      priceCategories.find((style) => style.name === priceCategory) || null
    );
  };

  console.log(selectedInteriorStyle);

  return (
    <ContentWrapper>
      <BlockContainer>
        {step === 1 && (
          <>
            <Filters />
            <Layouts />
            <div className="flex justify-between mr-[4vh]">
              <Button onClick={toBegin}>Назад</Button>
              {selectedLayout !== null && (
                <Button onClick={() => setStep(step + 1)}>Подтвердить</Button>
              )}
            </div>
          </>
        )}
        {step === 2 && (
          <div className="flex flex-col justify-between gap-5 py-[5vh] h-full">
            <div className="flex justify-between h-full">
              <div className="flex flex-col gap-5 w-full">
                <div className="flex flex-col gap-1">
                  <p className="text-xl">Выберите бюджет:</p>
                  <StepSlider
                    options={priceCategories.map((category) => category.name)}
                    value={selectedPriceCategory?.name}
                    onChange={onChangePriceCategory}
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-xl">Выберите стилистику:</p>
                  <StepSlider
                    options={interiorStyles.map((style) => style.name)}
                    value={selectedInteriorStyle?.name}
                    onChange={onChangeInteriorStyle}
                  />
                </div>
              </div>

              <LayoutInfo />
            </div>

            <div className="flex justify-between mr-[4vh]">
              <Button onClick={() => setStep(step - 1)}>Назад</Button>
              {selectedInteriorStyle !== null &&
                selectedPriceCategory !== null && (
                  <Button onClick={() => setStep(step + 1)}>Подтвердить</Button>
                )}
            </div>
          </div>
        )}
        {step >= 3 && <Button onClick={() => setStep(step - 1)}>Назад</Button>}
      </BlockContainer>
      <div className="w-[20vw] py-4 px-8 flex flex-col gap-6 bg-primary-gray rounded-[8vh]">
        <h1 className="text-center">Топ планировка</h1>
        {!!selectedLayout && <Card cardInfo={selectedLayout }/>}
      </div>
    </ContentWrapper>
  );
}
