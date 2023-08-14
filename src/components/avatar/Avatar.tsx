import styles from './Avatar.module.scss'

export function Avatar(props:any) {
    return(
        <img className={props.hasBorder ? styles.avatarWithBorder : styles.avatar} src={props.src}/>
    );
    
}