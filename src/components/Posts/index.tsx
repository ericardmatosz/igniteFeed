import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { ChangeEvent, FormEvent, useState } from "react";

import { Avatar } from "../Avatar";
import { Comments } from "../Comments";

import style from "./styles.module.scss";

type PostContent = {
  type: "paragraph" | "link";
  content: string;
};

type PostProps = {
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: [PostContent];
  publishedAt: Date;
};

export function Posts({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState(["Post muito legal!"]);
  const [newComment, setNewComment] = useState("");

  const publisedAtRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const publishedDateFormated = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  function handleNewComment(e: ChangeEvent<HTMLTextAreaElement>) {
    setNewComment(e.target.value);
  }

  function handleCreateNewComment(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  }

  function handleDeleteComment(deleteComment: string) {
    const newCommentList = comments.filter((comment) => {
      return comment !== deleteComment;
    });

    setComments(newCommentList);
  }

  return (
    <article className={style.post}>
      <header>
        <div className={style.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />

          <div className={style.authorInfos}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormated}
          dateTime={publishedAt.toISOString()}
        >
          {publisedAtRelativeToNow}
        </time>
      </header>

      <div className={style.postContent}>
        {content.map((line: PostContent) => {
          if (line.type === "paragraph") {
            return <p>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={style.formComment}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          placeholder="Escreva um comentário..."
          onChange={handleNewComment}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={style.commentList}>
        {comments.map((comment) => {
          return (
            <Comments content={comment} deleteComment={handleDeleteComment} />
          );
        })}
      </div>
    </article>
  );
}
