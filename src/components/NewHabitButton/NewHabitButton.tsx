import {
  Button,
  Text,
  Plus
} from "./NewHabitButton.styles"

import PlusSvg from "../../assets/Plus.svg"

export function NewHabitButton() {
  return (
    <Button>
      <Plus src={PlusSvg} alt="Plus"/>
      <Text>Novo Hábito</Text>
    </Button>
  )
}