import { useState } from 'react';
import { Post } from './componentes/Post';
import { Header } from "./componentes/Header";
import { SideBar } from "./componentes/SideBar";

import styles from './App.module.css'

import './global.css';


function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Post
            autor="Nayra Kethillyn"
            conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, quae, consectetur debitis autem tempora ex, esse illo corrupti adipisci ipsa. Vero eligendi laborum iusto odio suscipit maxime molestias laudantium."
          />
          <Post
            autor="Keyt dantas"
            conteudo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus, quae, consectetur debitis autem tempora ex, esse illo corrupti adipisci ipsa. Vero eligendi laborum iusto odio suscipit maxime molestias laudantium."
          />
        </main>
      </div>
    </div>
  )
}

export default App
