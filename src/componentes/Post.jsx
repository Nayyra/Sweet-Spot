import { Comment } from './comment'
import { Avatar } from './Avatar'
import styles from './Post.module.css'
import { useState } from 'react';


export function Post({ author, publishedAt, content }) {

     const [comentarios, setComments] = useState([
          'Post muito bacana!'
     ])

     const [newComentText, setnNewComentText] = useState('')

     const publishFormatted = new Intl.DateTimeFormat('pt-br', {
          day: '2-digit',
          month: 'long',
          hour: '2-digit',
          minute: '2-digit'
     }).format(publishedAt);

     const isNewCOmment = newComentText.length === 0;

     function handelCreateComent() {
          event.preventDefault();//evita o comportamento padrão do onClick no html
          setComments([...comentarios, newComentText]);
          setnNewComentText('');


     }

     function handelNewComentText(){
          event.target.setCustomValidity('');
          setnNewComentText(event.target.value);
     }

     function deleteComment(commentToDelete) {
          const commentsSemOApagado = comentarios.filter(comment => {
               return comment !== commentToDelete;
          })

          setComments(commentsSemOApagado);
     }

     function handleNewCommentInvalide(params) {
          event.target.setCustomValidity('Campo obrigátorio');
     }

     return (
          <article className={styles.post}>
               <header>
                    <div className={styles.author}>
                         <Avatar
                              src={author.avatarUrl}
                         />
                         <div className={styles.authorInfo}>
                              <strong>{author.name}</strong>
                              <span>{author.name}</span>

                         </div>
                    </div>

                    <time dateTime="2024-09-11 20:30:56" title={publishedAt.toISOString()}>
                         {publishFormatted}
                    </time>
               </header>

               <div className={styles.content}>
                    {content.map(line => {
                         if (line.type == 'paragraph') {
                              return <p key={line.content} >{line.content}</p>
                         } else if (line.type == 'link') {
                              return <p key={line.content} ><a href="">{line.content}</a></p>
                         }
                    })}
               </div>

               <form onSubmit={handelCreateComent} className={styles.commmentForm}>
                    <strong>deixe seu feedback</strong>

                    <textarea
                         name='input'
                         value={newComentText}
                         placeholder='Deixe se comentario'
                         onChange = {handelNewComentText}
                         onInvalid={handleNewCommentInvalide}
                         required
                    />

                    <footer>
                         <button type='submit' disabled={isNewCOmment}>Publicar</button>
                    </footer>

               </form>

               <div className={styles.commentList}>
                    {comentarios.map(line => {
                         return (<Comment 
                                   key={line} 
                                   content={line} 
                                   onDeleteComment={deleteComment}
                                   />
                              ) 
                    })}
               </div>
          </article>
     )
}

//ESTADO = variaveis que eu quero quero componente manitore
//useState 