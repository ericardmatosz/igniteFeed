import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comments.module.scss';

export function Comments() {
    return(
        <div className={styles.comments}>
            <img src="https://github.com/ericardmatosz.png" />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorInfos}>
                                <strong>Érica Matos <span>(você)</span></strong>
                                <time title='Publicado dia 05 de Agosto as 19:30'>Cerca de 1h</time>
                            </div>
    
                            <button title='Deletar comentário'>
                                <Trash size={24} />
                            </button>
                        </header>

                        <p>Muito bom Devon, parabéns!! 👏👏</p>
                    </div>

                    <footer className={styles.commentInfos}> 
                        <button>
                            <ThumbsUp size={20} /> Aplaudir <span>28</span>
                        </button>
                    </footer>
                </div>
            </div>
    );
}