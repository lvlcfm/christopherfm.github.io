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
      <section className={utilStyles.projectsHeadingContainer}>
        <div className={utilStyles.projectsHeading}>Projects</div>
        <div>red carpet access to projects made with friends</div>
      </section>
      <section>
        <div className={utilStyles.projectContainer}>
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
          <div className={utilStyles.projectDescription}>
            Airlock, an Airtable client, with Authentication
          </div>
        </div>
        <div className={utilStyles.projectContainer}>
          <a
            href="https://github.com/ANovaBerkeley/anovalabs"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/projects/movie_ticket_anovalabs.svg"
              alt="Movie Ticket for ANova Labs"
              width={698}
              height={459}
            />
          </a>
          <div>ANova Labs, an open source Ed Tech platform project</div>
        </div>
      </section>
    </Layout>
  );
}
