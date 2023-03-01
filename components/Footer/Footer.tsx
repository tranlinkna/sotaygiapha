import Link from 'next/link';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles['footer']}>    
      <div className={styles['footer--bottom']}>
        Copyright © 2023 by NKN. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
