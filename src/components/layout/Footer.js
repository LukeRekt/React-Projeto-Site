import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css';

function Footer(){
    return (
    <footer className={styles.footer}>
        <ul className={styles.social_list}>
            <li>
                <FaFacebook/>
            </li>
            <li>
              <FaInstagram/>
            </li>
            <li>
            <a className={styles.logoLinkedin} target="_blank" href="https://www.linkedin.com/in/lucas-rodrigues-67484120b/"><FaLinkedin/></a>
                
            </li>
        </ul>
        <p className={styles.copy_right}><span>Costs</span> &copy; 2021</p>
    </footer>)
}

export default Footer