import { Header } from "./components/Header"
import { Post, type PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

const posts: PostType[] = [
  {
    author: {
      name: 'Gabriel Gallan',
      role: 'Web Developer',
      avatarUrl: 'https://github.com/gabrielgallan.png'
    },
    content: [
      {
        type: 'paragraph',
        content: 'Fala galeraa 👋'
      },
      {
        type: 'paragraph',
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {
        type: 'link',
        content: 'jane.design/doctorcare'
      },
      {
        type: 'link',
        content: '#novoprojeto'
      },
    ],
    publishedAt: new Date(2026, 1, 24, 22, 30, 0)
  }
]

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post =>
            <Post post={post} />
          )}
        </main>
      </div>
    </>
  )
}

export default App