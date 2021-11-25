import styles from '../styles/Home.module.css'

const Header = () => {
    return (
        <div>
            <h1 className="title">
                <span>Webdev News</span>
            </h1>
            <style jsx>
                {
                    `
                        .title{
                            color:red;
                        }
                    `
                }
            </style>
        </div>
    )
}

export default Header
