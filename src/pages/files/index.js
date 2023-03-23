import Link from "next/link";
import { Play } from '@next/font/google'
import styles from '@/styles/portfolio.module.css'
import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
const play = Play({ subsets: ['cyrillic'], weight: ['400'] })
const Portfolio = () => {
    return (
        
        <div className={styles.sectioncontainer}>
        <h1 className={styles.projecttitle}>Проекты</h1>
        <p className={[play.className, styles.text].join(" ")}>Вот некоторые из моих пет-проектов, разработанные в ходе обучения и самостоятельно:</p>
            <div className={styles.projectcardscontainer}>
                <div className={styles.projectcard}>
                    <div className={styles.imagecontainer}>
                        <Link href="https://github.com/tozuf0x/QR-Coder" className={styles.projectexternallink}>
                            <img src="/qrcode1_1.jpg" alt="Project1" className={styles.projectimage} loading="lazy"></img>
                        </Link>
                    </div>
                    <div className={styles.projectdetailscontainer}>
                        <h2 className={[play.className, styles.projectheading].join(" ")}>QR-Сканер</h2>
                        <p className={[play.className, styles.projectdetails].join(" ")}>Десктопное приложение на основе WPF, предназначенное для создания и сканирования QR кодов с возможностью сохранения.</p>
                        <Link href="https://github.com/tozuf0x/Django_HMS-Diplom-" className={styles.link}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Link>
                    </div>
                </div>
                <div className={styles.projectcard}>
                    <div className={styles.imagecontainer}>
                        <Link href="https://github.com/tozuf0x/Django_HMS-Diplom-" className={styles.projectexternallink} target="_blank">
                        <img src="/hospital.png" alt="Project1" className={styles.projectimage} loading="lazy"></img>
                        </Link>
                    </div>
                    <div className={styles.projectdetailscontainer}>
                        <h2 className={[play.className, styles.projectheading].join(" ")}>Медицинская ИС</h2>
                        <p className={[play.className, styles.projectdetails].join(" ")}>Ведение электронной истории пациента с фиксацией всей необходимой медицинской информации. Проект разработан для демо целей и не предназначен для использования в реальных условиях.</p>
                       
                    </div>
                </div>
                <div className={styles.projectcard}>
                    <div className={styles.imagecontainer}>
                        <Link href="https://github.com/tozuf0x/Minesweeper-Unity-" className={styles.projectexternallink} target="_blank">
                        <img src="/tsts.jpg" alt="Project1" className={styles.projectimage} loading="lazy"></img>
                        </Link>
                    </div>
                    <div className={styles.projectdetailscontainer}>
                        <h2 className={[play.className, styles.projectheading].join(" ")}>Сапер</h2>
                        <p className={[play.className, styles.projectdetails].join(" ")}>Цель игры - очистить прямоугольную доску со скрытыми «минами», не взорвав ни одну из них, с помощью подсказок о количестве соседних мин на каждом поле.</p>
                        <Link href="https://github.com/tozuf0x/Django_HMS-Diplom-" className={styles.link}>
                            <FontAwesomeIcon icon={faGithub}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Portfolio;