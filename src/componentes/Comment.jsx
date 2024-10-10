import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'

import styles from './Comment.module.css'
import { useState } from 'react';


export function Comment({ content, onDeleteComment }) {

     const [likeCount, setLikeCount] = useState(0);

     function handleDeleteComment() {
          onDeleteComment(content);
     }

     function handleLikeComment() {
          setLikeCount((state) => {
               return state + 1
          }

          )
     }


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

                              <button onClick={handleDeleteComment} title='Deletar comentário'>
                                   <Trash size={24} />
                              </button>
                         </header>
                         <p>{content}</p>
                    </div>

                    <footer>
                         <button onClick={handleLikeComment}>                         <ThumbsUp />
                              Aplaudir <span>{likeCount}</span>
                         </button>
                    </footer>
               </div>
          </div>
     )
}