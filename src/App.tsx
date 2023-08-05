import '../src/styles/global.scss';
import '../src/styles/colors.scss'
import style from './App.module.scss'

import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main></main>
      </div>
    </div>
  )
}

export default App
