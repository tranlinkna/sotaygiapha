import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BannerHero } from '../components/BannerHero';
import { Introduce } from '../components/Introduce';
import { FamilyLines } from '../components/FamilyLines';

export default function Home() {

  const bannerInfo = {
    imageBanner:'/images/banner/herobanner.png',
    pageTitle: 'Sổ Tay Gia Phả'
  }

  return(
    <div className='homepage'>
      <BannerHero image={bannerInfo.imageBanner} pageTitle={bannerInfo.pageTitle} />
      <Introduce/>
      <FamilyLines/>
    </div>
  )
}
