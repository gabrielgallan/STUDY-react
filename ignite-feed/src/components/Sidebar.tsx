import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilSimpleLineIcon } from '@phosphor-icons/react'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img src="https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className={styles.cover}
            />

            <div className={styles.profile}>
                <Avatar
                    src="https://github.com/gabrielgallan.png"
                />

                <strong>Gabriel Gallan</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLineIcon size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}