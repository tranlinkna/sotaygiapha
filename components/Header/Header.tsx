import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { Logo } from '../Logo';
import styles from './Header.module.scss';

const Header = () => {
  const renderLogo = () => {
    return (
      <Logo />
    );
  };

  return (
    <header className={'container ' + styles['header']} id="header">
        {renderLogo()}
        <nav className={styles['main-nav']}>
          <ul>
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>
              <Link href="/buses">Các nhà xe</Link>
            </li>
            <li>
              <Link href="/bus-trips/">Các chuyến xe</Link>
            </li>
            <li>
              <Link href="/cards-listing/">Tìm tuyến xe</Link>
            </li>
          </ul>
        </nav>
        <div className={styles['send-card']}>
          <img alt="" src="/images/icon-zalo.png" width="" height="" />
          <Link href="/cards-listing/"><a>Gửi ảnh xe và danh thiếp cho chúng tôi: <strong>0914471071</strong></a></Link>          
        </div>
    </header>
  );
};

export default Header;
