import { Fragment } from 'react'

import {
  ConteinerHeader,
  LogoContainer
} from './Header.styles'

import Logo from '../../assets/Logo.svg'

import { NewHabitButton } from '../../components/NewHabitButton'

export default function Header() {

  return (
    <Fragment>
      <ConteinerHeader>
        <LogoContainer src={Logo} alt='logo'/>
        <NewHabitButton/>
      </ConteinerHeader>
    </Fragment>
  )
}
