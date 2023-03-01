import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { Logo } from '../Logo';
import { Header } from '../Header';
import styles from './BannerHero.module.scss';

type propsType = {
  image?: string;
  pageTitle?: string;
};

const BannerHero = ({image, pageTitle}: propsType) => {
  return (
    <div>
      <div className={'container ' + styles['hero-banner']}>
        <h1>{pageTitle}</h1>
        <img alt='Gia Phả Online, Sổ tay gia phả' src={image == '' ? '/images/buses/bus-dummy.jpeg' : image} width="1800" height="686"/>
      </div>        
    </div>
  );
};

export default BannerHero;
