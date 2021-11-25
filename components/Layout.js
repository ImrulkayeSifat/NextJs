import styles from '../styles/Home.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'
const Layout = ({children}) => {
    return (
        <>
            <Meta />
            <Nav />
            <div className={styles.container}>
                <main className={styles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout
