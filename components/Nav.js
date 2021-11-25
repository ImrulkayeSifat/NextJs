import Link from 'next/link'
import React from 'react'
import styles from '../styles/Home.module.css'
const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
