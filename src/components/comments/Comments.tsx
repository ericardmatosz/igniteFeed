import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar';

import { useState } from 'react';
import styles from './Comments.module.scss';

export function Comments({content, deleteComment}: any) {
    const [like, setLike] = useState(0)
    function handleCommentDelete() {
        deleteComment(content)
    }

    function handleNewLike() {
        setLike(like + 1)
    }

    return(
        <div className={styles.comments}>
            <Avatar hasBorder={false} src="https://github.com/ericardmatosz.png" />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorInfos}>
                                <strong>Érica Matos <span>(você)</span></strong>
                                <time title='Publicado dia 05 de Agosto as 19:30'>Cerca de 1h</time>
                            </div>
    
                            <button onClick={handleCommentDelete} title='Deletar comentário'>
                                <Trash size={24} />
                            </button>
                        </header>

                        <p>{content}</p>
                    </div>

                    <footer className={styles.commentInfos}> 
                        <button onClick={handleNewLike}>
                            <ThumbsUp size={20} /> Aplaudir <span>{like}</span>
                        </button>
                    </footer>
                </div>
            </div>
    );
}