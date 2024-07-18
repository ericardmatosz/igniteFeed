import { format, formatDistanceToNow } from "date-fns";

import { Avatar } from '../Avatar/Avatar';
import { Comments } from '../comments/Comments';

import { ptBR } from "date-fns/locale/pt-BR";
import { useState } from "react";


import style from './Post.module.scss';

export function Posts({author, content, publishedAt}: any) {
    const [comments, setComments] = useState([
        "Posts muito bacanas, hein?!"
    ])

    const [newComment, setNewComment] = useState("")

    const publishedDateFormated = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR 
    })

    const publisedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleNewComment(event: any) {
        setNewComment(event.target.value)
    }

    function handleCreateNewComment(event: any) {
        event?.preventDefault()

        setComments([...comments, newComment])

        setNewComment("")
    }

    function handleDeleteComment(deleteComment: string) {
        const newCommentList = comments.filter(teste => {
            return teste !== deleteComment
        })

        setComments(newCommentList)
    }

    return(
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar hasBorder={true} src={author.avatarUrl} />

                    <div className={style.authorInfos}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormated} dateTime={publishedAt.toISOString()}>{publisedAtRelativeToNow}</time>
            </header>

            <div className={style.postContent}>
                {content.map((line: any) => {
                    if(line.type === "paragraph") {
                        return <p>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={style.formComment}>
                <strong>
                    Deixe seu feedback
                </strong>

                <textarea name="comment" value={newComment} placeholder='Escreva um comentário...' onChange={handleNewComment} />

                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                {
                    comments.map((comment) => {
                        return <Comments content={comment} deleteComment={handleDeleteComment} />
                    })
                }
            </div>
        </article>
    );
}