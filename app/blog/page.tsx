import Link from 'next/link'

import styles from '../../styles/Home.module.css'

export default function Page() {
  return (
    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to Blog
      </h1>

      <Link href='/'>
        <h2>{'<- voltar'}</h2>
      </Link>

    </main>
  )
}