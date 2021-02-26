import { CompletedChallenges } from '../components/CompletedChallegens';
import { CountDown } from '../components/CountDown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';

import Head from 'next/head'
import styles from '../styles/pages/Home.module.css'
import { ChallengeBox } from '../components/ChallengeBox';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
      <div className={styles.container}>
        <Head>
          <title> Inicio | Move.it</title>
        </Head>

        <ExperienceBar/>

        <CountdownProvider>
          <section>
            <div>
              <Profile />
              <CompletedChallenges />
              <CountDown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </section>
        </CountdownProvider>
      </div>
  )
}
