import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Layout, { siteTitle } from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { getSortedPostsData } from '../../lib/posts';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.francogmentsContainer}>
        <div className={utilStyles.francogmentsLogo}>
          <Image
            src="/images/writing/logo_francogments.svg"
            alt="FranCogMents Logo"
            width={196.7}
            height={181.5}
          />
        </div>

        <div className={utilStyles.francogments}>
          Franco&apos;s Cognitive Experiments
        </div>
        <div className={utilStyles.slogan}>
          FranCogMents - internet stationary for my mind
        </div>
      </section>
      <section className={utilStyles.francogmentPostsContainer}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
