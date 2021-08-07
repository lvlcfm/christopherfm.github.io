import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div>
          <p>red carpet access to projects made with friends</p>
        </div>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Projects</h2>
        <div>
          <a
            href="https://github.com/calblueprint/airlock"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/projects/movie_ticket_airlock.svg"
              alt="Movie Ticket for Airlock"
              width={698}
              height={459}
            />
          </a>
          <p>Airlock, an Airtable client, with Authentication</p>
        </div>
        <div>
          <a
            href="https://github.com/ANovaBerkeley/anovalabs"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/projects/movie_ticket_airlock.svg"
              alt="Movie Ticket for ANova Labs"
              width={698}
              height={459}
            />
          </a>
          <p>ANova Labs, an open source Ed Tech platform project</p>
        </div>
      </section>
    </Layout>
  );
}
