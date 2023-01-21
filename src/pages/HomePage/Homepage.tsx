import {
  Background,
  ConteinerHeader,
  LogoContainer
} from './Homepage.styles'

import Logo from '../../assets/Logo.svg'

import { Habit } from "../../components/Habits"

export default function Homepage() {

  return (
    <Background>
      <ConteinerHeader>
        <LogoContainer src={Logo} alt='logo'/>
      </ConteinerHeader>
    </Background>
  )
}
