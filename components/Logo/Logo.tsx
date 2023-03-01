import Link from 'next/link';
import styles from './Logo.module.scss';



const Logo = () => {
  return (
    <Link href="/">
      <a className={styles.logo}>
          <img alt="Benefit logo" src="/images/logo-black.png" width="178" height="40" className={styles['logo']} />
      </a>
    </Link>
  );
};

export default Logo;
