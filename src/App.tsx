import '../src/styles/colors.scss';
import '../src/styles/global.scss';
import style from './App.module.scss';

import { Posts } from './components/feed-posts/Post';
import { Header } from './components/header/Header';
import { Sidebar } from './components/sidebar/Sidebar';

const posts = [
  {
    id: 1,
    author: {
        avatarUrl: "https://github.com/ericardmatosz.png",
        name: "Érica Matos",
        role: "Software Engineer"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2024-06-12 20:00:00")
  },
  {
    id: 2,
    author: {
        avatarUrl: "https://github.com/ericardmatosz.png",
        name: "Érica Matos",
        role: "Software Engineer II"
    },
    content: [
      {type: "paragraph", content: "Fala galeraa 👋"},
      {type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"},
      {type: "link", content: "jane.design/doctorcare"},
    ],
    publishedAt: new Date("2024-06-12 20:00:00")
  }
]

function App() {
  return (
    <div>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />
        <main>
          {
            posts.map((post) => (
              <Posts 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ))
          }
        </main>
      </div>
    </div>
  )
}

export default App
