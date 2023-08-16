import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={utilStyles.clapperboard}>
          <Link href="/work">
            <a>
              <Image
                src="/images/clapperboard.svg"
                alt="Clapperboard"
                width={700}
                height={602}
              />
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
