import style from './Header.module.scss'
import igniteLogo from '../../assets/ignite-simbol.svg';

export function Header() {
    return (
      <header className={style.header}>
          <img src={igniteLogo} alt=''/>
          <strong>Ignite Feed</strong> 
      </header>
       
    );
}