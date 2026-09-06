import styles from './Comment.module.css'

import { ThumbsUpIcon, TrashIcon } from '@phosphor-icons/react'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
    content: string
    onDelete: (comment: string) => void
}

export function Comment({ content, onDelete }: CommentProps) {
    const [likeCount, setLikeCount] = useState(0)

    function handleDeleteComment() {
        onDelete(content)
    }

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    return (
        <div className={styles.comment}>
            <Avatar
                src="https://github.com/josepholiveira.png"
                hasBorder={false}
            />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Joseph Oliveira</strong>
                            <time
                                title="11 de Maio ás 08:13"
                                dateTime="2026-5-11 08:13:30"
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title='Deletar comentário'>
                            <TrashIcon size={22} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUpIcon size={22} />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}