import styles from '../styles/Home.module.css'
import ArticleItem from './ArticleItem'
const ArticleList = ({art}) => {
    return (
        <div className={styles.grid}>
            {/* {art.map(arti => (<h1 key={arti.id}>{arti.title}</h1>))} */}
            {art.map((article)=>(<ArticleItem key={article.id} article={article} />))}
        </div>
    )
}

export default ArticleList
