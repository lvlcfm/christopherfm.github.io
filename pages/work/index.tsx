import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import utilScriptStyles from '../../styles/utilsScreenPlay.module.css';

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <div className={utilScriptStyles.container}>
          <div className={utilScriptStyles.title}>WORK EXPERIENCE</div>
          <div className={utilScriptStyles.credit}>Written by</div>
          <div className={utilScriptStyles.author}>
            Christopher Franco Monterrosa
          </div>
          <div className={utilScriptStyles.date}>8 August 2021</div>
          <div>
            <p>
              This story takes place in the bay area, with the iconic summer in
              south bay mixed in between.
            </p>
            <p>
              A coming of age story, weaving four engineering experiences that
              Christopher Franco Monterrosa goes through. From their first
              internship at Glassdoor, to their summer at vmware, to finally
              leading engineering efforts at YC backed companies.
            </p>
            <p>
              The story starts in the past, a few months after his first startup
              experience at a fashion tech company he ran with his friend.
            </p>
            <p>It begins in the summer of 2017.</p>
          </div>
        </div>
      </section>
      <section>
        <div className={utilStyles.moviePoster}>
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
        </div>
        <div className={utilStyles.moviePoster}>
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
        </div>
        <div className={utilStyles.moviePoster}>
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
        </div>
        <div>
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
        </div>
      </section>
    </Layout>
  );
}
