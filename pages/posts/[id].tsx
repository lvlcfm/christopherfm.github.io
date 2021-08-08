import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Head from 'next/head';
import Image from 'next/image';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import { GetStaticProps, GetStaticPaths } from 'next';

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
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
      <article className={utilStyles.francogmentsPost}>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>

        <div
          className={utilStyles.francogmentsContent}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
