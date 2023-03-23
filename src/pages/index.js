
import Link from 'next/link';
import React from 'react';
import Typewriter from "typewriter-effect";
import styles from '@/styles/Home.module.css';
import SVGAnimation from '@/components/svganimation';
export default function Home() {
  return (
    <div className={styles.homepage}>
      <div className={styles.textzone}>
        <h1>Привет, <br /> Я Пашников,
         
          <br />
          <Typewriter
  options={{
    strings: ['Junior-разработчик.'],
    autoStart: true,
    pauseFor: 6000,
    loop: true,
  }}
  />
        </h1>
        <h2>Web / ASP .NET / Wordpress</h2>
        <Link href="https://krasnodar.hh.ru/resume/c2bf50efff0b2c20ff0039ed1f6369306e3648" className={styles.flatbutton}>ПРОСМОТРЕТЬ РЕЗЮМЕ</Link>
      </div>
        <SVGAnimation></SVGAnimation>
    </div>
  )
}
