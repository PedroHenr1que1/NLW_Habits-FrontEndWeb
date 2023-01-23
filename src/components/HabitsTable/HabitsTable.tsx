import {
  ContainerTable,
  ContainerDays,
  ContainerHabits,
  Days
} from './HabitsTable.style';

import { Habit } from '../Habits/Habits';

import { generateDatesFormYearBeggining } from '../../utils/generateDatesFormYearBeggining';

const  weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

const summaryDates = generateDatesFormYearBeggining()

console.log(summaryDates)

export default function HabitsTable() {
  return (
    <ContainerTable>
      <ContainerDays>
        {weekDays.map((weekDay: string, key: number) =>
          <Days key={key}>{weekDay}</Days>
        )}
      </ContainerDays>
      <ContainerHabits>
        {summaryDates.map((date: Date, key: number) => 
          <Habit key={key} completed={1}/>
        )}
      </ContainerHabits>
    </ContainerTable>
  )
}