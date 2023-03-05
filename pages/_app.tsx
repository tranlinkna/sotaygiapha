import Head from 'next/head'
import '../styles/Globals.scss'
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, minimum-scale=1, maximum-scale=1" />
        <meta name="keywords" content="Sổ Tay Gia Phả, Tạo Gia Phả, Sổ Gia Phả, Gia Phả Dòng Tộc, Gia Phả Online" />
        <meta name="author" content="NaKhanhNhu" />
        <link rel="icon" href="/favicon.ico" />
        <title>
          Sổ Tay Gia Phả
        </title>
      </Head>

      <div id="root">
        <Component {...pageProps} />        
      </div>
    </>
  )
  
  
}
