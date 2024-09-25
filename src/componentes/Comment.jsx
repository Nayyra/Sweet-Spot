import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'


export function Comment() {
     return (
          <div className={styles.comment}>
               <Avatar
                    hasBorder={false}
                    src="https://media.licdn.com/dms/image/v2/D4D03AQEEt2hFQPjQ9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726700433074?e=1732147200&v=beta&t=IJp9NZnBpvAKtoeVMVTFZii2MtoDS74FZkWJt5OSgpA"
               />

               <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                         <header>
                              <div className={styles.authorAndTime}>
                                   <strong>Nayra Kethiilyn</strong>
                                   <time dateTime="2024-09-11 20:30:56" title='2024-09-11 20:30:56 ' >Cerca de 1h atras</time>
                              </div>

                              <button title='Deletar comentário'>
                                   <Trash size={24} />
                              </button>
                         </header>
                         <p>Muito bom Nayra, parabéns!!</p>
                    </div>

                    <footer>
                         <button>
                              <ThumbsUp />
                              Aplaudir <span>28</span>
                         </button>
                    </footer>
               </div>
          </div>
     )
}