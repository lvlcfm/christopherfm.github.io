import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <Image
          src="/images/profile.svg"
          alt="Man with box in over his head"
          width={816.73}
          height={546}
        />
        <div className={utilStyles.aboutSlogan}>
          he thinks both inside and outside the box
        </div>
      </section>
      <section>
        <div className={utilStyles.CFM}>Christopher Franco Monterrosa</div>
        <div className={utilStyles.bioBoxContainer}>
          <div className={utilStyles.bioBox}>
            <p>
              Christopher Franco Monterrosa is a Full Stack Engineer and
              creative technologist. He enjoys building solutions with people
              and communities — whether it be tools, products or systems.
            </p>
            <p>He loves engineering with purpose.</p>
            <p>
              His journey as a Software Engineer has had him running a fashion
              tech startup, to working at medium and big sized companies such as
              Glassdoor and vmware to leading engineering efforts at YC backed
              companies.
            </p>
            <p>
              Ask him about Smart Cities, Open Source, Music, Design,Cycling,
              Productivity,Movies, Writing, Books, Dancing, Anime and gaming.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
