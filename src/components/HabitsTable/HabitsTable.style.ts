import styled from "styled-components"

import { Colors } from "../../Themes/Colors";

export const ContainerTable = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ContainerHabits = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0,1fr));
  grid-auto-flow: column;
  grid-gap: 12px;
`;

export const ContainerDays = styled.div`
  display: grid;
  grid-template-rows: repeat(7, minmax(0,1fr));
  grid-auto-flow: column;
  grid-gap: 12px;
`;

export const Days = styled.div`
  color: ${Colors.text};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  width: 40px;
`;