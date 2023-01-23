import {
  Background,
} from './Homepage.styles'

import Header from '../../components/Header/Header';
import HabitsTable from '../../components/HabitsTable/HabitsTable';

export default function Homepage() {

  return (
    <Background>
      <Header/>
      <HabitsTable/>
    </Background>
  )
}
