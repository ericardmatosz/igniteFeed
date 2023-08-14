import { Comments } from '../comments/Comments';
import { Avatar } from '../avatar/Avatar';

import style from './Post.module.scss';

export function Posts() {
    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src="https://github.com/ericardmatosz.png" />

                    <div className={style.authorInfos}>
                        <strong>Érica Matos</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title='Publicado dia 05 de Agosto as 19:30'>Publicado há 1h</time>
            </header>

            <div className={style.postContent}>
                <p>Fala galeraa 👋</p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

                <p>👉 <a>jane.design/doctorcare</a></p>

                <p>
                    <a>#novoprojeto</a>
                    <a>#nlw</a>
                    <a>#rocketseat</a>
                </p>
            </div>

            <form className={style.formComment}>
                <strong>
                    Deixe seu feedback
                </strong>

                <textarea placeholder='Escreva um comentário...' />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comments />
                <Comments />
                <Comments />
            </div>
        </article>
    );
}