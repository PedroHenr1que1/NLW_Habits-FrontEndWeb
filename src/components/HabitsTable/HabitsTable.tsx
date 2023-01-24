import {
  ContainerTable,
  ContainerDays,
  ContainerHabits,
  Days
} from './HabitsTable.style';

import { Habit } from '../Habit/Habit';
import { FakeHabit } from '../FakeHabit';

import { generateDatesFormYearBeggining } from '../../utils/generateDatesFormYearBeggining';

const  weekDays = ["D", "S", "T", "Q", "Q", "S", "S"]

const summaryDates = generateDatesFormYearBeggining()

const minimumSummaryDays = 18 * 8
const amountOfDaysToFill = minimumSummaryDays - summaryDates.length

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

        {amountOfDaysToFill > 0 && Array.from({length: amountOfDaysToFill}). map ((_ ,key: number) => 
          <FakeHabit key={key}/>
        )}
      </ContainerHabits>
    </ContainerTable>
  )
}