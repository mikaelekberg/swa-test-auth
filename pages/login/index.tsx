import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login to Lakitu
        </h1>

        <p className={styles.description}>
          Select your identity provider
        </p>

        <div className={styles.grid}>
          <a href="/.auth/login/aad" className={styles.card}>
            <h2>Microsoft &rarr;</h2>
          </a>

          <a href="/.auth/login/twitter" className={styles.card}>
            <h2>Twitter &rarr;</h2>
          </a>

          <a href="/.auth/login/github" className={styles.card}>
            <h2>Github &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
