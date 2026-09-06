import styles from './Post.module.css'

import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { Avatar } from './Avatar'
import { Comment } from './Comment'
import { useState } from 'react'

interface Author {
    name: string
    avatarUrl: string
    role: string
}

interface Content {
    type: 'link' | 'paragraph'
    content: string
}

export interface PostType {
    author: Author
    content: Content[]
    publishedAt: Date
}

export interface PostProps {
    post: PostType
}

export function Post({ post }: PostProps) {
    const [comments, setComments] = useState([
        'Post muito bacana!'
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const isNewCommentEmpty = newCommentText.length === 0

    const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR
    })

    const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleCreateNewComment(event: React.SubmitEvent) {
        event.preventDefault()

        setComments([newCommentText, ...comments])

        setNewCommentText('')
    }

    function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
    }

    function deleteComment(commentToDelete: string) {
        const commentListWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })

        setComments(commentListWithoutDeletedOne)
    }

    function handleNewCommentInvalid(event: React.InvalidEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!')
    }


    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar
                        src={post.author.avatarUrl}
                    />
                    <div className={styles.authorInfo}>
                        <strong>{post.author.name}</strong>
                        <span>{post.author.role}</span>
                    </div>
                </div>

                <time
                    title={publishedDateFormatted}
                    dateTime={post.publishedAt.toISOString()}
                >
                    {publishedDateRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
                {post.content.map(c => {
                    switch (c.type) {
                        case 'paragraph': return (<p>{c.content}</p>)
                        case 'link': return (<p><a href='#'>{c.content}</a></p>)
                    }
                }
                )}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name='comment'
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    placeholder='Deixe um comentário'
                    onInvalid={handleNewCommentInvalid}
                    required
                />


                <button
                    type='submit'
                    disabled={isNewCommentEmpty}
                >
                    Publicar
                </button>
            </form>

            <div className={styles.commentList}>
                {comments.map((comment) => <Comment key={comment} content={comment} onDelete={deleteComment} />)}
            </div>
        </article>
    )
}