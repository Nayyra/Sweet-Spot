import { PencilLine } from 'phosphor-react'
import styles from './SideBar.module.css';
import { Avatar } from './Avatar';

export function SideBar() {
     return (
          <aside className={styles.sideBar}>
               <img className={styles.cover}
                    src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?q=60&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               />

               <div className={styles.profile}>

               <Avatar
                src="https://media.licdn.com/dms/image/v2/D4D03AQEEt2hFQPjQ9w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726700433074?e=1732147200&v=beta&t=IJp9NZnBpvAKtoeVMVTFZii2MtoDS74FZkWJt5OSgpA" />

                    <strong>Nayra Kethillyn</strong>
                    <span>Web developer</span>

                    <footer>
                         <a href="#">
                              <PencilLine
                                   size={20}
                              />
                              Editar seu perfil
                         </a>
                    </footer>
               </div>

          </aside>
     );
}