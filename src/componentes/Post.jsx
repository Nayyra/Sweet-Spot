import { Comment } from './comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'



export function Post() {
     return (
          <article className={styles.post}>
               <header>
                    <div className={styles.author}>
                         <Avatar
                              src="https://media.licdn.com/dms/image/v2/D4D03AQEEt2hFQPjQ9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726700433074?e=1732147200&v=beta&t=IJp9NZnBpvAKtoeVMVTFZii2MtoDS74FZkWJt5OSgpA"
                         />
                         <div className={styles.authorInfo}>
                              <strong>Nayra Kethillyn</strong>
                              <span>Web developer</span>

                         </div>
                    </div>

                    <time dateTime="2024-09-11 20:30:56" title='2024-09-11 20:30:56 ' >Publicado a 1h</time>
               </header>

               <div className={styles.content}>
                    <p>fala cambada</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum aut corrupti provident magnam! Provident sit, voluptate iusto iste optio, dolorem dolorum doloribus magni excepturi odio suscipit tempora nesciunt eveniet blanditiis!</p>
                    <p>👉{' '}<a href="">nay.dev/doctorcare</a></p>
                    <p>
                         <a href="">#novoprojeto</a>{' '}
                         <a href="">#dev</a>{' '}
                         <a href="">#fullstack</a>{' '}
                    </p>
               </div>

               <form className={styles.commmentForm}>
                    <strong>deixe seu feedback</strong>
                    <textarea
                    placeholder='Deixe se comentario'
                    />

                    <footer>
                    <button type='submit'>Publicar</button>
                    </footer>
               </form>

               <div className={styles.commentList}>
                    <Comment />
                    <Comment />
                    <Comment />
               </div>
          </article>
     )
}