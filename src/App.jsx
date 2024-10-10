import { useState } from 'react';
import { Post } from './componentes/Post';
import { Header } from "./componentes/Header";
import { SideBar } from "./componentes/SideBar";

import styles from './App.module.css'

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEEt2hFQPjQ9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726700433074?e=1732147200&v=beta&t=IJp9NZnBpvAKtoeVMVTFZii2MtoDS74FZkWJt5OSgpA',
      name: 'Nayra kethillyn',
      role: 'CTO @braidsnayy'
    },
    content: [
      { type: 'paragraph', content: 'Receita de Pudim' },
      {
        type: 'paragraph', content: 'Para fazer o pudim, comece derretendo o açúcar para a calda e espalhe na forma. Bata leite condensado, leite e ovos no liquidificador e despeje sobre a calda. Asse em banho-maria no forno por 1h30 ou cozinhe no fogão por 1h. Deixe esfriar, leve à geladeira por 4 horas e desenforme. Sirva gelado!'
      },
      { type: 'link', content: 'nay.dev/doctorcare' },
    ],
    publishedAt: new Date('2024-09-25 20:30:56'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://media.licdn.com/dms/image/v2/D5603AQGJ4gwQ1oCM0g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726766405693?e=1733961600&v=beta&t=iHE-34wuTY2xxAmvI79ogHsS_mfaeCwDygqWyytRdXY',
      name: 'Weasy Santus',
      role: 'educator @braidsnayy'
    },
    content: [
      { type: 'paragraph', content: 'Receita de brigadeiro' },
      {
        type: 'paragraph', content: 'Para fazer brigadeiro, misture leite condensado, chocolate em pó e manteiga em uma panela. Cozinhe em fogo baixo, mexendo até desgrudar do fundo. Deixe esfriar, faça bolinhas e passe no granulado. Sirva em forminhas ou aproveite de colher!'
      },
      { type: 'link', content: 'nay.conf/doctorcare' },
    ],
    publishedAt: new Date('2024-09-26 20:30:56'),
  },
]



function App() {
  return (

    <div>
      <Header />

      <div className={styles.wrapper}>
        <aside>
          <SideBar />
        </aside>
        <main>
            {posts.map(post =>{
              return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
            })}
        </main>
      </div>
    </div>
  )
}

export default App
