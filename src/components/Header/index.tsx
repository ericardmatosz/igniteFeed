import igniteLogo from "../../assets/ignite-simbol.svg";
import style from "./styles.module.scss";

export function Header() {
  return (
    <header className={style.header}>
      <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
  );
}
