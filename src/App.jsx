import { useState } from 'react'
import './login.css'
import { PlanusLoginCss } from './PlanusLoginCss';
import { PlanusLoginTailwind } from './PlanusLoginTailwind';

function App() {
  const [menu, setMenu] = useState('tailwind');

  return (
    menu === 'tailwind' ? <PlanusLoginTailwind /> : <PlanusLoginCss />
  )
}

export default App
