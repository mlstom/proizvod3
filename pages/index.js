import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'
import slika from '../slike/Slika3.png'
import Router from 'next/router'

export default function Home() {
  const [email, setemail] = useState(false)
  const [mail, setmail] = useState('')
  const [nema, setnema] = useState(false)


  
  const emailSaving = async () => {
    if (mail) {
      fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'aplication/json',
        },
        body: JSON.stringify({ mail })
      })
      setemail(false)
    } else {
      setnema(true)
      setTimeout(() => {
        setnema(false)
      }, 2000)
    }
  }
  const handle = async () => {
    Router.push('https://www.digistore24.com/redir/424534/mlstomic/')
  }
  const keyUp = (e) => {
    if (e.keyCode == 13) {
      emailSaving()
    }
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Blood Sugar</title>
        <meta name="description" content="Smart Blood Sugar" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {email &&
        <div className={styles.absolute}>
          <div className={styles.contmail}>
            <p>Just to be sure that you are human, enter your mail below</p>
            {nema && <p style={{ color: 'red' }}>Youe have to enter an email to visit this page</p>}
            <input style={{ padding: '5px 10px' }} type='email' placeholder='exaple@inkrist.net' value={mail} onChange={(e) => setmail(e.target.value)} onKeyUp={(e) => keyUp(e)} />
            <a onClick={() => emailSaving()} style={{ color: '#fff', backgroundColor: '#6c63ff', padding: '5px 10px', borderRadius: '10px', marginTop: '20px', cursor: 'pointer' }}>Start watching now!!! </a>
          </div>
        </div>
      }
      <header className={styles.header}>
        <p style={{ fontSize: '20px' }}>Smart Blood Sugar</p>
        <p>Home</p>
      </header>
      <main className={styles.main}>
        <h1 style={{ color: '#6c63ff' }} >Urgent news about Metformin</h1>
        <div onClick={(e) => handle()} style={{cursor:'pointer'}}>
          <Image src={slika} alt='kurac' />
        </div>
        <h2 style={{ color: '#6c63ff', margin: 0, marginTop: '20px' }}>Metformin: Medicine or Poison?</h2>
        <p>
          Metformin and 3 other top selling diabetes drugs are under secret review. What' is your doctor not telling you?
        <br/>
        <br/>
        Doctors are urging every American with diabetes to <span style={{ color: '#6c63ff', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => handle()}> watch this trending</span>  news story
        </p>
      </main>
    </div>
  )
}
