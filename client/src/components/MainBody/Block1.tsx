import { useProgressBarStore } from "@/providers/progressBarStoreProvider";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import BlockContainer from "./BlockContainer";
import Filters from "./Filters";
import Button from "../UI/Button";
import Layouts from "./Layouts";
import { useConfigurationStore } from "@/providers/configurationStoreProvider";
import type { ConfigurationStore } from "@/store/configurationStore";

interface Props {
  toBegin: () => void;
}

export default function Block1({ toBegin }: Props) {
  const { step, setStep } = useProgressBarStore((state) => state);
  const { selectedLayout }: ConfigurationStore = useConfigurationStore(
    (state) => state
  );

  return (
    <ContentWrapper>
      <BlockContainer>
        {step === 1 && (
          <>
            <Filters />
            <Layouts />
            <div className="flex justify-between pr-[4vh]">
              <Button onClick={toBegin}>Назад</Button>
              {selectedLayout !== null && (
                <Button onClick={() => setStep(step + 1)}>Подтвердить</Button>
              )}
            </div>
          </>
        )}
      </BlockContainer>
    </ContentWrapper>
  );
}
