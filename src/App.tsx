import "../src/styles/colors.scss";
import "../src/styles/global.scss";
import style from "./App.module.scss";

import { Header } from "./components/Header";
import { Posts } from "./components/Posts";
import { Sidebar } from "./components/Sidebar";
import { posts } from "./constants/posts";

function App() {
  return (
    <>
      <Header />

      <div className={style.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => (
            <Posts
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
