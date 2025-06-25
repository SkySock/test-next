import Button from "../UI/Button";
import BlockContainer from "./BlockContainer";

interface Props {
  toBegin: () => void;
}

export default function Block2({ toBegin }: Props) {
  return (
    <BlockContainer>
      <Button onClick={toBegin}>Назад</Button>
    </BlockContainer>
  );
}
