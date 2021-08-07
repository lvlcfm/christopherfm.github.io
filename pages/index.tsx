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
          src="/images/clapperboard.svg"
          alt="Clapperboard"
          width={700}
          height={602}
        />
      </section>
    </Layout>
  );
}
