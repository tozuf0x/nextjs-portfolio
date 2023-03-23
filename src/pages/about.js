import Link from "next/link";
import styles from '@/styles/about.module.css';
import Image from "next/image";
import { Play } from '@next/font/google'
 import {FaPhp} from "react-icons/fa"
import {SiCsharp} from "react-icons/si"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faWordpress,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'


const play = Play({ subsets: ['cyrillic'], weight: ['400'] })
const AboutPage  = () => {
 return(
    <div>
        <Image src="/bground3.jpg" alt="background" width={1920} height={1080}></Image>
        <div className={styles.textzone}>
            <h1>Обо мне</h1>
            <p className={play.className}>
            Меня зовут Илья, мне 21 год, я начинающий разработчик. Получил профильное образование в области информационных систем,
            сейчас продолжаю обучаться в вузе на заочном.
            </p>
            <p className={play.className}>Я хочу участвовать в реальных проектах и работать
в команде профессионалов, и нахожусь в поиске среды для практического роста.</p>
            <p className={play.className}>Вот несколько технологий, навыки владения которыми я приобрел в ходе обучения и самостоятельно, изучая новые:</p>
            <ul className={[play.className, styles.skillslist].join(" ")}><li>JavaScript</li><li>C#</li><li>React</li><li>ASP .NET</li><li>PhP</li><li>WordPress</li></ul>
        </div>
        <div className={styles.stagecubecont}>
          <div className={styles.cubespinner}>
            <div className={styles.face1}>
              <FontAwesomeIcon icon={faWordpress} color="#00749C" />
            </div>
            <div className={styles.face2}>
              <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
            </div>
            <div className={styles.face3}>
              <FaPhp color="#FFFFFF " />
            </div>
            <div className={styles.face4}>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className={styles.face5}>
              <FontAwesomeIcon icon={faJsSquare} color="#ffd700" />
            </div>
            <div className={styles.face6}>
              <SiCsharp color="#00008B"/>
            </div>
          </div>
        </div>
    </div>
 )
}
export default AboutPage;
