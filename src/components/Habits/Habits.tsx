import {
  Habits
} from "./Habits.style"


interface HabitsProps {
  completed: number;
}

export function Habit(props: HabitsProps) {
  return (
    <>
      <Habits>{props.completed}</Habits>
    </>
  )
}