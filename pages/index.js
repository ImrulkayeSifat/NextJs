import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { server } from '../config';
import ArticleList from '../components/ArticleList';
export default function Home({articles}) {
  
  return (
    <div className={styles.container}>
      

      <ArticleList art={articles}/>
      
      
    </div>
  )
}

export const getStaticProps = async() =>{
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()

  return {
    props:{
      articles
    }
  }
}

// export const getStaticProps = async() =>{
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props:{
//       articles
//     }
//   }
// }