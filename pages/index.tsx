import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <Image
          src="/../public/images/clapperboard.svg"
          alt="Clapperboard"
          width={698}
          height={597.34}
        />
      </section>
    </Layout>
  );
}
