import {
  Habits
} from "./Habit.style"


interface HabitsProps {
  completed: number;
}

export function Habit(props: HabitsProps) {
  return (
    <Habits></Habits>
  )
}