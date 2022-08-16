import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'
import './global.css'


export function App() {
  return (
    <div>
    <Header />
   
   <div className={styles.wrapper}>
    <Sidebar />
      <main>
        <Post 
        author="Chard Willian" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, temporibus ipsam amet, tempora unde assumenda voluptatum quis, accusamus odio rem vel id officiis maiores est. Illo sed sapiente alias cumque?"
        />

        <Post
        author="Luciana"
        content="Um novo post bem legal"
        />
      </main>
   </div>
   </div>
  )
}
