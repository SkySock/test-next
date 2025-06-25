import { useState } from "react";
import ChoiceBlock from "../ChoiceBlock/ChoiceBlock";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import ProgressStepper from "../ProgressStepper/ProgressStepper";
import Block1 from "./Block1";
import Block2 from "./Block2";
import { ConfigurationStoreProvider } from "@/providers/configurationStoreProvider";

enum Choice {
  Ready = 0,
  Self = 1,
  None,
}

const firstProgressSteps = [
  { label: "Этап 1" },
  { label: "Этап 2" },
  { label: "Этап 3" },
  { label: "Этап 4" },
  { label: "Этап 5" },
];

export default function MainBody() {
  const [choice, setChoice] = useState(Choice.None);

  const readySelection = () => {
    setChoice(0);
  };

  const selfUserSelection = () => {
    setChoice(1);
  };

  const toBegin = () => {
    setChoice(Choice.None);
  };

  return (
    <>
      <ProgressStepper steps={firstProgressSteps} />
      <ContentWrapper>
        {choice === Choice.None && (
          <>
            <ChoiceBlock text="Выбери готовую" onClick={readySelection} />
            <ChoiceBlock text="Нарисуй свою" onClick={selfUserSelection} />
          </>
        )}
        {choice === Choice.Ready && (
          <ConfigurationStoreProvider>
            <Block1 toBegin={toBegin} />
          </ConfigurationStoreProvider>
        )}
        {choice === Choice.Self && <Block2 toBegin={toBegin} />}
      </ContentWrapper>
    </>
  );
}
