import styled from "styled-components";

import { Colors } from "../../Themes/Colors";

export const FakeHabits = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${Colors.HabitBackground};
  border-radius: 8px;
  border: 2px solid ${Colors.HabitBorder};
  cursor: not-allowed;
  opacity: 50%;
`