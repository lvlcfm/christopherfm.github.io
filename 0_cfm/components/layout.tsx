import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navigation from './Navigation';

export const siteTitle =
  'Christopher Franco Monterrosa - Software Engineer, Writer, Designer and Smart City Architect';
export default function Layout({ children }: { children: React.ReactNode }) {
  const meta = {
    title:
      'Christopher Franco Monterrosa - Software Engineer, Writer, Designer and SMART City Architect',
    description: `Software Engineer, Writer, Designer and SMART City Architect`,
    image: 'https://christopher.fm/images/banner.png',
    type: 'website',
  };

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/static/favicons/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/Bangers/Bangers-regular.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBM/IBM-Courier.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBM/IBM-Courier-Bold.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/IBM/IBM-Courier-Italic.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/static/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/static/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/static/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/static/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/static/favicons/safari-pinned-tab.svg"
          color="#655b5b"
        />
        <link rel="shortcut icon" href="/static/favicons/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta
          name="msapplication-config"
          content="/static/favicons/browserconfig.xml"
        />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Christopher Franco Monterrosa" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lvlcfm" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <header className={styles.header}>
        <Link href="/">
          <a>
            <Image
              src="/images/christopherFrancoMonterrosaLogo.svg"
              alt="Clapperboard"
              width={55}
              height={43}
            />
          </a>
        </Link>
        <Navigation />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
