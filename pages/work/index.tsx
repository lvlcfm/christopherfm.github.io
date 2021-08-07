import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';

export default function Work() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}></section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Work </h2>
        <Link href="/work/glassdoor">
          <a>
            <Image
              src="/images/work/movie_poster_glassdoor.svg"
              alt="Clapperboard"
              width={545}
              height={695.46}
            />
          </a>
        </Link>
        <Link href="/work/vmware">
          <a>
            <Image
              src="/images/work/movie_poster_vmware.svg"
              alt="Clapperboard"
              width={545}
              height={695.46}
            />
          </a>
        </Link>
        <Link href="/work/blitziq">
          <a>
            <Image
              src="/images/work/movie_poster_blitziq.svg"
              alt="Clapperboard"
              width={545}
              height={695.46}
            />
          </a>
        </Link>
        <Link href="/work/pathrise">
          <a>
            <Image
              src="/images/work/movie_poster_pathrise.svg"
              alt="Clapperboard"
              width={545}
              height={695.46}
            />
          </a>
        </Link>
      </section>
    </Layout>
  );
}
