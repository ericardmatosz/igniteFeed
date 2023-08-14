import { Avatar } from '../avatar/Avatar';
import { PencilSimpleLine } from 'phosphor-react';

import style from './Sidebar.module.scss';

export function Sidebar (){
    return(
        <aside className={style.sidebar}>
            <img src="https://images.unsplash.com/photo-1520052205864-92d242b3a76b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50" />
        
            <div className={style.userProfile}>
                <Avatar hasBorder src='https://github.com/ericardmatosz.png'/>
                <strong>Érica Matos</strong>
                <span>Web Developer</span>
            </div>

            <footer className={style.editButton}>
                <a href='#'>
                    <PencilSimpleLine size={17}/>
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    );
}