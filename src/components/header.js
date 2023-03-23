import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faHome, faAddressCard, faA} from '@fortawesome/free-solid-svg-icons';
import { faDiscord, faGithub, faVk } from '@fortawesome/free-brands-svg-icons';
import { Play } from '@next/font/google'


const play = Play({ subsets: ['cyrillic'], weight: ['400'] })
const Header = () => {
    return (
        <header>
            <div className='nav-bar'>
                <Link className='logo' href='/'>
                    <img src='/P.png'></img>
                    <img className="sub-logo" src='/logo_sub_p.png' alt="p"></img>
                </Link>
                <nav>
                    <Link href='/' className={`${play.className}`}>
                        <FontAwesomeIcon icon={faHome} color="#4d4d4e"></FontAwesomeIcon>
                    </Link>
                    <Link href='/about' className={[play.className, "about-link"].join(" ")}>
                        <FontAwesomeIcon icon={faAddressCard} color="#4d4d4e"></FontAwesomeIcon>
                    </Link>
                    <Link href='/files' className={[play.className, "portfolio-link"].join(" ")}>
                        <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e"></FontAwesomeIcon>
                    </Link>
                </nav>
                <ul>
                    <li>
                        <Link href="https://vk.com/elias_p">
                            <FontAwesomeIcon icon={faVk} />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://github.com/tozuf0x">
                            <FontAwesomeIcon icon={faGithub}  />
                        </Link>
                    </li>
                    <li>
                        <Link href="Discord.com/users/461167953094901772">
                            <FontAwesomeIcon icon={faDiscord}/>
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header;
