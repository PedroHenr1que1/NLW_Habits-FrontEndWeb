import {
  ContainerTable,
  ContainerDays,
  ContainerHabits,
  Days
} from './HabitsTable.style';

import { Habit } from '../Habits/Habits';

const  weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]


export default function HabitsTable() {
  return (
    <ContainerTable>
      <ContainerDays>
        {weekDays.map((weekDay: string, key: number) =>
          <Days key={key}>{weekDay}</Days>
        )}
      </ContainerDays>
      <ContainerHabits>
          <Habit completed={1}/>
      </ContainerHabits>
    </ContainerTable>
  )
}