import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {META} from './meta'

const {title, description, favicon} = META;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href={favicon} />
      </Head>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </div>
  )
}

export default Home
