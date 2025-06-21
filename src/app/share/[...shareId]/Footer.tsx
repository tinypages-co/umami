import { CURRENT_VERSION, HOMEPAGE_URL } from '@/lib/constants';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
        <b>TinyStats</b> {`v${CURRENT_VERSION}`}
    </footer>
  );
}

export default Footer;
