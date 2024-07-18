import styles from './styles.module.scss';

type AvatarProps = {
    hasBorder: boolean,
    src: string
}

export function Avatar({hasBorder, src}: AvatarProps) {
    return(
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={src}/>
    );
}